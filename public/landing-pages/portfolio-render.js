/* Fills kage.html with the text from portfolio-data.js.
   Runs before the 3D scene script, so the scene picks up the new cards.
   You normally don't need to edit this file — edit portfolio-data.js instead. */
(function () {
  'use strict';
  var P = window.PORTFOLIO;
  if (!P) return;

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var el = function (tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  var setText = function (sel, text) { var e = $(sel); if (e && text != null) e.textContent = text; };
  var ARROW = '<svg viewBox="0 0 14 14" fill="none" width="13" height="13"><path d="M3 11 11 3M5 3h6v6" stroke="#dfe7e0" stroke-width="1.3"/></svg>';
  var safeUrl = function (u) { return /^https?:\/\//i.test(u || '') ? u : ''; };

  var projects = P.projects || [];
  var skills = P.skills || [];

  /* ---------------------------------------------------------- page title */
  document.title = P.name + ' — ' + P.role;

  /* ---------------------------------------------------------- preloader */
  setText('.pre-meta > span', 'Loading ' + P.shortName + "'s portfolio");

  /* ---------------------------------------------------------- nav */
  setText('.brand-tx b', P.shortName.toUpperCase());
  setText('.brand-tx i', P.role.toUpperCase());
  var navNames = ['About', 'Projects', 'Skills', 'Contact'];
  $$('#navlinks .nav-link').forEach(function (a, i) {
    var s = a.querySelector('span:not(.alt)'); if (s && navNames[i]) s.textContent = navNames[i];
  });

  /* ---------------------------------------------------------- hero */
  var eyebrow = $('.hero .eyebrow');
  if (eyebrow) { eyebrow.innerHTML = '<span class="dot"></span> '; eyebrow.appendChild(document.createTextNode(P.heroEyebrow)); }
  $$('.h-hero .mask-line > span').forEach(function (s, i) {
    if (P.heroLines[i] != null) s.textContent = P.heroLines[i];
  });
  setText('.hero-sub', P.heroSub);
  setText('.hero-cue span:first-child', 'Scroll to explore');
  $$('#chips .chip').forEach(function (chip, i) {
    var h = (P.highlights || [])[i]; if (!h) return;
    chip.querySelector('.tx b').textContent = h.title;
    chip.querySelector('.tx p').textContent = h.text;
  });
  var peek = $('.peek');
  if (peek) {
    peek.setAttribute('aria-label', 'Jump to projects');
    setText('.peek-cap i', 'Peek at my projects');
  }
  setText('.word-fb', P.heroWord);

  /* ---------------------------------------------------------- about */
  var aboutK = $('#gate .sec-head .k:first-child');
  if (aboutK) aboutK.innerHTML = '<b>01</b> — About Me';
  setText('#gate .h-sec', P.aboutTitle);
  setText('#gate .lead', P.aboutLead);
  setText('#gate .gate-copy .body', P.aboutBody);
  setText('#gate .arrowlink span:first-child', P.aboutLink);
  var stats = $('#gate .gate-stats');
  if (stats) {
    stats.innerHTML = '';
    (P.stats || []).forEach(function (s) {
      var v = s.value === 'auto-projects' ? pad(projects.length)
            : s.value === 'auto-skills' ? pad(skills.length) : s.value;
      var d = el('div'); d.appendChild(el('b', null, v)); d.appendChild(el('span', null, s.label));
      stats.appendChild(d);
    });
  }

  /* ---------------------------------------------------------- projects */
  var projK = $('#pathways .sec-head .k:first-child');
  if (projK) { projK.innerHTML = '<b>02</b> — '; projK.appendChild(document.createTextNode(P.projectsHead)); }
  var cards = $('#cards');
  if (cards) {
    /* keep the three original glows so every card gets the same lantern light */
    var glows = $$('.card .glow', cards).map(function (g) { return g.outerHTML; });
    cards.innerHTML = '';
    projects.forEach(function (p, i) {
      var url = safeUrl(p.liveUrl);
      var card = el(url ? 'a' : 'article', 'card' + (url ? '' : ' card--soon'));
      card.setAttribute('data-rv', 'up');
      card.setAttribute('data-view', String(i % 3));   /* one of the three live 3D views */
      card.setAttribute('data-cursor', '');
      if (url) { card.href = url; card.target = '_blank'; card.rel = 'noopener noreferrer'; }

      var fr = el('div', 'card-fr'); fr.setAttribute('data-frame', '');
      if (url) { var ar = el('span', 'card-ar'); ar.innerHTML = ARROW.replace(' width="13" height="13"', ''); fr.appendChild(ar); }
      if (glows.length) fr.insertAdjacentHTML('beforeend', glows[i % glows.length]);
      var lab = el('div', 'card-lab');
      lab.appendChild(el('b', null, p.title));
      lab.appendChild(el('span', 'jp', p.jp || ''));
      fr.appendChild(lab);
      card.appendChild(fr);

      var meta = el('div', 'card-meta');
      meta.appendChild(el('span', null, p.type));
      meta.appendChild(el('span', null, pad(i + 1) + ' / ' + pad(projects.length)));
      card.appendChild(meta);
      card.appendChild(el('p', 'card-desc', p.description));
      var foot = el('div', 'card-foot');
      foot.appendChild(el('span', 'card-tech', p.tech || ''));
      foot.appendChild(el('span', 'card-live', url ? 'View live site ↗' : 'Live demo coming soon'));
      card.appendChild(foot);
      cards.appendChild(card);
    });
  }

  /* ---------------------------------------------------------- skills */
  var skillK = $('#lessons .sec-head .k:first-child');
  if (skillK) { skillK.innerHTML = '<b>03</b> — '; skillK.appendChild(document.createTextNode(P.skillsHead)); }
  setText('#lessons .cur-head h2', P.skillsTitle);
  setText('#lessons .cur-head p', P.skillsIntro);
  var cur = $('#cur');
  if (cur) {
    cur.innerHTML = '';
    skills.forEach(function (s, i) {
      var d = el('div', 'les'); d.setAttribute('data-les', String(i)); d.setAttribute('data-cursor', '');
      d.appendChild(el('span', 'k', pad(i + 1)));
      var h = el('h3', null, s.name); h.appendChild(el('em', 'jp', s.jp || '')); d.appendChild(h);
      d.appendChild(el('p', null, s.text));
      d.appendChild(el('span', 't', s.tag));
      d.appendChild(el('i', 'bar'));
      cur.appendChild(d);
    });
  }

  /* ---------------------------------------------------------- contact */
  setText('#eternity .eyebrow', 'Chapter 04 — ' + P.contactHead);
  setText('#eternity h2', P.contactTitle);
  setText('#eternity .body-lg', P.contactText);
  var cta = $('#eternity .cta');
  if (cta) {
    var row = el('div', 'cta-row');
    cta.parentNode.insertBefore(row, cta);
    row.appendChild(cta);
    cta.href = 'mailto:' + P.email;
    cta.querySelector('span').textContent = 'Email me';
    var li = safeUrl(P.linkedin);
    if (li) {
      var cta2 = cta.cloneNode(true);
      cta2.href = li; cta2.target = '_blank'; cta2.rel = 'noopener noreferrer';
      cta2.querySelector('span').textContent = 'Connect on LinkedIn';
      cta2.classList.add('cta--alt');
      cta.parentNode.insertBefore(cta2, cta.nextSibling);
    }
    var mail = el('p', 'contact-mail');
    var a = el('a', null, P.email); a.href = 'mailto:' + P.email; a.setAttribute('data-cursor', '');
    mail.appendChild(a);
    mail.setAttribute('data-rv', 'fade');
    (cta.parentNode).appendChild(mail);
  }

  /* ---------------------------------------------------------- footer */
  setText('.foot-brand p', P.footerBlurb);
  var cols = $$('.foot-grid > div:not(.foot-brand)');
  var fill = function (col, title, items) {
    if (!col) return;
    col.querySelector('h4').textContent = title;
    var ul = col.querySelector('ul'); ul.innerHTML = '';
    items.forEach(function (it) {
      var li = el('li'), a = el('a', null, it.text);
      a.href = it.href; a.setAttribute('data-cursor', '');
      if (/^https?:/.test(it.href)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      li.appendChild(a); ul.appendChild(li);
    });
  };
  fill(cols[0], 'Navigate', [
    { text: 'About', href: '#gate' }, { text: 'Projects', href: '#pathways' },
    { text: 'Skills', href: '#lessons' }, { text: 'Contact', href: '#eternity' }
  ]);
  fill(cols[1], 'Projects', projects.map(function (p) {
    return { text: p.title, href: safeUrl(p.liveUrl) || '#pathways' };
  }));
  fill(cols[2], 'Connect', [
    { text: 'Email', href: 'mailto:' + P.email },
    { text: 'LinkedIn', href: safeUrl(P.linkedin) || '#eternity' }
  ]);
  var base = $$('.foot-base span');
  if (base[0]) base[0].textContent = '© ' + new Date().getFullYear() + ' ' + P.name;
  if (base[2]) base[2].textContent = P.footerTagline;
})();
