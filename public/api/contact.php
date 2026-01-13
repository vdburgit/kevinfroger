<?php
declare(strict_types=1);
// /api/contact.php (komt live op: https://jouwdomein.nl/api/contact.php)

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

// === Config: PAS DIT AAN NAAR JE SITUATIE ===
$TO_EMAIL       = 'booking@kevinfroger.nl';
$TO_NAME        = 'Kevin Froger';
$FROM_ENVELOPE  = 'no-reply@kevinfroger.nl'; // moet een echt mailboxadres op je domein zijn
$FROM_HEADER    = 'no-reply@kevinfroger.nl';
$SITE_NAME      = 'kevinfroger.nl';

// === Input ===
$raw  = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data) || $data === []) {
  $data = $_POST; // fallback
}

// velden uit jouw React-form
$name       = trim((string)($data['name'] ?? ''));
$email      = trim((string)($data['email'] ?? ''));
$phone      = trim((string)($data['phone'] ?? ''));
$eventType  = trim((string)($data['eventType'] ?? ''));
$eventDate  = trim((string)($data['eventDate'] ?? ''));
$location   = trim((string)($data['location'] ?? ''));
$guestCount = trim((string)($data['guestCount'] ?? ''));
$budget     = trim((string)($data['budget'] ?? ''));
$message    = trim((string)($data['message'] ?? ''));
$bot        = trim((string)($data['company'] ?? '')); // honeypot (optioneel)

// simpele rate-limit per IP (30s)
$ip     = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$token  = hash('sha256', $ip);
$rlfile = sys_get_temp_dir() . "/kf_contact_$token";
$now    = time();
if (is_file($rlfile) && ($now - (int)@file_get_contents($rlfile)) < 30) {
  http_response_code(429);
  echo json_encode(['ok' => false, 'error' => 'Even wachten a.u.b.']);
  exit;
}
@file_put_contents($rlfile, (string)$now);

// Validatie: alleen naam, e-mail en eventType verplicht
if ($bot !== '' || $name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $eventType === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Ongeldige invoer']);
  exit;
}

// Bericht opbouwen met al je velden
$subject = "Nieuw bericht via {$SITE_NAME} - {$name}";
$lines = [
  "Naam: {$name}",
  "E-mail: {$email}",
  $phone      !== '' ? "Telefoon: {$phone}" : null,
  $eventType  !== '' ? "Type evenement: {$eventType}" : null,
  $eventDate  !== '' ? "Datum evenement: {$eventDate}" : null,
  $location   !== '' ? "Locatie/plaats: {$location}" : null,
  $guestCount !== '' ? "Aantal gasten: {$guestCount}" : null,
  $budget     !== '' ? "Budget indicatie: {$budget}" : null,
];

if ($message !== '') {
  $lines[] = "";
  $lines[] = "Bericht:";
  $lines[] = $message;
}

$body = implode("\n", array_values(array_filter($lines, fn($v) => $v !== null)));

// Headers
$headers   = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "From: Website {$SITE_NAME} <{$FROM_HEADER}>";
$headers[] = "Reply-To: {$name} <{$email}>";
$headers[] = "X-Mailer: PHP/" . PHP_VERSION;
$headersStr = implode("\r\n", $headers);

// "-f" zet envelope-sender; helpt tegen bounces
$additionalParams = "-f {$FROM_ENVELOPE}";

// Verzenden via server MTA
$ok = @mail($TO_EMAIL, $subject, $body, $headersStr, $additionalParams);

if ($ok) {
  echo json_encode(['ok' => true]);
} else {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Versturen mislukt']);
}
