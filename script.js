(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------------------------------------------------------
     THEME TOGGLE (in-memory only — no storage APIs used)
     --------------------------------------------------------- */
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
  }
  function toggleTheme() {
    var current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(current);
  }
  var themeBtns = [
    document.getElementById('themeToggleDesktop'),
    document.getElementById('themeToggleMobile')
  ];
  themeBtns.forEach(function (btn) {
    if (btn) btn.addEventListener('click', toggleTheme);
  });

  /* respect OS preference on first load */
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }

  /* ---------------------------------------------------------
     MOBILE DRAWER
     --------------------------------------------------------- */
  var sidebar = document.getElementById('sidebar');
  var drawerToggle = document.getElementById('drawerToggle');
  var drawerScrim = document.getElementById('drawerScrim');

  function openDrawer() {
    sidebar.classList.add('is-open');
    drawerScrim.classList.add('is-open');
    drawerToggle.setAttribute('aria-expanded', 'true');
  }
  function closeDrawer() {
    sidebar.classList.remove('is-open');
    drawerScrim.classList.remove('is-open');
    drawerToggle.setAttribute('aria-expanded', 'false');
  }
  if (drawerToggle) {
    drawerToggle.addEventListener('click', function () {
      var isOpen = sidebar.classList.contains('is-open');
      isOpen ? closeDrawer() : openDrawer();
    });
  }
  if (drawerScrim) drawerScrim.addEventListener('click', closeDrawer);

  /* close drawer when a nav link is tapped (mobile) */
  document.querySelectorAll('.toc__list a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 900) closeDrawer();
    });
  });

  /* ---------------------------------------------------------
     ACCORDION
     --------------------------------------------------------- */
  document.querySelectorAll('[data-accordion]').forEach(function (accordion) {
    accordion.querySelectorAll('.accordion-item__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        var panel = btn.nextElementSibling;
        btn.setAttribute('aria-expanded', String(!expanded));
        panel.style.maxHeight = expanded ? null : panel.scrollHeight + 'px';
      });
    });
  });

  /* ---------------------------------------------------------
     TABS
     --------------------------------------------------------- */
  document.querySelectorAll('[data-tabs]').forEach(function (tabGroup) {
    var buttons = tabGroup.querySelectorAll('.tabs__btn');
    var panels = tabGroup.querySelectorAll('.tabs__panel');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');
        buttons.forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-selected', String(b === btn));
        });
        panels.forEach(function (p) {
          p.classList.toggle('is-active', p.getAttribute('data-panel') === target);
        });
      });
    });
  });

  /* ---------------------------------------------------------
     FLIP CARDS (click / keyboard toggle — works on touch too)
     --------------------------------------------------------- */
  document.querySelectorAll('[data-flip]').forEach(function (card) {
    card.addEventListener('click', function () {
      card.classList.toggle('is-flipped');
    });
  });

  /* ---------------------------------------------------------
     SCROLLSPY — highlight active TOC entry
     --------------------------------------------------------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll('.sheet[id]'));
  var tocLinks = {};
  document.querySelectorAll('.toc__list a').forEach(function (a) {
    tocLinks[a.getAttribute('href').slice(1)] = a;
  });

  var spyObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var link = tocLinks[entry.target.id];
      if (!link) return;
      if (entry.isIntersecting) {
        Object.values(tocLinks).forEach(function (l) { l.classList.remove('is-active'); });
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

  sections.forEach(function (sec) { spyObserver.observe(sec); });

  /* ---------------------------------------------------------
     REVEAL ON SCROLL
     --------------------------------------------------------- */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach(function (sec) { revealObserver.observe(sec); });

})();
