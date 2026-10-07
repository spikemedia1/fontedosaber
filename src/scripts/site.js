// Escola Fonte do Saber — comportamentos mínimos (vanilla, sem dependências).
// Links do WhatsApp já saem prontos do HTML (funcionam sem JS); aqui só abrimos em nova aba.
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// 1) Links [data-wa] → nova aba
$$('a[data-wa]').forEach((a) => {
  if (a.href.startsWith('https://wa.me/')) { a.target = '_blank'; a.rel = 'noopener'; }
});

// 2) Menu mobile: aria-expanded, foco no 1º item, Esc/clique fora fecham, foco volta ao botão
const toggle = $('.nav__toggle[aria-controls]');
const panel = $('#menu-mobile');
const scrim = $('.nav__scrim');
if (toggle && panel && scrim) {
  const isOpen = () => panel.dataset.open === 'true';
  const setMenu = (open, returnFocus = true) => {
    toggle.setAttribute('aria-expanded', String(open));
    panel.dataset.open = scrim.dataset.open = String(open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) $('a', panel)?.focus();
    else if (returnFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => setMenu(true));
  $('[data-close]', panel)?.addEventListener('click', () => setMenu(false));
  scrim.addEventListener('click', () => setMenu(false));
  $$('a', panel).forEach((a) => a.addEventListener('click', () => setMenu(false, false)));
  document.addEventListener('keydown', (e) => {
    if (!isOpen()) return;
    if (e.key === 'Escape') setMenu(false);
    if (e.key === 'Tab') { // mantém o foco dentro do painel
      const f = $$('a, button', panel);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  matchMedia('(min-width: 64em)').addEventListener('change', (m) => { if (m.matches && isOpen()) setMenu(false, false); });
}

// 3) Barra fixa (celular) e flutuante (desktop): aparecem após o hero; somem no rodapé,
//    sobre o formulário e com o teclado aberto (campo em foco).
const bar = $('.sticky-cta');
const fab = $('.wa-fab');
const hero = $('.hero');
if (hero && (bar || fab)) {
  const seen = new Set();
  let heroOut = false, typing = false;
  const nav = $('.nav');
  const sync = () => {
    const covered = seen.size > 0;
    const showBar = heroOut && !covered && !typing, showFab = heroOut && !covered;
    if (bar) {
      bar.classList.toggle('is-visible', showBar);
      if (showBar) bar.classList.add('pop'); // "pop" do ícone só na 1ª vez (a classe não sai mais)
      bar.setAttribute('aria-hidden', String(!showBar));
      $('a', bar).tabIndex = showBar ? 0 : -1;
    }
    if (fab) {
      fab.classList.toggle('is-hidden', !showFab);
      if (showFab) fab.classList.add('pop');
      fab.tabIndex = showFab ? 0 : -1;
    }
  };
  new IntersectionObserver(([e]) => { heroOut = !e.isIntersecting; nav?.classList.toggle('is-scrolled', heroOut); sync(); }).observe(hero);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
    sync();
  });
  $$('.footer, #form-visita').forEach((el) => io.observe(el));
  document.addEventListener('focusin', (e) => { if (e.target.matches('input, select, textarea')) { typing = true; sync(); } });
  document.addEventListener('focusout', () => { typing = false; sync(); });
  document.body.classList.add('has-sticky-cta');
  sync();
}

// 4) Entrada progressiva (1x), só para o que está abaixo da dobra. Sem JS ou com reduced motion, tudo visível
//    (o estado escondido só existe no CSS dentro de prefers-reduced-motion: no-preference).
//    .reveal = card que entra (fade + translate, escalonado por --i) · .reveal-group = cabeçalho, onda, trilho.
//    A posição vem da 1ª entrega do IntersectionObserver (sem getBoundingClientRect = sem layout forçado).
if ('IntersectionObserver' in window) {
  const grupo = '.section__header, .wave, .timeline';
  const visto = new WeakSet();
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    const t = en.target;
    if (!visto.has(t)) { // 1ª leitura: abaixo da dobra → esconde e espera; senão, deixa como está
      visto.add(t);
      if (en.boundingClientRect.top > innerHeight) t.classList.add(t.matches(grupo) ? 'reveal-group' : 'reveal');
      else io.unobserve(t);
      return;
    }
    if (en.isIntersecting) { t.classList.add('is-in'); io.unobserve(t); }
  }), { rootMargin: '0px 0px -10% 0px' });
  $$(`.stage-card, .feature, .event-card, .steps__item, .team-card, .timeline__item, .testimonial, .gallery__item, ${grupo}`).forEach((el) => io.observe(el));
  // Terminada a entrada, o card volta às transições próprias (hover sem atraso)
  document.addEventListener('transitionend', (e) => {
    const t = e.target;
    if (e.propertyName === 'opacity' && !e.pseudoElement && t.classList?.contains('is-in') && t.classList.contains('reveal')) t.classList.remove('reveal', 'is-in');
  });
}

// 4b) Fotos (exceto o hero): fade-in quando terminam de carregar
$$('img.fade-img').forEach((img) => {
  const done = () => img.classList.add('is-loaded');
  if (img.complete) done(); else { img.addEventListener('load', done); img.addEventListener('error', done); }
});

// 4c) Seção atual no menu (aria-current) + sublinhado que desliza entre os links
const ink = $('.nav__links');
const secoes = $$('main section[id]');
if (ink && secoes.length) {
  let atual = '';
  const marcar = () => {
    let cur = null;
    $$('.nav__links a, .nav__panel a:not(.btn)').forEach((a) => {
      const on = a.hash === '#' + atual;
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      if (on && ink.contains(a)) cur = a;
    });
    ink.classList.add('has-ink');
    ink.style.setProperty('--ink-x', (cur ? cur.offsetLeft : 0) + 'px');
    ink.style.setProperty('--ink-s', cur ? cur.offsetWidth / ink.offsetWidth : 0);
  };
  const sio = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { atual = e.target.id; marcar(); } }),
    { rootMargin: '-45% 0px -50% 0px' });
  secoes.forEach((s) => sio.observe(s));
  addEventListener('resize', marcar);
  document.fonts?.ready.then(marcar);
}

// 4d) Âncoras: depois da rolagem suave, o foco vai para o título da seção (leitores de tela)
document.addEventListener('click', (e) => {
  const a = e.target.closest?.('a[href*="#"]');
  if (!a || a.pathname !== location.pathname || a.hash.length < 2) return;
  const alvo = document.getElementById(a.hash.slice(1));
  const h = alvo && (alvo.matches('h1, h2') ? alvo : alvo.querySelector('h1, h2'));
  if (!h) return;
  let feito = false;
  const focar = () => { if (feito) return; feito = true; h.tabIndex = -1; h.focus({ preventScroll: true }); };
  addEventListener('scrollend', focar, { once: true });
  setTimeout(focar, 900);
});

// 4e) Toque: habilita o estado :active no iOS
document.addEventListener('touchstart', () => {}, { passive: true });

// 5) Mapa sob demanda: o iframe só carrega depois do clique
$$('[data-map-src]').forEach((btn) => btn.addEventListener('click', () => {
  const box = btn.closest('.map-facade');
  box.classList.add('is-loaded');
  const f = document.createElement('iframe');
  f.className = 'map-facade__frame';
  f.src = btn.dataset.mapSrc;
  f.title = btn.dataset.mapTitle || 'Mapa';
  f.loading = 'lazy';
  f.referrerPolicy = 'no-referrer';
  box.replaceChildren(f);
  f.focus();
}));

// 6) Formulário → WhatsApp (nada é enviado a servidor)
const form = $('#form-visita');
if (form) {
  const { waNumber, waMsg } = form.dataset;
  const link = (t) => `https://wa.me/${waNumber}?text=${encodeURIComponent(t)}`;
  const status = $('.form__status', form);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstInvalid = null;
    const check = (el, valid) => {
      el.closest('.field').classList.toggle('is-invalid', !valid);
      el.setAttribute('aria-invalid', String(!valid));
      if (!valid) { el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); } // tremor curto (CSS)
      if (!valid && !firstInvalid) firstInvalid = el;
    };
    const { nome, whatsapp, etapa, consentimento, novidades } = form.elements;
    check(nome, nome.value.trim().length >= 2);
    check(whatsapp, /^\d{10,11}$/.test(whatsapp.value.replace(/\D/g, '')));
    check(etapa, etapa.value !== '');
    check(consentimento, consentimento.checked);
    if (firstInvalid) {
      status.className = 'form__status is-error';
      status.textContent = 'Confira os campos marcados.';
      firstInvalid.focus();
      return;
    }
    const texto = `${waMsg}\nMeu nome: ${nome.value.trim()}\nMeu WhatsApp: ${whatsapp.value.trim()}\nEtapa de interesse: ${etapa.value}` +
      (novidades.checked ? '\nQuero receber novidades da escola pelo WhatsApp.' : '');
    const url = link(texto);
    window.open(url, '_blank', 'noopener');
    status.className = 'form__status is-success';
    status.innerHTML = '<svg class="form__check" viewBox="0 0 24 24" aria-hidden="true"><path pathLength="1" d="M5 12.5l4.5 4.5L19 7"/></svg><span></span>';
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    a.textContent = 'Se não abriu, toque aqui.';
    status.lastChild.append('Pronto! Abrimos o WhatsApp com a sua mensagem. ', a);
  });
  // Remove o erro do campo assim que for corrigido
  form.addEventListener('input', (e) => {
    const field = e.target.closest('.field.is-invalid');
    if (field) { field.classList.remove('is-invalid'); e.target.setAttribute('aria-invalid', 'false'); }
  });
}
