const LOTS = [{"id": "par12", "name": "Parque das Árvores • Lote 12", "project": "Parque das Árvores", "area": 300, "dims": "10 x 30 m", "price": 238000, "tag": "entrada inteligente", "taste": "Prático", "details": "Lote com metragem racional, ideal para quem quer iniciar a jornada patrimonial com menor desembolso e boa liquidez futura.", "features": ["300 m²", "Frente funcional", "Vocação residencial", "Boa relação valor/m²"]}, {"id": "par26", "name": "Parque das Árvores • Lote 26", "project": "Parque das Árvores", "area": 347, "dims": "11,5 x 30 m", "price": 279000, "tag": "boa metragem", "taste": "Equilibrado", "details": "Lote intermediário para quem busca equilíbrio entre área, custo de implantação e flexibilidade de projeto.", "features": ["347 m²", "Frente ampliada", "Projeto térreo possível", "Bom equilíbrio"]}, {"id": "sol45", "name": "Solaris • Lote 45", "project": "Solaris Residencial Resort", "area": 360, "dims": "12 x 30 m", "price": 438000, "tag": "resort living", "taste": "Premium", "details": "Base premium para uma casa de presença, conectada ao conceito de lazer, segurança e experiência residencial elevada.", "features": ["360 m²", "12m de frente", "Condomínio resort", "Perfil premium"]}, {"id": "sol81", "name": "Solaris • Lote 81", "project": "Solaris Residencial Resort", "area": 420, "dims": "14 x 30 m", "price": 525000, "tag": "frente ampla", "taste": "Especial", "details": "Lote com frente generosa, indicado para projetos mais autorais, fachadas imponentes e melhor implantação de garagem/lazer.", "features": ["420 m²", "14m de frente", "Mais liberdade arquitetônica", "Alto padrão"]}];
const HOMES = [{"id": "compacta", "name": "Casa Compacta Smart", "style": "Entrada premium", "tier": "entrada", "area": 124, "rooms": 3, "suites": 1, "price": 490000, "ideal": "primeira casa com padrão superior", "details": "Modelo eficiente, com boa leitura comercial para quem quer entrar na jornada da casa pronta sem carregar um projeto grande demais.", "features": ["124 m²", "3 quartos", "1 suíte", "2 vagas"], "ext": "../img/image-003-490a84c40ff07f65.png", "int": "../img/image-004-defd92dc229dfda6.png"}, {"id": "armonia", "name": "Casa Armonia", "style": "Térrea premium", "tier": "premium", "area": 198, "rooms": 3, "suites": 3, "price": 790000, "ideal": "família que quer conforto e praticidade", "details": "Casa térrea com distribuição equilibrada, boa fluidez de uso e apelo para famílias que valorizam conforto sem excesso.", "features": ["198 m²", "3 suítes", "Ambientes integrados", "Perfil familiar"], "ext": "../img/image-003-490a84c40ff07f65.png", "int": "../img/image-005-3f83fe1450cb2af1.png"}, {"id": "essenza", "name": "Casa Essenza", "style": "Contemporânea", "tier": "premium", "area": 248, "rooms": 4, "suites": 4, "price": 990000, "ideal": "vida social, sofisticação e integração", "details": "Modelo de forte apelo visual, pensado para unir fachada contemporânea, integração social e sensação de casa de alto padrão.", "features": ["248 m²", "4 suítes", "Área gourmet", "Arquitetura contemporânea"], "ext": "../img/image-006-1d9abc304d3e4261.png", "int": "../img/image-007-ccd7bec2a86b1756.png"}, {"id": "horizonti", "name": "Casa Horizonti", "style": "Alto padrão", "tier": "alto", "area": 312, "rooms": 4, "suites": 4, "price": 1480000, "ideal": "projeto marcante em lote amplo", "details": "Casa com leitura arquitetônica mais forte, adequada para compradores que querem presença, amplitude e maior sofisticação.", "features": ["312 m²", "4 suítes", "Implantação ampla", "Alto padrão"], "ext": "../img/image-008-fd44f1d797f665ab.png", "int": "../img/image-009-c32ed0c9e12cd012.png"}, {"id": "villa", "name": "Casa Villa Bella", "style": "Clássica sofisticada", "tier": "alto", "area": 340, "rooms": 5, "suites": 4, "price": 1680000, "ideal": "presença, tradição e alto padrão", "details": "Modelo de maior presença e linguagem mais clássica, voltado a famílias que valorizam imponência e acabamento sofisticado.", "features": ["340 m²", "5 quartos", "4 suítes", "Linguagem clássica"], "ext": "../img/image-010-ac16c63511a91557.png", "int": "../img/image-011-81099445fe09c4fd.png"}];
const ADDONS = [{"id": "solar", "name": "Energia solar", "price": 16900, "tag": "eficiência"}, {"id": "paisagismo", "name": "Paisagismo completo", "price": 9500, "tag": "biofilia"}, {"id": "seguranca", "name": "Automação e segurança", "price": 7200, "tag": "proteção"}, {"id": "gourmet", "name": "Espaço gourmet", "price": 21400, "tag": "convivência"}, {"id": "piscina", "name": "Piscina compacta", "price": 39800, "tag": "lazer"}, {"id": "moveis", "name": "Mobiliário essencial", "price": 57800, "tag": "interiores"}];

function makeSvgDataUri(title, subtitle, c1, c2){
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
    <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient></defs>
    <rect width="1200" height="800" fill="url(#g)"/>
    <circle cx="980" cy="140" r="120" fill="rgba(255,255,255,.18)"/>
    <circle cx="180" cy="690" r="160" fill="rgba(255,255,255,.10)"/>
    <rect x="70" y="90" width="1060" height="620" rx="34" fill="rgba(255,255,255,.10)" stroke="rgba(255,255,255,.28)"/>
    <text x="110" y="200" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700">${title}</text>
    <text x="110" y="265" fill="rgba(255,255,255,.82)" font-family="Arial, Helvetica, sans-serif" font-size="28">${subtitle}</text>
  </svg>`;
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}
function lotGallery(l){
  return [
    makeSvgDataUri(l.name, 'Vista geral do lote e contexto urbano', '#466a43', '#c2ca8e'),
    makeSvgDataUri(l.project, 'Perspectiva de implantação e frente do lote', '#5f7c4c', '#d6a76e'),
    makeSvgDataUri(l.area + ' m²', 'Leitura de potencial construtivo e posição', '#2a4e5f', '#7fa5b8')
  ];
}
function homeGallery(h){
  const arr = [];
  if(h.ext) arr.push(h.ext);
  if(h.int) arr.push(h.int);
  arr.push(makeSvgDataUri(h.name, 'Ambiente complementar / conceito do modelo', '#5d4636', '#c79d73'));
  return arr;
}
function renderGallery(images, galleryId='galleryViewport'){
  return `
    <div class="galleryShell">
      <button class="galleryArrow prev" type="button" data-gallery-nav="prev" data-gallery-target="${galleryId}" aria-label="Imagem anterior">‹</button>
      <div class="galleryViewport" id="${galleryId}">
        ${images.map((src,i)=>`<div class="gallerySlide"><img src="${src}" alt="Imagem ${i+1}"></div>`).join('')}
      </div>
      <button class="galleryArrow next" type="button" data-gallery-nav="next" data-gallery-target="${galleryId}" aria-label="Próxima imagem">›</button>
    </div>
  `;
}

const fmt = v => new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(Math.round(v || 0));
const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));

const state = {
  lot: LOTS[2],
  home: HOMES[2],
  addons: [],
  mode: 'combo',
  entryMode: 'percent',
  customLotPrice: LOTS[2].price,
  customHomePrice: HOMES[2].price
};

const comboSelections = {};

function resolveComboChoice(index, combos = getSuggestedCombos()){
  const base = combos[Number(index)] || combos[0];
  const saved = comboSelections[index] || {};
  const availableLots = typeof filteredComboLots === 'function' ? filteredComboLots() : LOTS;
  const lot = availableLots.find(item => item.id === saved.lotId) || availableLots.find(item => item.id === base.lot.id) || availableLots[0] || base.lot;
  const home = HOMES.find(item => item.id === saved.homeId) || base.home;
  comboSelections[index] = { lotId: lot.id, homeId: home.id };
  return { base, lot, home };
}

function applyComboChoice(index,{scroll=true,toastMessage='Combo configurado e enviado para a simulação.'} = {}){
  const { lot, home } = resolveComboChoice(index);
  state.lot = lot;
  state.home = home;
  state.customLotPrice = lot.price;
  state.customHomePrice = home.price;
  state.mode = 'combo';
  if($('#buyMode')) $('#buyMode').value = 'combo';
  syncPriceInputs();
  renderAll();
  if(toastMessage) toast(toastMessage);
  if(scroll) document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
}

function toast(text){
  const el = $('#toast');
  el.textContent = text;
  el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),2200);
}

function syncPriceInputs(){
  if($('#lotPriceInput')) $('#lotPriceInput').value = Math.round(state.customLotPrice || state.lot?.price || 0);
  if($('#homePriceInput')) $('#homePriceInput').value = Math.round(state.customHomePrice || state.home?.price || 0);
  const mode = $('#buyMode')?.value || state.mode;
  if(mode === 'lot' && $('#homePriceInput')) $('#homePriceInput').value = 0;
  if(mode === 'home' && $('#lotPriceInput')) $('#lotPriceInput').value = 0;
}

function getProjectLogo(project){
  if((project||'').toLowerCase().includes('solaris')){
    return `<span class="projectLogo solaris"><img src="../img/image-012-b433f95ad146a0f7.png" alt="Solaris Residencial Resort"></span>`;
  }
  return '';
}

function renderLots(filter='all'){
  $('#lotGrid').innerHTML = LOTS.filter(l => filter === 'all' || l.project === filter).map(l => `
    <article class="menuCard ${state.lot?.id === l.id ? 'selected' : ''}">
      <div class="menuTop"><span class="area">${l.area} m²</span></div>
      <div class="body">
        <span class="tag">${l.taste} • ${l.tag}</span>
        <h3>${l.name}</h3>
        <div class="specs"><span>${l.dims}</span><span>${l.project}</span></div>
        <div class="price">${fmt(l.price)}</div>
        <p class="muted">${l.details}</p>
        <div class="cardActions">
          <button class="btn primary small" data-detail-lot="${l.id}">Ver detalhes</button>
          <button class="btn primary small" data-sim-lot="${l.id}">Simular só lote</button>
          <button class="btn dark small" data-combo-lot="${l.id}">Usar no combo</button>
        </div>
      </div>
    </article>
  `).join('');
  $$('[data-detail-lot]').forEach(btn => btn.onclick = () => openLotDetails(btn.dataset.detailLot));
  $$('[data-sim-lot]').forEach(btn => btn.onclick = () => {
    state.lot = LOTS.find(l => l.id === btn.dataset.simLot);
    state.customLotPrice = state.lot.price;
    state.mode = 'lot';
    $('#buyMode').value = 'lot';
    syncPriceInputs();
    renderAll();
    toast('Lote selecionado para simulação.');
    document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
  });
  $$('[data-combo-lot]').forEach(btn => btn.onclick = () => {
    state.lot = LOTS.find(l => l.id === btn.dataset.comboLot);
    state.customLotPrice = state.lot.price;
    state.mode = 'combo';
    $('#buyMode').value = 'combo';
    syncPriceInputs();
    renderAll();
    toast('Lote adicionado ao combo.');
    document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
  });
}

function renderHomes(filter='all'){
  $('#homeGrid').innerHTML = HOMES.filter(h => filter === 'all' || h.tier === filter).map(h => `
    <article class="menuCard ${state.home?.id === h.id ? 'selected' : ''}">
      <div class="houseImgs"><img src="${h.ext}" alt="${h.name} fachada"><img src="${h.int}" alt="${h.name} interior"></div>
      <div class="body">
        <span class="tag">${h.style}</span>
        <h3>${h.name}</h3>
        <div class="specs"><span>${h.area} m²</span><span>${h.rooms} quartos</span><span>${h.suites} suítes</span></div>
        <p class="muted">Ideal para ${h.ideal}.</p>
        <div class="price">${fmt(h.price)}</div>
        <div class="cardActions">
          <button class="btn primary small" data-detail-home="${h.id}">Ver detalhes</button>
          <button class="btn primary small" data-sim-home="${h.id}">Simular só casa</button>
          <button class="btn dark small" data-combo-home="${h.id}">Usar no combo</button>
        </div>
      </div>
    </article>
  `).join('');
  $$('[data-detail-home]').forEach(btn => btn.onclick = () => openHomeDetails(btn.dataset.detailHome));
  $$('[data-sim-home]').forEach(btn => btn.onclick = () => {
    state.home = HOMES.find(h => h.id === btn.dataset.simHome);
    state.customHomePrice = state.home.price;
    state.mode = 'home';
    $('#buyMode').value = 'home';
    syncPriceInputs();
    renderAll();
    toast('Casa selecionada para simulação.');
    document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
  });
  $$('[data-combo-home]').forEach(btn => btn.onclick = () => {
    state.home = HOMES.find(h => h.id === btn.dataset.comboHome);
    state.customHomePrice = state.home.price;
    state.mode = 'combo';
    $('#buyMode').value = 'combo';
    syncPriceInputs();
    renderAll();
    toast('Casa adicionada ao combo.');
    document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
  });
}

function getSuggestedCombos(){
  return [
    {name:'Combo Inteligente', lot:LOTS[0], home:HOMES[0], desc:'Menor desembolso para começar com padrão superior.'},
    {name:'Combo Família Premium', lot:LOTS[2], home:HOMES[2], desc:'Equilíbrio entre resort living, espaço e presença.'},
    {name:'Combo Alto Padrão', lot:LOTS[3], home:HOMES[3], desc:'Lote amplo, casa sofisticada e posicionamento premium.'}
  ];
}

function filteredComboLots(){
  return currentLotFilter === 'all'
    ? LOTS
    : LOTS.filter(item => item.project === currentLotFilter);
}

function ensureComboLotMatchesFilter(index){
  const availableLots = filteredComboLots();
  if(!availableLots.length) return;
  const saved = comboSelections[index] || {};
  const selected = availableLots.find(item => item.id === saved.lotId);
  if(!selected){
    comboSelections[index] = { ...(comboSelections[index] || {}), lotId: availableLots[0].id };
  }
}

function renderCombos(){
  const combos = getSuggestedCombos();
  const availableLots = filteredComboLots();

  $('#comboGrid').innerHTML = combos.map((c,idx) => {
    ensureComboLotMatchesFilter(idx);
    const choice = resolveComboChoice(idx, combos);
    const lot = availableLots.find(item => item.id === choice.lot.id) || availableLots[0] || choice.lot;
    const home = choice.home;

    if(lot && lot.id !== choice.lot.id){
      comboSelections[idx] = { ...(comboSelections[idx] || {}), lotId: lot.id, homeId: home.id };
    }

    return `
    <article class="comboCard">
      <div class="comboPreview">
        <div class="previewBox"><b>${lot.area} m²</b><small class="muted">${lot.project}</small></div>
        <div class="plus">+</div>
        <div class="previewBox"><img src="${home.ext}" alt="${home.name}"></div>
      </div>
      <div class="comboPickerGrid">
        <div class="comboPickerField">
          <label>Lote do combo</label>
          <select data-combo-lot-select="${idx}">
            ${availableLots.map(item=>`<option value="${item.id}" ${item.id===lot.id?'selected':''}>${item.name} — ${item.project}</option>`).join('')}
          </select>
        </div>
        <div class="comboPickerField">
          <label>Casa do combo</label>
          <select data-combo-home-select="${idx}">
            ${HOMES.map(item=>`<option value="${item.id}" ${item.id===home.id?'selected':''}>${item.name}</option>`).join('')}
          </select>
        </div>
      </div>
      <span class="tag">Combo sugerido</span>
      <h3>${c.name}</h3>
      <p class="muted">${c.desc}</p>
      <div class="price">${fmt(lot.price + home.price)}</div>
      <div class="cardActions">
        <button class="btn primary" data-combo="${idx}">Escolher combo</button>
        <button class="btn primary" data-combo-details="${idx}">Ver detalhes</button>
      </div>
    </article>
  `}).join('');

  $$('[data-combo-lot-select]').forEach(sel => sel.onchange = () => {
    const idx = Number(sel.dataset.comboLotSelect);
    comboSelections[idx] = { ...(comboSelections[idx] || {}), lotId: sel.value };
    renderCombos();
  });

  $$('[data-combo-home-select]').forEach(sel => sel.onchange = () => {
    const idx = Number(sel.dataset.comboHomeSelect);
    comboSelections[idx] = { ...(comboSelections[idx] || {}), homeId: sel.value };
    renderCombos();
  });

  $$('[data-combo]').forEach(btn => btn.onclick = () => {
    applyComboChoice(Number(btn.dataset.combo));
  });

  $$('[data-combo-details]').forEach(btn => btn.onclick = () => {
    const idx = Number(btn.dataset.comboDetails);
    ensureComboLotMatchesFilter(idx);
    const choice = resolveComboChoice(idx, combos);
    openComboDetails(idx, choice.lot.id, choice.home.id);
  });
}

function renderAddons(){
  $('#addonGrid').innerHTML = ADDONS.map(a => `
    <div class="addon ${state.addons.some(x=>x.id===a.id) ? 'active' : ''}">
      <div><span class="tag">${a.tag}</span><h3>${a.name}</h3><div class="muted">${fmt(a.price)}</div></div>
      <button class="btn light" data-addon="${a.id}">${state.addons.some(x=>x.id===a.id) ? 'Remover' : 'Adicionar'}</button>
    </div>
  `).join('');
  $$('[data-addon]').forEach(btn => btn.onclick = () => {
    const item = ADDONS.find(a => a.id === btn.dataset.addon);
    const exists = state.addons.some(a => a.id === item.id);
    state.addons = exists ? state.addons.filter(a => a.id !== item.id) : [...state.addons, item];
    renderAll();
    toast(exists ? 'Adicional removido.' : 'Adicional incluído.');
  });
}

function baseTotalWithoutEntry(){
  const mode = $('#buyMode')?.value || state.mode;
  state.mode = mode;
  const addons = state.addons.reduce((sum,a)=>sum+a.price,0);
  const lot = Number($('#lotPriceInput')?.value || state.customLotPrice || state.lot?.price || 0);
  const home = Number($('#homePriceInput')?.value || state.customHomePrice || state.home?.price || 0);
  state.customLotPrice = lot; state.customHomePrice = home;
  let total = 0;
  if(mode === 'lot') total = lot;
  if(mode === 'home') total = home;
  if(mode === 'combo') total = lot + home;
  if(mode === 'future') total = lot + home * 0.15;
  return {mode, addons, lot, home, total: total + addons};
}

function getTotals(changedField=''){
  const mode = $('#buyMode')?.value || state.mode;
  state.mode = mode;

  let lot = Number($('#lotPriceInput')?.value || 0);
  let home = Number($('#homePriceInput')?.value || 0);

  if(mode === 'lot'){
    home = 0;
  } else if(mode === 'home'){
    lot = 0;
  }

  if(mode !== 'home') state.customLotPrice = lot || state.customLotPrice;
  if(mode !== 'lot') state.customHomePrice = home || state.customHomePrice;

  const addons = state.addons.reduce((sum,a)=>sum+a.price,0);
  let total = 0;
  if(mode === 'lot') total = lot;
  if(mode === 'home') total = home;
  if(mode === 'combo') total = lot + home;
  if(mode === 'future') total = lot + home * 0.15;
  total += addons;

  let entryPercent = Number($('#entryPercent')?.value || 0);
  let entryValue = Number($('#entryValue')?.value || 0);

  if(changedField === 'entryValue') {
    entryPercent = total ? (entryValue / total) * 100 : 0;
    $('#entryPercent').value = entryPercent.toFixed(2);
  } else {
    entryValue = total * entryPercent / 100;
    $('#entryValue').value = Math.round(entryValue);
  }

  const installments = Number($('#entryInstallments')?.value || 1);
  const entryInstallment = installments ? entryValue / installments : entryValue;
  const financed = Math.max(total - entryValue,0);
  const term = Number($('#term')?.value || 240);
  const system = $('#system')?.value || 'PRICE';
  const r = mode === 'lot' ? 0.009 : mode === 'home' ? 0.0105 : 0.0098;
  const payment = system === 'PRICE' ? financed * (r / (1 - Math.pow(1+r,-term))) : (financed / term) + financed * r;
  return {mode,addons,lot,home,total,entryPercent,entryValue,installments,entryInstallment,financed,payment,system,term};
}

function renderTray(changedField=''){
  const mode = $('#buyMode')?.value || state.mode;
  state.mode = mode;

  const lotInput = $('#lotPriceInput');
  const homeInput = $('#homePriceInput');

  if(mode === 'lot'){
    lotInput.disabled = false;
    homeInput.disabled = true;
    homeInput.value = 0;
  } else if(mode === 'home'){
    lotInput.disabled = true;
    lotInput.value = 0;
    homeInput.disabled = false;
  } else if(mode === 'future'){
    lotInput.disabled = false;
    homeInput.disabled = false;
    if(!Number(lotInput.value) && state.customLotPrice) lotInput.value = Math.round(state.customLotPrice);
    if(!Number(homeInput.value) && state.customHomePrice) homeInput.value = Math.round(state.customHomePrice);
  } else {
    lotInput.disabled = false;
    homeInput.disabled = false;
    if(!Number(lotInput.value) && state.customLotPrice) lotInput.value = Math.round(state.customLotPrice);
    if(!Number(homeInput.value) && state.customHomePrice) homeInput.value = Math.round(state.customHomePrice);
  }

  const t = getTotals(changedField);

  $('#trayLot').textContent = state.lot ? state.lot.name : 'Nenhum';
  $('#trayHome').textContent = state.home ? state.home.name : 'Nenhuma';
  $('#trayAddons').textContent = fmt(t.addons);
  $('#trayTotal').textContent = fmt(t.total);
  $('#resEntry').textContent = fmt(t.entryValue);
  $('#resEntryInstallment').textContent = `${t.installments}X no cartão de ${fmt(t.entryInstallment)}`;
  if($('#entryInstallmentField')) $('#entryInstallmentField').value = fmt(t.entryInstallment);
  $('#resFinanced').textContent = fmt(t.financed);
  $('#resPayment').textContent = fmt(t.payment);
  $('#resRatio').textContent = t.entryPercent.toFixed(1).replace('.',',') + '%';
  $('#resSystem').textContent = t.system;

  const healthy = t.entryPercent >= 30;
  const attention = t.entryPercent >= 20 && t.entryPercent < 30;
  $('#diagnosisTitle').textContent = healthy ? 'Entrada forte para avançar.' : attention ? 'Composição equilibrada para negociar.' : 'Vale reforçar a entrada ou ajustar a composição.';
  $('#diagnosisText').textContent = healthy ? 'A entrada está robusta e cria uma base confortável para a conversa comercial.' : attention ? 'A configuração está funcional e pode ser refinada no prazo, na entrada ou na composição do combo.' : 'Uma boa alternativa é elevar a entrada, reduzir a composição ou considerar lote agora + casa em etapa seguinte.';
}

function renderAll(){
  renderLots(currentLotFilter); renderHomes(currentHomeFilter); renderCombos(); renderAddons(); renderTray();
}

function openComboDetails(index, selectedLotId='', selectedHomeId=''){
  const combos = getSuggestedCombos();
  const base = combos[Number(index)] || combos[0];
  const lot = LOTS.find(x=>x.id === (selectedLotId || base.lot.id)) || base.lot;
  const home = HOMES.find(x=>x.id === (selectedHomeId || base.home.id)) || base.home;
  comboSelections[index] = { lotId: lot.id, homeId: home.id };
  const lotImages = lotGallery(lot);
  const homeImages = homeGallery(home);
  const total = lot.price + home.price;
  openModal(`
    <div class="modalHead"><div><span class="tag">Combo sugerido</span><h2>${base.name}</h2><p class="muted">${base.desc}</p></div><button class="btn light small" data-close-modal>Fechar</button></div>
    <div class="modalBody">
      <div class="comboDetailGrid">
        <section class="comboDetailBlock">
          <div class="comboDetailTop">
            <div>
              <span class="tag">Lote</span>
              <h3>${lot.name}</h3>
              <div class="modalBrand">${getProjectLogo(lot.project)}</div>
            </div>
            <select class="miniSelect" id="comboLotSelect" data-combo-detail-select="lot" data-combo-index="${index}">
              ${LOTS.map(item=>`<option value="${item.id}" ${item.id===lot.id?'selected':''}>${item.name} — ${item.project}</option>`).join('')}
            </select>
          </div>
          ${renderGallery(lotImages,'comboLotGallery')}
          <p class="muted">${lot.details}</p>
          <div class="comboMeta"><span>${lot.area} m²</span><span>${lot.dims}</span><span>${fmt(lot.price)}</span></div>
          <div class="featureList">${lot.features.map(f=>`<span>${f}</span>`).join('')}</div>
        </section>
        <section class="comboDetailBlock">
          <div class="comboDetailTop">
            <div>
              <span class="tag">Casa</span>
              <h3>${home.name}</h3>
              <p class="muted">${home.style}</p>
            </div>
            <select class="miniSelect" id="comboHomeSelect" data-combo-detail-select="home" data-combo-index="${index}">
              ${HOMES.map(item=>`<option value="${item.id}" ${item.id===home.id?'selected':''}>${item.name}</option>`).join('')}
            </select>
          </div>
          ${renderGallery(homeImages,'comboHomeGallery')}
          <p class="muted">${home.details}</p>
          <div class="comboMeta"><span>${home.area} m²</span><span>${home.style}</span><span>${fmt(home.price)}</span></div>
          <div class="featureList">${home.features.map(f=>`<span>${f}</span>`).join('')}</div>
        </section>
      </div>
      <div class="comboDetailActions">
        <p><b>Total estimado do combo:</b> ${fmt(total)}</p>
        <div class="actions"><button class="btn primary" data-apply-combo-details="${index}">Atualizar combo e abrir simulação</button><button class="btn light" data-close-modal>Fechar</button></div>
      </div>
    </div>
  `);
}

function openLotDetails(id){
  const l = LOTS.find(x=>x.id===id);
  const images = lotGallery(l);
  openModal(`
    <div class="modalHead"><div><span class="tag">${l.project}</span><h2>${l.name}</h2><div class="modalBrand">${getProjectLogo(l.project)}</div><p class="muted">${l.details}</p></div><button class="btn light small" data-close-modal>Fechar</button></div>
    <div class="modalBody">
      ${renderGallery(images,'lotGalleryViewport')}
      <div class="featureList">${l.features.map(f=>`<span>${f}</span>`).join('')}</div>
      <p><b>Valor estimado:</b> ${fmt(l.price)}<br><b>Dimensões:</b> ${l.dims}<br><b>Perfil:</b> ${l.taste} • ${l.tag}</p>
      <div class="actions"><button class="btn primary" data-modal-sim-lot="${l.id}">Simular só este lote</button><button class="btn dark" data-modal-combo-lot="${l.id}">Usar no combo</button></div>
    </div>
  `);
}

function openHomeDetails(id){
  const h = HOMES.find(x=>x.id===id);
  const images = homeGallery(h);
  openModal(`
    <div class="modalHead"><div><span class="tag">${h.style}</span><h2>${h.name}</h2><p class="muted">${h.details}</p></div><button class="btn light small" data-close-modal>Fechar</button></div>
    <div class="modalBody">
      ${renderGallery(images,'lotGalleryViewport')}
      <div class="featureList">${h.features.map(f=>`<span>${f}</span>`).join('')}</div>
      <p><b>Valor estimado:</b> ${fmt(h.price)}<br><b>Perfil:</b> ${h.ideal}</p>
      <div class="actions"><button class="btn primary" data-modal-sim-home="${h.id}">Simular só esta casa</button><button class="btn dark" data-modal-combo-home="${h.id}">Usar no combo</button></div>
    </div>
  `);
}

function openModal(content){
  const modal = $('#detailModal');
  modal.innerHTML = `<div class="modalCard">${content}</div>`;
  modal.classList.add('show');
  bindModalActions();
}

function closeModal(){ $('#detailModal').classList.remove('show'); $('#detailModal').innerHTML=''; }

function bindModalActions(){
  $$('[data-close-modal]').forEach(b=>b.onclick=closeModal);
  $$('[data-modal-sim-lot]').forEach(b=>b.onclick=()=>{ state.lot=LOTS.find(l=>l.id===b.dataset.modalSimLot); state.customLotPrice=state.lot.price; $('#buyMode').value='lot'; closeModal(); syncPriceInputs(); renderAll(); document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'}); });
  $$('[data-modal-combo-lot]').forEach(b=>b.onclick=()=>{ state.lot=LOTS.find(l=>l.id===b.dataset.modalComboLot); state.customLotPrice=state.lot.price; $('#buyMode').value='combo'; closeModal(); syncPriceInputs(); renderAll(); document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'}); });
  $$('[data-modal-sim-home]').forEach(b=>b.onclick=()=>{ state.home=HOMES.find(h=>h.id===b.dataset.modalSimHome); state.customHomePrice=state.home.price; $('#buyMode').value='home'; closeModal(); syncPriceInputs(); renderAll(); document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'}); });
  $$('[data-modal-combo-home]').forEach(b=>b.onclick=()=>{ state.home=HOMES.find(h=>h.id===b.dataset.modalComboHome); state.customHomePrice=state.home.price; $('#buyMode').value='combo'; closeModal(); syncPriceInputs(); renderAll(); document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'}); });
  $$('[data-gallery-nav]').forEach(btn=>btn.onclick=()=>{
    const targetId = btn.dataset.galleryTarget || 'galleryViewport';
    const viewport = document.getElementById(targetId);
    if(!viewport) return;
    const step = viewport.clientWidth + 12;
    viewport.scrollBy({left: btn.dataset.galleryNav === 'next' ? step : -step, behavior:'smooth'});
  });
  $$('[data-combo-detail-select]').forEach(sel=>sel.onchange=()=>{
    const comboIndex = Number(sel.dataset.comboIndex);
    const lotId = document.getElementById('comboLotSelect')?.value || '';
    const homeId = document.getElementById('comboHomeSelect')?.value || '';
    comboSelections[comboIndex] = { lotId, homeId };
    openComboDetails(comboIndex, lotId, homeId);
  });
  $$('[data-apply-combo-details]').forEach(btn=>btn.onclick=()=>{
    const comboIndex = Number(btn.dataset.applyComboDetails);
    const lotId = document.getElementById('comboLotSelect')?.value;
    const homeId = document.getElementById('comboHomeSelect')?.value;
    comboSelections[comboIndex] = { lotId, homeId };
    closeModal();
    applyComboChoice(comboIndex,{scroll:true,toastMessage:'Combo atualizado e enviado para a simulação.'});
  });
  if($('#scheduleSubmit')) $('#scheduleSubmit').onclick = submitSchedule;
}

function buyerData(){
  return {
    name: ($('#buyerName')?.value || '').trim(),
    phone: ($('#buyerPhone')?.value || '').trim(),
    email: ($('#buyerEmail')?.value || '').trim(),
    city: ($('#buyerCity')?.value || '').trim(),
    preference: ($('#contactPreference')?.value || '').trim(),
    time: ($('#contactTime')?.value || '').trim(),
    note: ($('#buyerNote')?.value || '').trim()
  };
}

function esc(value=''){
  return String(value)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

function dateToDisplay(value=''){
  if(!value) return '-';
  const parts = value.split('-');
  return parts.length===3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : value;
}

function openScheduleModal(){
  const b = buyerData();
  const minDate = new Date().toISOString().split('T')[0];
  const suggestedDate = minDate;
  openModal(`
    <div class="modalHead"><div><span class="tag">Atendimento</span><h2>Agendar apresentação</h2><p class="muted">Preencha os dados de contato, a data e o horário desejados para o atendimento.</p></div><button class="btn light small" data-close-modal>Fechar</button></div>
    <div class="modalBody">
      <p class="modalCaption">Se você já preencheu os dados na simulação, eles aparecem aqui automaticamente para conferência.</p>
      <div class="modalFormGrid">
        <div class="modalField"><label>Nome completo</label><input type="text" id="scheduleName" value="${esc(b.name)}" placeholder="Ex.: Franco Alves"></div>
        <div class="modalField"><label>WhatsApp / telefone</label><input type="tel" id="schedulePhone" value="${esc(b.phone)}" placeholder="Ex.: (34) 99999-9999"></div>
        <div class="modalField"><label>E-mail</label><input type="email" id="scheduleEmail" value="${esc(b.email)}" placeholder="Ex.: nome@email.com"></div>
        <div class="modalField"><label>Cidade</label><input type="text" id="scheduleCity" value="${esc(b.city)}" placeholder="Ex.: Monte Carmelo, MG"></div>
        <div class="modalField"><label>Preferência de contato</label><select id="schedulePreference"><option ${b.preference==='WhatsApp'?'selected':''}>WhatsApp</option><option ${b.preference==='Ligação'?'selected':''}>Ligação</option><option ${b.preference==='E-mail'?'selected':''}>E-mail</option><option ${b.preference==='Reunião presencial'?'selected':''}>Reunião presencial</option><option ${b.preference==='Videochamada'?'selected':''}>Videochamada</option></select></div>
        <div class="modalField"><label>Data desejada</label><input type="date" id="scheduleDate" min="${minDate}" value="${suggestedDate}"></div>
        <div class="modalField"><label>Horário desejado</label><input type="time" id="scheduleHour" value="09:00"></div>
        <div class="modalField"><label>Formato do atendimento</label><select id="scheduleFormat"><option>Apresentação comercial</option><option>Atendimento por WhatsApp</option><option>Ligação</option><option>Reunião presencial</option><option>Videochamada</option></select></div>
        <div class="modalField full"><label>Observação</label><textarea id="scheduleNote" placeholder="Ex.: Gostaria de entender condições do lote + casa e comparar prazos.">${esc(b.note)}</textarea></div>
      </div>
      <div class="actions"><button class="btn primary" id="scheduleSubmit">Agendar</button><button class="btn light" data-close-modal>Fechar</button></div>
    </div>
  `);
}

function scheduleFormData(){
  return {
    name: ($('#scheduleName')?.value || '').trim(),
    phone: ($('#schedulePhone')?.value || '').trim(),
    email: ($('#scheduleEmail')?.value || '').trim(),
    city: ($('#scheduleCity')?.value || '').trim(),
    preference: ($('#schedulePreference')?.value || '').trim(),
    date: ($('#scheduleDate')?.value || '').trim(),
    hour: ($('#scheduleHour')?.value || '').trim(),
    format: ($('#scheduleFormat')?.value || '').trim(),
    note: ($('#scheduleNote')?.value || '').trim()
  };
}

function syncBuyerFromSchedule(data){
  if($('#buyerName')) $('#buyerName').value = data.name || '';
  if($('#buyerPhone')) $('#buyerPhone').value = data.phone || '';
  if($('#buyerEmail')) $('#buyerEmail').value = data.email || '';
  if($('#buyerCity')) $('#buyerCity').value = data.city || '';
  if($('#contactPreference')) $('#contactPreference').value = data.preference || 'WhatsApp';
  if($('#buyerNote')) $('#buyerNote').value = data.note || '';
  localStorage.setItem('fc_buyer_data', JSON.stringify({
    name: data.name || '',
    phone: data.phone || '',
    email: data.email || '',
    city: data.city || '',
    preference: data.preference || 'WhatsApp',
    time: data.hour || '',
    note: data.note || ''
  }));
}

function scheduleText(data){
  const t = getTotals();
  const modeLabel = t.mode === 'lot' ? 'Somente lote' : t.mode === 'home' ? 'Somente casa' : t.mode === 'future' ? 'Lote agora + casa pré-contratada' : 'Lote + casa';
  return `Futura Casa | Agendamento de apresentação

DADOS DO INTERESSADO
Nome: ${data.name || '-'}
WhatsApp/telefone: ${data.phone || '-'}
E-mail: ${data.email || '-'}
Cidade: ${data.city || '-'}
Preferência de contato: ${data.preference || '-'}

AGENDAMENTO
Data desejada: ${dateToDisplay(data.date)}
Horário desejado: ${data.hour || '-'}
Formato do atendimento: ${data.format || '-'}
Observação: ${data.note || '-'}

ESCOLHA ATUAL
Jornada: ${modeLabel}
Lote: ${state.lot?.name || '-'}
Casa: ${state.home?.name || '-'}
Adicionais: ${state.addons.map(a=>a.name).join(', ') || '-'}
Valor total estimado: ${fmt(t.total)}
Entrada total: ${fmt(t.entryValue)}
Parcela estimada: ${fmt(t.payment)}

Solicito agendamento de apresentação comercial.`;
}

function submitSchedule(){
  const data = scheduleFormData();
  if(!data.name){ toast('Informe o nome do interessado.'); $('#scheduleName')?.focus(); return; }
  if(!data.phone){ toast('Informe o WhatsApp ou telefone.'); $('#schedulePhone')?.focus(); return; }
  if(!data.date){ toast('Informe a data desejada.'); $('#scheduleDate')?.focus(); return; }
  if(!data.hour){ toast('Informe o horário desejado.'); $('#scheduleHour')?.focus(); return; }
  syncBuyerFromSchedule(data);
  const text = scheduleText(data);
  localStorage.setItem('fc_schedule_request', text);
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  closeModal();
  toast('Agendamento preparado para envio.');
}

function validateBuyerData(){
  const b = buyerData();
  if(!b.name){
    toast('Informe o nome do comprador.');
    $('#buyerName')?.focus();
    document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
    return false;
  }
  if(!b.phone){
    toast('Informe o WhatsApp ou telefone.');
    $('#buyerPhone')?.focus();
    document.querySelector('#bandeja').scrollIntoView({behavior:'smooth'});
    return false;
  }
  return true;
}

function proposalText(){
  const t = getTotals();
  const b = buyerData();
  const modeLabel = t.mode === 'lot' ? 'Somente lote' : t.mode === 'home' ? 'Somente casa' : t.mode === 'future' ? 'Lote agora + casa pré-contratada' : 'Lote + casa';
  return `Futura Casa | Proposta para negociação

DADOS DO INTERESSADO
Nome: ${b.name || '-'}
WhatsApp/telefone: ${b.phone || '-'}
E-mail: ${b.email || '-'}
Cidade: ${b.city || '-'}
Preferência de contato: ${b.preference || '-'}
Melhor horário: ${b.time || '-'}
Observação: ${b.note || '-'}

ESCOLHA DO CLIENTE
Jornada: ${modeLabel}
Lote: ${state.lot?.name || '-'}
Casa: ${state.home?.name || '-'}
Adicionais: ${state.addons.map(a=>a.name).join(', ') || '-'}

SIMULAÇÃO
Valor total estimado: ${fmt(t.total)}
Entrada total: ${fmt(t.entryValue)}
Parcelamento da entrada: ${t.installments}X no cartão de ${fmt(t.entryInstallment)}
Valor financiado: ${fmt(t.financed)}
Prazo: ${t.term} meses
Sistema: ${t.system}
Parcela estimada: ${fmt(t.payment)}
Entrada em %: ${t.entryPercent.toFixed(1)}%

Solicito contato de um consultor para iniciar a negociação.`;
}

function sendToConsultant(){
  if(!validateBuyerData()) return;
  const text = proposalText();
  localStorage.setItem('fc_consultant_proposal', text);
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  toast('Proposta com dados do comprador preparada para o consultor.');
}

let currentLotFilter='all', currentHomeFilter='all';
$$('[data-filter-lot]').forEach(btn => btn.onclick=()=>{
  currentLotFilter=btn.dataset.filterLot;
  $$('[data-filter-lot]').forEach(b=>b.classList.toggle('active',b===btn));
  const availableLots = filteredComboLots();
  if(availableLots.length){
    Object.keys(comboSelections).forEach(key=>{
      if(!availableLots.some(item=>item.id===comboSelections[key].lotId)){
        comboSelections[key] = { ...(comboSelections[key] || {}), lotId: availableLots[0].id };
      }
    });
  }
  renderLots(currentLotFilter);
  renderCombos();
});
$$('[data-filter-home]').forEach(btn => btn.onclick=()=>{currentHomeFilter=btn.dataset.filterHome;$$('[data-filter-home]').forEach(b=>b.classList.toggle('active',b===btn));renderHomes(currentHomeFilter);});

['buyMode','entryPercent','entryInstallments','term','system','lotPriceInput','homePriceInput'].forEach(id=>{
  const el=$('#'+id);
  if(el){
    el.addEventListener('input',()=>renderTray(id));
    el.addEventListener('change',()=>renderTray(id));
  }
});
$('#entryValue').addEventListener('input',()=>renderTray('entryValue')); $('#entryValue').addEventListener('change',()=>renderTray('entryValue'));
$('#saveChoice').onclick=()=>{localStorage.setItem('fc_menu_choice_v5', proposalText()); localStorage.setItem('fc_buyer_data', JSON.stringify(buyerData())); toast('Proposta salva.');};
$('#copyChoice').onclick=()=>{navigator.clipboard?.writeText(proposalText()); toast('Resumo copiado.');};
$('#sendConsultant').onclick=sendToConsultant;
$('#sendConsultantBottom').onclick=sendToConsultant;
$('#openScheduleModal').onclick=openScheduleModal;

function aiAnswer(q){
  const t=q.toLowerCase(); const totals=getTotals();
  if(t.includes('entrada')) return 'Você pode editar a entrada em valor ou percentual. A entrada pode ser paga no cartão de crédito em 1, 2 ou 3 parcelas, e a simulação mostra o valor de cada parcela.';
  if(t.includes('lote')) return 'Para simular apenas o lote, clique em “Simular só lote” no card ou selecione “Somente lote” na bandeja.';
  if(t.includes('casa')) return 'Para simular apenas a casa, clique em “Simular só casa” no card ou selecione “Somente casa” na bandeja.';
  if(t.includes('consultor')) return 'Após montar a bandeja, use o botão “Enviar ao consultor”. Ele prepara a proposta com lote, casa, adicionais e condições simuladas.';
  return totals.entryPercent>=30?'Sua bandeja parece bem estruturada para iniciar a negociação.':'Teste aumentar a entrada, ampliar o prazo ou usar lote agora + casa pré-contratada.';
}

$('#aiSend').onclick=()=>{const input=$('#aiInput');const q=input.value.trim();if(!q)return;$('#thread').insertAdjacentHTML('beforeend',`<div class="msg user">${q}</div><div class="msg bot">${aiAnswer(q)}</div>`);input.value='';$('#thread').scrollTop=$('#thread').scrollHeight;};
$('#hamb').onclick=()=>$('#mobile').classList.toggle('open');
$$('#mobile a').forEach(a=>a.onclick=()=>$('#mobile').classList.remove('open'));
$('#detailModal').addEventListener('click',e=>{if(e.target.id==='detailModal')closeModal();});

syncPriceInputs();

const savedBuyer = JSON.parse(localStorage.getItem('fc_buyer_data') || 'null');
if(savedBuyer){
  if($('#buyerName')) $('#buyerName').value = savedBuyer.name || '';
  if($('#buyerPhone')) $('#buyerPhone').value = savedBuyer.phone || '';
  if($('#buyerEmail')) $('#buyerEmail').value = savedBuyer.email || '';
  if($('#buyerCity')) $('#buyerCity').value = savedBuyer.city || '';
  if($('#contactPreference')) $('#contactPreference').value = savedBuyer.preference || 'WhatsApp';
  if($('#contactTime')) { const timeOptions = Array.from($('#contactTime').options).map(o=>o.value); $('#contactTime').value = timeOptions.includes(savedBuyer.time) ? savedBuyer.time : 'Manhã'; }
  if($('#buyerNote')) $('#buyerNote').value = savedBuyer.note || '';
}

renderAll();