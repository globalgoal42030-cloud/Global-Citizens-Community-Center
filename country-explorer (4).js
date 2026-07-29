/* GCCC — Country Explorer component
   Renders a searchable flag grid into #country-explorer-grid and a modal
   showing per-country info for the current room. Expects countries-data.js
   (UN_COUNTRIES) to be loaded first, plus two page-level globals:
     window.ROOM_NAME          — display name of the room, e.g. "Learning Center"
     window.ROOM_COUNTRY_DATA  — optional overrides, keyed by ISO code:
       { AF: { partners:"...", stats:"...", contacts:"..." }, ... }
   Any country not present in ROOM_COUNTRY_DATA falls back to placeholder copy.

   Employment tab: links out to G-P's Globalpedia (globalization-partners.com/globalpedia)
   for country-level hiring/employment-law guidance. The link is generated automatically
   from each country's name, so it works for all 150+ countries Globalpedia covers without
   needing per-country data entry — a "search Globalpedia" fallback is shown in case a
   given country isn't listed there. */

(function(){
  function flagEmoji(code){
    return code.toUpperCase().replace(/./g, c =>
      String.fromCodePoint(127397 + c.charCodeAt(0))
    );
  }

  // UN official name -> Globalpedia slug, for names that diverge from a plain slugify
  const GLOBALPEDIA_ALIASES = {
    "Russian Federation": "russia",
    "Republic of Korea": "south-korea",
    "Democratic People's Republic of Korea": "north-korea",
    "Côte d'Ivoire": "ivory-coast",
    "Türkiye": "turkey",
    "Czechia": "czech-republic",
    "Viet Nam": "vietnam",
    "Democratic Republic of the Congo": "democratic-republic-of-the-congo",
    "United Republic of Tanzania": "tanzania",
    "Brunei Darussalam": "brunei",
    "Lao People's Democratic Republic": "laos",
    "Micronesia": "micronesia",
    "Cabo Verde": "cape-verde",
    "Bolivia": "bolivia",
    "Syria": "syria",
    "Iran": "iran"
  };

  function slugify(name){
    return name.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // strip accents
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function globalpediaSlug(countryName){
    return GLOBALPEDIA_ALIASES[countryName] || slugify(countryName);
  }

  function placeholderFor(countryName, roomName){
    return {
      partners: `Local partner organizations for ${roomName} in ${countryName} — coming soon.`,
      stats: `SDG progress snapshots for ${countryName} — coming soon.`,
      contacts: `Local contacts and points of entry for ${countryName} — coming soon.`
    };
  }

  function init(){
    const grid = document.getElementById('country-explorer-grid');
    const search = document.getElementById('country-explorer-search');
    const countEl = document.getElementById('country-explorer-count');
    const modal = document.getElementById('country-modal');
    const modalFlag = document.getElementById('country-modal-flag');
    const modalName = document.getElementById('country-modal-name');
    const modalPartners = document.getElementById('country-modal-partners');
    const modalStats = document.getElementById('country-modal-stats');
    const modalContacts = document.getElementById('country-modal-contacts');
    const modalClose = document.getElementById('country-modal-close');
    if(!grid || typeof UN_COUNTRIES === 'undefined') return;

    const roomName = window.ROOM_NAME || 'this room';
    const overrides = window.ROOM_COUNTRY_DATA || {};

    // Inject the Employment section into the modal if the room's HTML doesn't
    // already have one — keeps this a one-file update instead of editing every room page.
    let modalEmployment = document.getElementById('country-modal-employment');
    const contactsSection = modalContacts ? modalContacts.closest('.country-modal-section') : null;
    if(!modalEmployment && contactsSection){
      const section = document.createElement('div');
      section.className = 'country-modal-section';
      section.innerHTML = `<h4>Employment</h4><p id="country-modal-employment"></p>`;
      contactsSection.insertAdjacentElement('afterend', section);
      modalEmployment = document.getElementById('country-modal-employment');
    }

    function openModal(country){
      const data = Object.assign({}, placeholderFor(country.name, roomName), overrides[country.code] || {});
      modalFlag.textContent = flagEmoji(country.code);
      modalName.textContent = country.name;
      modalPartners.textContent = data.partners;
      modalStats.textContent = data.stats;
      modalContacts.textContent = data.contacts;
      if(modalEmployment){
        const slug = globalpediaSlug(country.name);
        modalEmployment.innerHTML =
          `Hiring &amp; employment-law guidance for ${country.name}, via G-P's Globalpedia. ` +
          `<a href="https://www.globalization-partners.com/globalpedia/${slug}" target="_blank" rel="noopener">View Employment Guide ↗</a>` +
          `<span class="modal-note">Globalpedia covers 150+ countries — if that link doesn't resolve, ` +
          `<a href="https://www.globalization-partners.com/globalpedia/" target="_blank" rel="noopener">search Globalpedia ↗</a></span>`;
      }
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeModal(){
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
    modalClose && modalClose.addEventListener('click', closeModal);
    modal && modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

    function render(filter){
      const f = (filter || '').trim().toLowerCase();
      const list = UN_COUNTRIES.filter(c => c.name.toLowerCase().includes(f));
      grid.innerHTML = list.map(c =>
        `<button class="country-chip" data-code="${c.code}" title="${c.name}">
          <span class="country-chip-flag">${flagEmoji(c.code)}</span>
          <span class="country-chip-name">${c.name}</span>
        </button>`
      ).join('');
      if(countEl) countEl.textContent = `${list.length} of ${UN_COUNTRIES.length} UN member states`;
      grid.querySelectorAll('.country-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          const country = UN_COUNTRIES.find(c => c.code === btn.dataset.code);
          if(country) openModal(country);
        });
      });
    }

    search && search.addEventListener('input', () => render(search.value));
    render('');
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
