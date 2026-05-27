/* confetti.js — lichtgewicht canvas confetti voor Kevin Froger */
(function () {
  'use strict';

  var COLORS = ['#FFB800','#380C29','#FF4E6A','#9333EA','#10B981','#F59E0B','#EF4444','#FFFFFF','#FFF3C4'];
  var activeCanvas = null;
  var animationId = null;

  function checkReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function createConfettiParticle(canvas) {
    var shapes = ['rect','circle','ribbon'];
    return {
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * canvas.height * 0.3,
      r: Math.random() * 7 + 4,
      d: Math.random() * 6 + 1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      tilt: Math.random() * 10 - 10,
      tiltAngle: Math.random() * Math.PI * 2,
      tiltSpeed: Math.random() * 0.07 + 0.03,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      opacity: 1,
      vx: Math.random() * 2 - 1
    };
  }

  function cleanupConfetti() {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    if (activeCanvas && activeCanvas.parentNode) {
      activeCanvas.parentNode.removeChild(activeCanvas);
      activeCanvas = null;
    }
  }

  function triggerConfetti() {
    if (checkReducedMotion()) return;

    cleanupConfetti();

    var canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
    document.body.appendChild(canvas);
    activeCanvas = canvas;

    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var isMobile = window.innerWidth < 768;
    var count = isMobile ? 55 : 130;
    var particles = [];

    for (var i = 0; i < count; i++) {
      particles.push(createConfettiParticle(canvas));
    }

    var startTime = Date.now();
    var duration = 1500;

    function draw() {
      var elapsed = Date.now() - startTime;
      if (elapsed >= duration) {
        cleanupConfetti();
        return;
      }

      var progress = elapsed / duration;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.tiltAngle += p.tiltSpeed;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) * 0.6;
        p.x += p.vx + Math.sin(p.tiltAngle) * 0.8;
        p.tilt = Math.sin(p.tiltAngle) * 12;
        p.opacity = Math.max(0, 1 - progress * 1.3);

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = p.color;

        if (p.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 0.6, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 'ribbon') {
          ctx.beginPath();
          ctx.lineWidth = p.r * 0.4;
          ctx.moveTo(p.x + p.tilt, p.y);
          ctx.lineTo(p.x + p.tilt + p.r, p.y + p.r * 1.5);
          ctx.stroke();
        } else {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.tiltAngle);
          ctx.fillRect(-p.r / 2, -p.r * 0.4, p.r, p.r * 0.8);
          ctx.restore();
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();
  }

  function initConfettiButtons() {
    document.querySelectorAll('[data-confetti]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        triggerConfetti();
      });
    });
  }

  /* Page load burst */
  window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      triggerConfetti();
    }, 400);
    initConfettiButtons();
  });

  /* Expose globally */
  window.triggerConfetti = triggerConfetti;
  window.initConfettiButtons = initConfettiButtons;
  window.createConfettiParticle = createConfettiParticle;
  window.cleanupConfetti = cleanupConfetti;
  window.checkReducedMotion = checkReducedMotion;
})();
