/* main.js — Kevin Froger website interacties */
(function () {
  'use strict';

  /* ── Mobile Menu ── */
  function initMobileMenu() {
    var toggle = document.getElementById('menu-toggle');
    var menu   = document.getElementById('mobile-menu');
    var overlay = document.getElementById('menu-overlay');
    var closeBtn = document.getElementById('menu-close');
    if (!toggle || !menu) return;

    function openMenu() {
      menu.classList.add('is-open');
      document.body.classList.add('menu-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.querySelector('.hamburger-line:nth-child(1)').style.transform = 'rotate(45deg) translate(6px,6px)';
      toggle.querySelector('.hamburger-line:nth-child(2)').style.opacity = '0';
      toggle.querySelector('.hamburger-line:nth-child(3)').style.transform = 'rotate(-45deg) translate(6px,-6px)';
    }

    function closeMenu() {
      menu.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('.hamburger-line:nth-child(1)').style.transform = '';
      toggle.querySelector('.hamburger-line:nth-child(2)').style.opacity = '';
      toggle.querySelector('.hamburger-line:nth-child(3)').style.transform = '';
    }

    toggle.addEventListener('click', function () {
      menu.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ── Sticky Header ── */
  function initStickyHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  /* ── Smooth Scroll ── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        var header = document.getElementById('site-header');
        var headerH = header ? header.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.scrollY - headerH - 12;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ── Active Nav on Scroll ── */
  function initActiveNav() {
    var sections = document.querySelectorAll('section[id]');
    var links = document.querySelectorAll('.nav-link');
    if (!sections.length || !links.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('is-active'); });
          var active = document.querySelector('.nav-link[href="#' + entry.target.id + '"]');
          if (active) active.classList.add('is-active');
        }
      });
    }, { threshold: 0.25, rootMargin: '-80px 0px -60% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ── FAQ Accordion ── */
  function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(function (item) {
      var btn = item.querySelector('.faq-question');
      var ans = item.querySelector('.faq-answer');
      if (!btn || !ans) return;

      ans.style.maxHeight = '0';
      ans.style.overflow = 'hidden';
      ans.style.transition = 'max-height 0.35s ease';

      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');

        document.querySelectorAll('.faq-item.is-open').forEach(function (open) {
          open.classList.remove('is-open');
          open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          open.querySelector('.faq-answer').style.maxHeight = '0';
        });

        if (!isOpen) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          ans.style.maxHeight = ans.scrollHeight + 'px';
        }
      });
    });
  }

  /* ── Scroll Reveal ── */
  function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── Contact Form Validation ── */
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    function showError(field, msg) {
      field.classList.add('is-error');
      var err = field.parentNode.querySelector('.field-error');
      if (err) err.textContent = msg;
    }

    function clearError(field) {
      field.classList.remove('is-error');
      var err = field.parentNode.querySelector('.field-error');
      if (err) err.textContent = '';
    }

    form.querySelectorAll('input,textarea,select').forEach(function (field) {
      field.addEventListener('blur', function () {
        if (field.required && !field.value.trim()) {
          showError(field, 'Dit veld is verplicht.');
        } else {
          clearError(field);
        }
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      form.querySelectorAll('[required]').forEach(function (field) {
        if (!field.value.trim()) {
          showError(field, 'Dit veld is verplicht.');
          valid = false;
        } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          showError(field, 'Voer een geldig e-mailadres in.');
          valid = false;
        } else {
          clearError(field);
        }
      });

      if (!valid) {
        var firstErr = form.querySelector('.is-error');
        if (firstErr) firstErr.focus();
        return;
      }

      /* TODO: koppel aan back-end form handler (bijv. Netlify Forms of PHP) */
      var success = form.querySelector('.form-success');
      if (success) {
        success.classList.add('is-visible');
        success.focus();
      }
      form.reset();
    });
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initStickyHeader();
    initSmoothScroll();
    initActiveNav();
    initFAQ();
    initScrollReveal();
    initContactForm();
  });
})();
