(function () {
  const storageKey = 'samske_lang';
  const dictionaries = {
    nl: {
      'nav.home': 'Home',
      'nav.dashboard': 'Dashboard',
      'nav.upload': 'Upload',
      'nav.changelog': 'Changelog',
      'nav.donate': 'Doneer',
      'nav.lang': 'NL / EN',
      'brand.title': 'SamSke Studio Suite',
      'brand.subtitle': 'Premium live moderation flow',
      'home.eyebrow': 'Premium live submission suite',
      'home.title': 'Alles voor je live stream, strak op één plek.',
      'home.subtitle': 'Een premium upload flow met moderation, live queue, changelog en realtime banners voor je community.',
      'home.card1.title': 'Upload flow',
      'home.card1.text': 'Laat kijkers tekst en afbeeldingen insturen via een strakke mobiele pagina met wachttijd en queue feedback.',
      'home.card2.title': 'Moderation dashboard',
      'home.card2.text': 'Review, approve en reject inzendingen in realtime met een snelle studio-console voor je stream.',
      'home.card3.title': 'Realtime communication',
      'home.card3.text': 'Gebruik announcements op alle sitepagina’s en houd je community meteen op de hoogte.',
      'translator.title': 'NL ↔ EN vertaler',
      'translator.subtitle': 'Lokale interfacevertaler zonder externe API. Handig voor korte teksten, labels en snelle communicatie.',
      'translator.from': 'Nederlands',
      'translator.to': 'Engels',
      'translator.swap': 'Wissel richting',
      'translator.note': 'Voor volledige natuurlijke vertaling van vrije zinnen is later een externe vertaaldienst nodig.',
      'translator.output': 'Vertaling',
      'change.eyebrow': 'Release notes',
      'change.title': 'Wat is er nieuw',
      'change.subtitle': 'Een duidelijk overzicht van nieuwe features, polish en verbeteringen.',
      'change.v3': 'Versie premium',
      'change.v3.p1': 'Nieuwe homepage toegevoegd met duidelijke navigatie en premium presentatie.',
      'change.v3.p2': 'Changelog-pagina toegevoegd voor updates en release notes.',
      'change.v3.p3': 'Donatieknop toegevoegd op alle pagina’s behalve de overlay.',
      'change.v3.p4': 'NL / EN interfacevertaler toegevoegd.',
      'change.v2': 'Vorige verbetering',
      'change.v2.p1': 'Upload flow opgesplitst in tekst en afbeelding voor betere UX.',
      'change.v2.p2': 'Announcement systeem verplaatst naar site-banners.',
      'change.v2.p3': 'Mobiele layout en wachtrij-inschatting verbeterd.',
      'footer.credit': 'made with ❤️ by samske'
    },
    en: {
      'nav.home': 'Home',
      'nav.dashboard': 'Dashboard',
      'nav.upload': 'Upload',
      'nav.changelog': 'Changelog',
      'nav.donate': 'Donate',
      'nav.lang': 'EN / NL',
      'brand.title': 'SamSke Studio Suite',
      'brand.subtitle': 'Premium live moderation flow',
      'home.eyebrow': 'Premium live submission suite',
      'home.title': 'Everything for your live stream, polished in one place.',
      'home.subtitle': 'A premium upload flow with moderation, live queue, changelog, and realtime banners for your community.',
      'home.card1.title': 'Upload flow',
      'home.card1.text': 'Let viewers send text and images through a polished mobile-friendly page with queue and wait-time feedback.',
      'home.card2.title': 'Moderation dashboard',
      'home.card2.text': 'Review, approve, and reject submissions in realtime with a fast studio console for your stream.',
      'home.card3.title': 'Realtime communication',
      'home.card3.text': 'Use announcements across the site and keep your community informed instantly.',
      'translator.title': 'NL ↔ EN translator',
      'translator.subtitle': 'Local interface translator without an external API. Useful for short copy, labels, and fast communication.',
      'translator.from': 'Dutch',
      'translator.to': 'English',
      'translator.swap': 'Swap direction',
      'translator.note': 'A full natural translator for free-form sentences would require an external translation service later.',
      'translator.output': 'Translation',
      'change.eyebrow': 'Release notes',
      'change.title': 'What is new',
      'change.subtitle': 'A clear overview of new features, polish, and improvements.',
      'change.v3': 'Premium version',
      'change.v3.p1': 'Added a new homepage with clear navigation and premium presentation.',
      'change.v3.p2': 'Added a changelog page for updates and release notes.',
      'change.v3.p3': 'Added a donation button on every page except the overlay.',
      'change.v3.p4': 'Added an NL / EN interface translator.',
      'change.v2': 'Previous improvement',
      'change.v2.p1': 'Split the upload flow into separate text and image sections for better UX.',
      'change.v2.p2': 'Moved the announcement system to site-wide banners.',
      'change.v2.p3': 'Improved mobile layout and queue estimation.',
      'footer.credit': 'made with ❤️ by samske'
    }
  };

  const phraseMap = {
    nl_en: [
      ['goedemorgen', 'good morning'], ['goedenavond', 'good evening'], ['alsjeblieft', 'please'], ['bedankt', 'thank you'], ['hallo', 'hello'],
      ['wachtrij', 'queue'], ['afbeelding', 'image'], ['tekst', 'text'], ['goedgekeurd', 'approved'], ['geweigerd', 'rejected'],
      ['melding', 'announcement'], ['inzending', 'submission'], ['stream', 'stream'], ['dashboard', 'dashboard'], ['upload', 'upload']
    ],
    en_nl: [
      ['good morning', 'goedemorgen'], ['good evening', 'goedenavond'], ['thank you', 'bedankt'], ['please', 'alsjeblieft'], ['hello', 'hallo'],
      ['queue', 'wachtrij'], ['image', 'afbeelding'], ['text', 'tekst'], ['approved', 'goedgekeurd'], ['rejected', 'geweigerd'],
      ['announcement', 'melding'], ['submission', 'inzending'], ['stream', 'stream'], ['dashboard', 'dashboard'], ['upload', 'upload']
    ]
  };

  function getLang() {
    return localStorage.getItem(storageKey) === 'en' ? 'en' : 'nl';
  }

  function t(key) {
    return dictionaries[getLang()][key] || dictionaries.nl[key] || key;
  }

  function applyTranslations() {
    document.documentElement.lang = getLang();
    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder)); });
  }

  function setLang(lang) {
    localStorage.setItem(storageKey, lang === 'en' ? 'en' : 'nl');
    applyTranslations();
    document.dispatchEvent(new Event('langchange'));
  }

  function renderTopbar() {
    const topbar = document.getElementById('topbarMount');
    if (!topbar) return;
    topbar.innerHTML = `
      <div class="topbar">
        <div class="topbar-inner">
          <div class="brand-wrap">
            <div class="brand-badge">SS</div>
            <div class="brand-copy">
              <strong data-i18n="brand.title"></strong>
              <span data-i18n="brand.subtitle"></span>
            </div>
          </div>
          <nav class="nav-links">
            <a class="nav-link" href="/home.html" data-i18n="nav.home"></a>
            <a class="nav-link" href="/dashboard.html?token=goodboy" data-i18n="nav.dashboard"></a>
            <a class="nav-link" href="/upload.html" data-i18n="nav.upload"></a>
            <a class="nav-link" href="/changelog.html" data-i18n="nav.changelog"></a>
          </nav>
          <div class="topbar-actions">
            <button id="langToggleBtn" type="button" class="lang-toggle" data-i18n="nav.lang"></button>
            <a class="donate-link" href="https://buymeacoffee.com/gamingpcsam" target="_blank" rel="noreferrer" data-i18n="nav.donate"></a>
          </div>
        </div>
      </div>`;
    topbar.querySelector('#langToggleBtn')?.addEventListener('click', () => setLang(getLang() === 'nl' ? 'en' : 'nl'));
    applyTranslations();
  }

  async function loadAnnouncement() {
    const bar = document.getElementById('announcementBar');
    if (!bar) return;
    try {
      const r = await fetch('/api/public-status');
      const j = await r.json();
      const txt = j?.status?.announcement?.text;
      if (txt) {
        bar.textContent = `Announcement • ${txt}`;
        bar.classList.remove('hidden');
      } else {
        bar.textContent = '';
        bar.classList.add('hidden');
      }
    } catch {}
  }

  function connectAnnouncementWs() {
    const bar = document.getElementById('announcementBar');
    if (!bar) return;
    const proto = location.protocol === 'https:' ? 'wss:' : 'ws:';
    const ws = new WebSocket(`${proto}//${location.host}/ws`);
    ws.addEventListener('open', () => {
      try { ws.send(JSON.stringify({ type: 'hello', role: 'page' })); } catch {}
    });
    ws.addEventListener('message', (ev) => {
      try {
        const data = JSON.parse(ev.data);
        const txt = data?.announcement?.text || data?.status?.announcement?.text;
        if (txt) {
          bar.textContent = `Announcement • ${txt}`;
          bar.classList.remove('hidden');
        } else if (data?.type === 'state') {
          bar.textContent = '';
          bar.classList.add('hidden');
        }
      } catch {}
    });
  }

  function replaceWholeWords(text, source, target) {
    let out = ` ${String(text || '').toLowerCase()} `;
    source.forEach((fromWord, index) => {
      const toWord = target[index];
      out = out.split(` ${fromWord} `).join(` ${toWord} `);
    });
    return out.trim();
  }

  function setupTranslatorWidget() {
    const input = document.getElementById('translatorInput');
    const output = document.getElementById('translatorOutput');
    const swap = document.getElementById('swapTranslateBtn');
    const fromLabel = document.getElementById('translatorFrom');
    const toLabel = document.getElementById('translatorTo');
    if (!input || !output || !swap || !fromLabel || !toLabel) return;

    let direction = 'nl_en';

    function applyDirection() {
      fromLabel.textContent = direction === 'nl_en' ? t('translator.from') : t('translator.to');
      toLabel.textContent = direction === 'nl_en' ? t('translator.to') : t('translator.from');
    }

    function refresh() {
      const pairs = phraseMap[direction];
      const source = pairs.map((pair) => pair[0]);
      const target = pairs.map((pair) => pair[1]);
      output.value = replaceWholeWords(input.value, source, target);
    }

    input.addEventListener('input', refresh);
    swap.addEventListener('click', () => {
      direction = direction === 'nl_en' ? 'en_nl' : 'nl_en';
      applyDirection();
      refresh();
    });
    document.addEventListener('langchange', applyDirection);
    applyDirection();
  }

  window.SamSkeCommon = { t, applyTranslations, setLang };

  document.addEventListener('DOMContentLoaded', () => {
    renderTopbar();
    applyTranslations();
    loadAnnouncement();
    connectAnnouncementWs();
    setupTranslatorWidget();
  });
})();
