const catalog = [
  {
    category: "LOS QUE VAN CON CREMA",
    subtitle: "Fresas, Uvas, Plátano o Durazno con crema",
    items: [
      { id: "c1", name: "Vaso 10 oz", desc: "1 topping y 1 aderezo", price: 65, type: "crema", numToppings: 1, numAderezos: 1, hasFruitBase: true },
      { id: "c2", name: "Vaso 14 oz", desc: "2 toppings y 1 aderezo", price: 80, type: "crema", numToppings: 2, numAderezos: 1, hasFruitBase: true },
      { id: "c3", name: "Vaso 16 oz", desc: "2 toppings y 1 aderezo", price: 100, type: "crema", numToppings: 2, numAderezos: 1, hasFruitBase: true },
      { id: "c4", name: "Vaso 32 oz", desc: "2 toppings y 2 aderezos", price: 170, type: "crema", numToppings: 2, numAderezos: 2, hasFruitBase: true }
    ]
  },
  {
    category: "ÓRDENES",
    subtitle: "Repostería recién elaborada",
    items: [
      { id: "o1", name: "4 Waffles", desc: "1 fruta, 1 topping y 1 aderezo", price: 65, type: "orden", numToppings: 1, numAderezos: 1, hasFruitBase: true },
      { id: "o2", name: "8 Mini donitas", desc: "1 fruta, 1 topping y 1 aderezo", price: 50, type: "orden", numToppings: 1, numAderezos: 1, hasFruitBase: true },
      { id: "o3", name: "15 Mini hot cakes", desc: "1 fruta, 1 topping y 1 aderezo", price: 65, type: "orden", numToppings: 1, numAderezos: 1, hasFruitBase: true },
      { id: "o4", name: "Banana Split", desc: "Plátano con helados y toppings", price: 100, type: "directo", numToppings: 0, numAderezos: 0, hasFruitBase: false }
    ]
  },
  {
    category: "POSTRES",
    subtitle: "Deliciosas rebanadas",
    items: [
      { id: "p1", name: "Pay de Limón", desc: "1 topping y 1 líquido", price: 40, type: "postre", numToppings: 1, numAderezos: 1, hasFruitBase: false },
      { id: "p2", name: "Pay de Oreo", desc: "1 topping y 1 líquido", price: 40, type: "postre", numToppings: 1, numAderezos: 1, hasFruitBase: false },
      { id: "p3", name: "Flan Napolitano", desc: "1 topping y 1 líquido", price: 40, type: "postre", numToppings: 1, numAderezos: 1, hasFruitBase: false }
    ]
  },
  {
    category: "SALADOS",
    subtitle: "Antojos botaneros preparados",
    items: [
      { 
        id: "s1", 
        name: "Dorilocos", 
        desc: "Con cueritos, Limon y Sal, cacahuates, gomitas y salsa botanera/valentina", 
        price: 40, 
        type: "salado",
        ingredients: ["Cueritos", "Limón y Sal", "Cacahuates", "Gomitas", "Salsa Botanera", "Salsa Valentina"]
      },
      { 
        id: "s2", 
        name: "Cueritos", 
        desc: "Porción de cueritos, limon y sal, salsa botanera/valentina", 
        price: 15, 
        type: "salado",
        ingredients: ["Cueritos", "Limón y sal", "Salsa Botanera", "Salsa Valentina"]
      },
      { 
        id: "s3", 
        name: "Papas Locas", 
        desc: "Gomita, limon y sal, cacahuate, cuerito y salsa botanera/valentina", 
        price: 65, 
        type: "salado",
        ingredients: ["Gomitas", "Limón y sal", "Cacahuates", "Cueritos", "Salsa Botanera", "Salsa Valentina"]
      },
      { 
        id: "s4", 
        name: "Chicharrón Preparado (Chico)", 
        desc: "Preparado clásico con col, Limon y sal, crema, aguacate, jitomate, cueritos, salsa botanera/valentina", 
        price: 30, 
        type: "salado",
        ingredients: ["Col", "Limón y sal", "Crema", "Aguacate", "Jitomate", "Cueritos", "Salsa Botanera", "Salsa Valentina"]
      },
      { 
        id: "s5", 
        name: "Chicharrón Preparado (Grande)", 
        desc: "Preparado clásico con col, Limon y sal, crema, aguacate, jitomate, cueritos, salsa botanera/valentina", 
        price: 50, 
        type: "salado",
        ingredients: ["Col", "Limón y sal", "Crema", "Aguacate", "Jitomate", "Cueritos", "Salsa Botanera", "Salsa Valentina"]
      }
    ]
  }
];

const allExtras = [
  { id: "helado", name: "Bola de helado", price: 15, category: "general" },
  { id: "crema", name: "Crema batida", price: 15, category: "general" },
  { id: "fruta", name: "Fruta", price: 10, category: "fruit" },
  { id: "topping", name: "Topping", price: 10, category: "topping" },
  { id: "aderezo", name: "Aderezo", price: 10, category: "aderezo" },
  { id: "nutella", name: "Escarchado Nutella", price: 15, category: "general" }
];

const toppingsList = [
  "Nuez", "Almendra fileteada", "Granola", "Choco krispis", "Granillo Turin",
  "Mini bombones", "Mazapán", "Froot loops", "Chocoreta", "Luneta de chocolate",
  "Suspiros de chocolate", "Chispas de colores", "Kranky", "Cookie's and cream", "Mini oreos",
  "Mini malvaviscos", "Coco Rayado", "Laposse Pasitas", "Arándanos", "Bombón chocolate"
];

const aderezosList = [
  "Hershey's fresa", "Hershey's chocolate", "Nutella",
  "Mermelada de fresa", "Mermelada de zarzamora", "Lechera", "Cajeta"
];

const fruitList = ["Fresa", "Plátano", "Uva", "Durazno", "Mixta"];

let cart = [];
const MIN_DOMICILIO = 300;
const WHATSAPP_PHONE = "525661757432"; 
let gpsLocation = null;
let currentWaURL = "";
let ticketBlobCache = null;
let pendingItemForModal = null;
let activeExtrasList = [];

const productSections = document.getElementById("productSections");
const cartSidebar = document.getElementById("cartSidebar");
const modalBackdrop = document.getElementById("modalBackdrop");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const checkoutBtn = document.getElementById("checkoutBtn");
const domicilioFields = document.getElementById("domicilioFields");
const domicilioWarning = document.getElementById("domicilioWarning");
const custName = document.getElementById("custName");
const custPhone = document.getElementById("custPhone");
const phoneError = document.getElementById("phoneError");
const custEmail = document.getElementById("custEmail");
const custId = document.getElementById("custId");
const custAddress = document.getElementById("custAddress");
const custRef = document.getElementById("custRef");
const btnGps = document.getElementById("btnGps");
const btnOpenMap = document.getElementById("btnOpenMap");
const gpsStatus = document.getElementById("gpsStatus");
const depositOption = document.getElementById("depositOption");
const montoATransferir = document.getElementById("montoATransferir");
const saldoPendienteLabel = document.getElementById("saldoPendienteLabel");

const extrasModal = document.getElementById("extrasModal");
const extrasItemTitle = document.getElementById("extrasItemTitle");
const extrasItemDesc = document.getElementById("extrasItemDesc");
const baseIngredientsSection = document.getElementById("baseIngredientsSection");
const baseIngredientsFields = document.getElementById("baseIngredientsFields");
const extrasCheckboxes = document.getElementById("extrasCheckboxes");
const fruitDropdownSection = document.getElementById("fruitDropdownSection");
const toppingDropdownSection = document.getElementById("toppingDropdownSection");
const toppingOptionsGrid = document.getElementById("toppingOptionsGrid");
const aderezoDropdownSection = document.getElementById("aderezoDropdownSection");
const aderezoOptionsGrid = document.getElementById("aderezoOptionsGrid");
const extrasSubtotalDisplay = document.getElementById("extrasSubtotalDisplay");
const confirmAddWithExtrasBtn = document.getElementById("confirmAddWithExtrasBtn");
const cancelExtrasBtn = document.getElementById("cancelExtrasBtn");

const infoModal = document.getElementById("infoModal");
const infoModalTitle = document.getElementById("infoModalTitle");
const infoModalContent = document.getElementById("infoModalContent");
const closeInfoModalBtn = document.getElementById("closeInfoModalBtn");

const ticketModal = document.getElementById("ticketModal");
const ticketCanvas = document.getElementById("ticketCanvas");
const downloadTicketBtn = document.getElementById("downloadTicketBtn");
const openWaBtn = document.getElementById("openWaBtn");

const mapModal = document.getElementById("mapModal");
const confirmMapBtn = document.getElementById("confirmMapBtn");
const closeMapBtn = document.getElementById("closeMapBtn");
let mapInstance = null;
let mapMarker = null;

const revistaModal = document.getElementById("revistaModal");
const closeRevistaBtn = document.getElementById("closeRevistaBtn");
const buyRevistaBtn = document.getElementById("buyRevistaBtn");

// Mostrar la revista de marketing en cada recarga (Modo Pruebas)
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (revistaModal) revistaModal.classList.add('active');
  }, 600);
});

if (closeRevistaBtn) {
  closeRevistaBtn.addEventListener('click', () => {
    revistaModal.classList.remove('active');
  });
}

if (revistaModal) {
  revistaModal.addEventListener('click', (e) => {
    if (e.target === revistaModal) {
      revistaModal.classList.remove('active');
    }
  });
}

if (buyRevistaBtn) {
  buyRevistaBtn.addEventListener('click', () => {
    revistaModal.classList.remove('active');

    const productoEstrella = {
      id: "c3",
      name: "Vaso 16 oz Edicion Especial",
      price: 100
    };

    const baseConfig = {
      fruit: "Fresa",
      toppings: ["Mini oreos", "Lechera"],
      aderezos: ["Hershey's chocolate"]
    };

    const extrasEspeciales = [
      { name: "Crema batida", price: 15 },
      { name: "Escarchado Nutella", price: 15 }
    ];

    addToCartDirect(productoEstrella, extrasEspeciales, baseConfig);

    cartSidebar.classList.add('open');
    modalBackdrop.classList.add('active');
  });
}

function renderCatalog() {
  productSections.innerHTML = catalog.map(cat => `
    <section class="category-block">
      <h3 class="category-title">${cat.category}</h3>
      <p class="category-subtitle">${cat.subtitle}</p>
      <div class="grid-products">
        ${cat.items.map(item => `
          <div class="card">
            <div>
              <h3>${item.name}</h3>
              <p>${item.desc}</p>
            </div>
            <div>
              <div class="price">$${item.price.toFixed(2)}</div>
              <button class="add-btn" onclick="handleProductClick('${item.id}')">
                <i class="fa-solid fa-plus"></i> Agregar
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `).join('');
}

function findProduct(id) {
  for (const cat of catalog) {
    const found = cat.items.find(i => i.id === id);
    if (found) return found;
  }
  return null;
}

window.handleProductClick = function(id) {
  const product = findProduct(id);
  if (!product) return;

  if (product.type === "directo") {
    addToCartDirect(product, [], {});
    return;
  }

  pendingItemForModal = product;
  extrasItemTitle.textContent = product.name;
  extrasItemDesc.textContent = `${product.desc} - $${product.price.toFixed(2)}`;

  fruitDropdownSection.classList.add('hidden');
  toppingDropdownSection.classList.add('hidden');
  aderezoDropdownSection.classList.add('hidden');

  const extrasWrapper = extrasCheckboxes.closest('.extras-list-wrapper');

  if (product.type === "salado") {
    baseIngredientsSection.style.display = "block";
    baseIngredientsSection.querySelector('p').textContent = "Selecciona con qué prepararlo:";

    baseIngredientsFields.innerHTML = `
      <div class="extras-grid">
        ${product.ingredients.map((ing) => `
          <label class="extra-row">
            <span>
              <input type="checkbox" class="salado-ing-checkbox" value="${ing}" checked>
              ${ing}
            </span>
          </label>
        `).join('')}
      </div>
    `;

    if (extrasWrapper) extrasWrapper.style.display = "none";
    activeExtrasList = [];
    extrasCheckboxes.innerHTML = "";
    extrasSubtotalDisplay.textContent = `$${product.price.toFixed(2)}`;
    extrasModal.classList.add('active');
    return;
  }

  if (extrasWrapper) extrasWrapper.style.display = "block";
  baseIngredientsSection.querySelector('p').textContent = "Ingredientes incluidos en tu pedido:";

  let baseHtml = "";

  if (product.hasFruitBase) {
    baseHtml += `
      <div class="base-select-row">
        <label>Fruta:</label>
        <select id="baseFruitSelect">
          ${fruitList.map(f => `<option value="${f}">${f}</option>`).join('')}
        </select>
      </div>
    `;
  }

  if (product.numToppings && product.numToppings > 0) {
    for (let i = 1; i <= product.numToppings; i++) {
      baseHtml += `
        <div class="base-select-row">
          <label>Topping ${product.numToppings > 1 ? i : ''}:</label>
          <select class="base-topping-select">
            ${toppingsList.map(t => `<option value="${t}">${t}</option>`).join('')}
          </select>
        </div>
      `;
    }
  }

  if (product.numAderezos && product.numAderezos > 0) {
    for (let i = 1; i <= product.numAderezos; i++) {
      baseHtml += `
        <div class="base-select-row">
          <label>${product.type === 'postre' ? 'Líquido / Aderezo' : 'Aderezo'} ${product.numAderezos > 1 ? i : ''}:</label>
          <select class="base-aderezo-select">
            ${aderezosList.map(a => `<option value="${a}">${a}</option>`).join('')}
          </select>
        </div>
      `;
    }
  }

  if (baseHtml) {
    baseIngredientsFields.innerHTML = baseHtml;
    baseIngredientsSection.style.display = "block";
  } else {
    baseIngredientsFields.innerHTML = "";
    baseIngredientsSection.style.display = "none";
  }

  if (product.type === "crema") {
    activeExtrasList = allExtras.filter(e => e.category !== "fruit");
  } else if (product.type === "postre") {
    activeExtrasList = allExtras.filter(e => e.category === "topping" || e.category === "aderezo");
  } else {
    activeExtrasList = [...allExtras];
  }

  extrasCheckboxes.innerHTML = activeExtrasList.map((ext, idx) => `
    <label class="extra-row">
      <span>
        <input type="checkbox" data-index="${idx}" onchange="handleExtraCheckboxChange(${idx}, this.checked)">
        ${ext.name}
      </span>
      <strong>+$${ext.price.toFixed(2)}</strong>
    </label>
  `).join('');

  toppingOptionsGrid.innerHTML = toppingsList.map((top, idx) => `
    <label class="option-pill">
      <input type="radio" name="toppingChoice" value="${top}" ${idx === 0 ? 'checked' : ''}>
      ${top}
    </label>
  `).join('');

  aderezoOptionsGrid.innerHTML = aderezosList.map((ade, idx) => `
    <label class="option-pill">
      <input type="radio" name="aderezoChoice" value="${ade}" ${idx === 0 ? 'checked' : ''}>
      ${ade}
    </label>
  `).join('');

  updateExtrasSubtotal();
  extrasModal.classList.add('active');
};

window.handleExtraCheckboxChange = function(index, isChecked) {
  const extra = activeExtrasList[index];
  if (!extra) return;

  if (extra.category === "fruit") {
    fruitDropdownSection.classList.toggle('hidden', !isChecked);
  } else if (extra.category === "topping") {
    toppingDropdownSection.classList.toggle('hidden', !isChecked);
  } else if (extra.category === "aderezo") {
    aderezoDropdownSection.classList.toggle('hidden', !isChecked);
  }

  updateExtrasSubtotal();
};

function updateExtrasSubtotal() {
  if (!pendingItemForModal) return;
  let total = pendingItemForModal.price;
  const checkboxes = extrasCheckboxes.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(cb => {
    const ext = activeExtrasList[parseInt(cb.dataset.index, 10)];
    if (ext) total += ext.price;
  });
  extrasSubtotalDisplay.textContent = `$${total.toFixed(2)}`;
}

confirmAddWithExtrasBtn.addEventListener('click', () => {
  if (!pendingItemForModal) return;

  const baseConfig = {};

  if (pendingItemForModal.type === "salado") {
    const saladoCheckboxes = document.querySelectorAll(".salado-ing-checkbox:checked");
    const chosen = Array.from(saladoCheckboxes).map(cb => cb.value);
    baseConfig.saladoIngs = chosen.length > 0 ? chosen : ["Solo"];
    addToCartDirect(pendingItemForModal, [], baseConfig);
    extrasModal.classList.remove('active');
    pendingItemForModal = null;
    return;
  }

  const fruitSelect = document.getElementById("baseFruitSelect");
  if (fruitSelect) {
    baseConfig.fruit = fruitSelect.value;
  }

  const toppingSelects = document.querySelectorAll(".base-topping-select");
  if (toppingSelects.length > 0) {
    baseConfig.toppings = Array.from(toppingSelects).map(s => s.value);
  }

  const aderezoSelects = document.querySelectorAll(".base-aderezo-select");
  if (aderezoSelects.length > 0) {
    baseConfig.aderezos = Array.from(aderezoSelects).map(s => s.value);
  }

  const selectedExtras = [];
  const checkboxes = extrasCheckboxes.querySelectorAll('input[type="checkbox"]:checked');
  
  checkboxes.forEach(cb => {
    const ext = activeExtrasList[parseInt(cb.dataset.index, 10)];
    if (!ext) return;

    if (ext.category === "fruit") {
      const choice = document.querySelector('input[name="fruitChoice"]:checked');
      selectedExtras.push({ name: `Fruta Extra (${choice ? choice.value : 'Fresa'})`, price: ext.price });
    } else if (ext.category === "topping") {
      const choice = document.querySelector('input[name="toppingChoice"]:checked');
      selectedExtras.push({ name: `Topping Extra (${choice ? choice.value : 'Nuez'})`, price: ext.price });
    } else if (ext.category === "aderezo") {
      const choice = document.querySelector('input[name="aderezoChoice"]:checked');
      selectedExtras.push({ name: `Aderezo Extra (${choice ? choice.value : 'Nutella'})`, price: ext.price });
    } else {
      selectedExtras.push({ name: ext.name, price: ext.price });
    }
  });

  addToCartDirect(pendingItemForModal, selectedExtras, baseConfig);
  extrasModal.classList.remove('active');
  pendingItemForModal = null;
});

cancelExtrasBtn.addEventListener('click', () => {
  extrasModal.classList.remove('active');
  pendingItemForModal = null;
});

function addToCartDirect(product, extras, baseConfig) {
  const extrasKey = extras.map(e => e.name).sort().join('|');
  let baseStr = "";
  if (baseConfig.saladoIngs) {
    baseStr = baseConfig.saladoIngs.sort().join(',');
  } else {
    baseStr = `${baseConfig.fruit || ''}-${(baseConfig.toppings || []).sort().join(',')}-${(baseConfig.aderezos || []).sort().join(',')}`;
  }

  const cartItemId = `${product.id}-${baseStr}-${extrasKey}`;
  const extrasTotal = extras.reduce((sum, e) => sum + e.price, 0);
  const unitPrice = product.price + extrasTotal;

  const inCart = cart.find(item => item.cartItemId === cartItemId);
  if (inCart) {
    inCart.qty += 1;
  } else {
    cart.push({
      cartItemId,
      id: product.id,
      name: product.name,
      basePrice: product.price,
      unitPrice,
      extras,
      baseConfig,
      qty: 1
    });
  }
  updateCart();
}

window.removeCartItem = function(cartItemId) {
  cart = cart.filter(i => i.cartItemId !== cartItemId);
  updateCart();
};

function formatBaseDetails(baseConfig) {
  if (!baseConfig) return "";
  if (baseConfig.saladoIngs) {
    return `Lleva: ${baseConfig.saladoIngs.join(', ')}`;
  }
  const parts = [];
  if (baseConfig.fruit) parts.push(`Fruta: ${baseConfig.fruit}`);
  if (baseConfig.toppings && baseConfig.toppings.length > 0) {
    parts.push(`Top: ${baseConfig.toppings.join(', ')}`);
  }
  if (baseConfig.aderezos && baseConfig.aderezos.length > 0) {
    parts.push(`Ade: ${baseConfig.aderezos.join(', ')}`);
  }
  return parts.join(' | ');
}

function updateCart() {
  const total = cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  cartCount.textContent = count;
  cartTotal.textContent = `$${total.toFixed(2)}`;

  if (cart.length === 0) {
    cartItems.innerHTML = `<p style="text-align:center;color:#888;margin-top:20px;">Tu carrito está vacío</p>`;
    checkoutBtn.disabled = true;
    montoATransferir.textContent = "$0.00";
    saldoPendienteLabel.textContent = "";
    return;
  }

  cartItems.innerHTML = cart.map(i => {
    const baseText = formatBaseDetails(i.baseConfig);
    return `
      <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; border: 1px solid #ebd9c4; background: #fffaf0; padding: 10px; border-radius: 8px; margin-bottom: 8px;">
        <div style="flex: 1;">
          <strong>${i.name}</strong><br>
          ${baseText ? `<span class="cart-item-base">${baseText}</span>` : ''}
          ${i.extras && i.extras.length > 0 
            ? `<span class="cart-item-extras">+ ${i.extras.map(e => `${e.name} (+$${e.price})`).join(', ')}</span>` 
            : ''}
          <small style="display: block; margin-top: 4px; font-weight: 600; color: #4a2c11;">${i.qty} x $${i.unitPrice.toFixed(2)} = $${(i.qty * i.unitPrice).toFixed(2)}</small>
        </div>
        <button type="button" class="delete-item-btn" data-delete-id="${i.cartItemId}">
          <i class="fa-solid fa-trash-can"></i> Quitar
        </button>
      </div>
    `;
  }).join('');

  validateTotals();
}

function validateTotals() {
  const total = cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
  const depPercent = parseInt(depositOption.value, 10);

  const transferir = (total * depPercent) / 100;
  const pendiente = total - transferir;

  montoATransferir.textContent = `$${transferir.toFixed(2)} MXN`;
  saldoPendienteLabel.textContent = depPercent === 50 
    ? `Saldo restante al recibir/recoger: $${pendiente.toFixed(2)} MXN` 
    : `Pedido cubierto al 100%`;

  if (deliveryType === 'domicilio') {
    domicilioFields.classList.remove('hidden');
    if (total < MIN_DOMICILIO) {
      domicilioWarning.textContent = `Mínimo para envío a domicilio: $${MIN_DOMICILIO}. Faltan $${(MIN_DOMICILIO - total).toFixed(2)}.`;
      checkoutBtn.disabled = true;
      return;
    } else {
      domicilioWarning.textContent = "";
    }
  } else {
    domicilioFields.classList.add('hidden');
    domicilioWarning.textContent = "";
  }

  checkoutBtn.disabled = cart.length === 0;
}

document.querySelectorAll('input[name="deliveryType"]').forEach(r => r.addEventListener('change', validateTotals));
depositOption.addEventListener('change', validateTotals);

function isValidPhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length !== 10) return { valid: false, msg: "El teléfono debe contener exactamente 10 dígitos." };
  if (/^[01]/.test(cleaned)) return { valid: false, msg: "Número no válido: debe iniciar con clave LADA válida (2-9)." };
  if (/^(\d)\1{9}$/.test(cleaned)) return { valid: false, msg: "Ingresa un número de teléfono real y activo." };
  const fakeSequences = ["1234567890", "0123456789", "9876543210", "0987654321"];
  if (fakeSequences.includes(cleaned)) return { valid: false, msg: "Por favor introduce un número de teléfono legítimo." };
  return { valid: true, cleanPhone: cleaned };
}

custPhone.addEventListener('input', () => {
  custPhone.value = custPhone.value.replace(/\D/g, '').slice(0, 10);
  if (phoneError) phoneError.style.display = "none";
});

async function reverseGeocode(lat, lng) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
    const data = await response.json();
    if (data && data.address) {
      const road = data.address.road || data.address.pedestrian || "";
      const houseNumber = data.address.house_number || "";
      const suburb = data.address.neighbourhood || data.address.suburb || data.address.quarter || "";
      const city = data.address.city || data.address.town || "";

      let detected = [road, houseNumber].filter(Boolean).join(" #");
      if (suburb) detected += (detected ? `, Col. ` : `Col. `) + suburb;
      if (city) detected += `, ${city}`;

      if (detected) custAddress.value = detected;
    }
  } catch (e) {
    console.error(e);
  }
}

btnGps.addEventListener('click', () => {
  if (!navigator.geolocation) {
    gpsStatus.textContent = "Tu dispositivo no soporta GPS.";
    return;
  }
  gpsStatus.textContent = "Obteniendo ubicación GPS...";
  btnGps.disabled = true;

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      gpsLocation = {
        lat: lat.toFixed(6),
        lng: lng.toFixed(6),
        mapUrl: `https://maps.google.com/?q=${lat},${lng}`
      };
      await reverseGeocode(lat, lng);
      gpsStatus.innerHTML = `Ubicación detectada con éxito.`;
      btnGps.disabled = false;
    },
    (err) => {
      gpsStatus.textContent = "No se pudo obtener la ubicación (permiso denegado).";
      btnGps.disabled = false;
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
});

btnOpenMap.addEventListener('click', () => {
  mapModal.classList.add('active');
  const defaultLat = gpsLocation ? parseFloat(gpsLocation.lat) : 19.4326;
  const defaultLng = gpsLocation ? parseFloat(gpsLocation.lng) : -99.1332;

  setTimeout(() => {
    if (!mapInstance) {
      mapInstance = L.map('mapContainer').setView([defaultLat, defaultLng], 16);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
      }).addTo(mapInstance);

      mapMarker = L.marker([defaultLat, defaultLng], { draggable: true }).addTo(mapInstance);
      mapInstance.on('click', (e) => {
        mapMarker.setLatLng(e.latlng);
      });
    } else {
      mapInstance.invalidateSize();
      mapInstance.setView([defaultLat, defaultLng], 16);
      mapMarker.setLatLng([defaultLat, defaultLng]);
    }
  }, 200);
});

closeMapBtn.addEventListener('click', () => {
  mapModal.classList.remove('active');
});

confirmMapBtn.addEventListener('click', async () => {
  if (mapMarker) {
    const pos = mapMarker.getLatLng();
    gpsLocation = {
      lat: pos.lat.toFixed(6),
      lng: pos.lng.toFixed(6),
      mapUrl: `https://maps.google.com/?q=${pos.lat.toFixed(6)},${pos.lng.toFixed(6)}`
    };
    gpsStatus.textContent = "Actualizando dirección...";
    await reverseGeocode(pos.lat, pos.lng);
    gpsStatus.innerHTML = `Ubicación ajustada en el mapa correctamente.`;
  }
  mapModal.classList.remove('active');
});

checkoutBtn.addEventListener('click', () => {
  const name = custName.value.trim() || "Cliente General";
  const rawPhone = custPhone.value.trim();
  const email = custEmail.value.trim();
  const clientId = custId.value.trim().toUpperCase();
  const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
  const address = custAddress.value.trim();
  const ref = custRef.value.trim();
  const depPercent = parseInt(depositOption.value, 10);
  const total = cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  const depositado = (total * depPercent) / 100;
  const pendiente = total - depositado;

  const phoneValidation = isValidPhoneNumber(rawPhone);
  if (!phoneValidation.valid) {
    if (phoneError) {
      phoneError.textContent = phoneValidation.msg;
      phoneError.style.display = "block";
    }
    custPhone.focus();
    return;
  }
  const phone = phoneValidation.cleanPhone;

  if (deliveryType === 'domicilio' && !address) {
    alert("Por favor escribe tu dirección completa para el envío.");
    custAddress.focus();
    return;
  }

  const now = new Date();
  const fechaStr = now.toLocaleDateString('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const horaStr = now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', hour12: true });

  drawTicket({ name, phone, email, clientId, deliveryType, address, ref, total, depositado, pendiente, fechaStr, horaStr, gpsLocation });

  let text = "";
  if (deliveryType === 'domicilio') {
    if (gpsLocation) {
      text += `*Ubicacion GPS:* ${gpsLocation.mapUrl}\n\n`;
    } else {
      text += `*Direccion:* ${address}\n\n`;
    }
  }

  text += `ADJUNTO CAPTURA DE MI TICKET Y DE MI TRANSFERENCIA PARA COMENZAR LA ELABORACION DE MI PEDIDO.`;

  currentWaURL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;

  cartSidebar.classList.remove('open');
  modalBackdrop.classList.remove('active');
  ticketModal.classList.add('active');
});

function drawTicket(data) {
  const ctx = ticketCanvas.getContext('2d');
  const baseWidth = 380;
  
  let extraLines = 0;
  if (data.clientId) extraLines += 20;
  if (data.email) extraLines += 18;

  if (data.deliveryType === 'domicilio') {
    extraLines += 45;
    if (data.ref) extraLines += 25;
    if (data.gpsLocation) extraLines += 25;
  }

  let itemsHeight = 0;
  cart.forEach(item => {
    itemsHeight += 38;
    if (item.baseConfig && Object.keys(item.baseConfig).length > 0) {
      if (item.baseConfig.saladoIngs) itemsHeight += 16;
      if (item.baseConfig.fruit) itemsHeight += 16;
      if (item.baseConfig.toppings && item.baseConfig.toppings.length > 0) itemsHeight += 16;
      if (item.baseConfig.aderezos && item.baseConfig.aderezos.length > 0) itemsHeight += 16;
    }
    if (item.extras && item.extras.length > 0) {
      itemsHeight += 16 * item.extras.length;
    }
    itemsHeight += 8;
  });

  const baseHeight = 520 + itemsHeight + extraLines;

  ticketCanvas.width = baseWidth;
  ticketCanvas.height = baseHeight;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, baseWidth, baseHeight);

  ctx.fillStyle = "#111";
  ctx.textAlign = "center";
  ctx.font = "bold 18px 'Space Mono', monospace";
  ctx.fillText("GUSTO CULPOSO", baseWidth / 2, 35);
  ctx.font = "12px 'Space Mono', monospace";
  ctx.fillText("Negocio de Postres y Snacks", baseWidth / 2, 52);
  ctx.fillText("------------------------------------", baseWidth / 2, 70);

  ctx.textAlign = "left";
  ctx.font = "11px 'Space Mono', monospace";
  ctx.fillText(`Fecha: ${data.fechaStr} ${data.horaStr}`, 20, 92);
  ctx.fillText(`Cliente: ${data.name}`, 20, 110);

  let y = 128;

  if (data.clientId) {
    ctx.font = "bold 11px 'Space Mono', monospace";
    ctx.fillText(`ID Cliente: ${data.clientId}`, 20, y);
    ctx.font = "11px 'Space Mono', monospace";
    y += 18;
  }

  ctx.fillText(`Tel: ${data.phone}`, 20, y);
  y += 18;

  if (data.email) {
    ctx.fillText(`Email: ${data.email.substring(0, 32)}`, 20, y);
    y += 18;
  }

  ctx.fillText(`Entrega: ${data.deliveryType === 'domicilio' ? 'Envio a Domicilio' : 'Recoger en Local'}`, 20, y);
  y += 18;

  if (data.deliveryType === 'domicilio') {
    ctx.fillText(`Dir: ${data.address.substring(0, 36)}`, 20, y);
    y += 18;
    if (data.ref) {
      ctx.fillText(`Ref: ${data.ref.substring(0, 36)}`, 20, y);
      y += 18;
    }
    if (data.gpsLocation) {
      ctx.fillText(`GPS: ${data.gpsLocation.lat}, ${data.gpsLocation.lng}`, 20, y);
      y += 18;
    }
  }

  ctx.textAlign = "center";
  ctx.fillText("------------------------------------", baseWidth / 2, y);

  y += 20;
  ctx.textAlign = "left";
  ctx.font = "bold 11px 'Space Mono', monospace";
  ctx.fillText("CANT / PRODUCTO", 20, y);
  ctx.textAlign = "right";
  ctx.fillText("TOTAL", baseWidth - 20, y);

  y += 10;
  ctx.textAlign = "center";
  ctx.font = "11px 'Space Mono', monospace";
  ctx.fillText("- - - - - - - - - - - - - - - - - - ", baseWidth / 2, y);

  y += 18;
  cart.forEach(p => {
    ctx.textAlign = "left";
    ctx.font = "bold 11px 'Space Mono', monospace";
    ctx.fillText(`${p.qty}x ${p.name.substring(0, 24)}`, 20, y);
    ctx.textAlign = "right";
    ctx.fillText(`$${(p.qty * p.unitPrice).toFixed(2)}`, baseWidth - 20, y);
    
    y += 16;
    ctx.textAlign = "left";
    ctx.font = "10px 'Space Mono', monospace";
    ctx.fillStyle = "#555";

    if (p.baseConfig) {
      if (p.baseConfig.saladoIngs) {
        ctx.fillText(`   Lleva: ${p.baseConfig.saladoIngs.join(', ').substring(0, 34)}`, 20, y);
        y += 15;
      }
      if (p.baseConfig.fruit) {
        ctx.fillText(`   Fruta: ${p.baseConfig.fruit}`, 20, y);
        y += 15;
      }
      if (p.baseConfig.toppings && p.baseConfig.toppings.length > 0) {
        ctx.fillText(`   Top: ${p.baseConfig.toppings.join(', ').substring(0, 34)}`, 20, y);
        y += 15;
      }
      if (p.baseConfig.aderezos && p.baseConfig.aderezos.length > 0) {
        ctx.fillText(`   Ade: ${p.baseConfig.aderezos.join(', ').substring(0, 34)}`, 20, y);
        y += 15;
      }
    }

    if (p.extras && p.extras.length > 0) {
      ctx.fillStyle = "#7f5539";
      p.extras.forEach(ext => {
        ctx.fillText(`   + ${ext.name} (+$${ext.price.toFixed(2)})`, 20, y);
        y += 15;
      });
    }

    ctx.fillStyle = "#111";
    y += 6;
  });

  ctx.textAlign = "center";
  ctx.fillText("------------------------------------", baseWidth / 2, y);

  y += 24;
  ctx.textAlign = "left";
  ctx.font = "bold 13px 'Space Mono', monospace";
  ctx.fillText("TOTAL:", 20, y);
  ctx.textAlign = "right";
  ctx.fillText(`$${data.total.toFixed(2)}`, baseWidth - 20, y);

  y += 20;
  ctx.font = "12px 'Space Mono', monospace";
  ctx.textAlign = "left";
  ctx.fillText("Anticipo / Pagado:", 20, y);
  ctx.textAlign = "right";
  ctx.fillText(`$${data.depositado.toFixed(2)}`, baseWidth - 20, y);

  y += 20;
  ctx.textAlign = "left";
  ctx.fillText("Saldo Restante:", 20, y);
  ctx.textAlign = "right";
  ctx.fillText(`$${data.pendiente.toFixed(2)}`, baseWidth - 20, y);

  y += 34;
  ctx.textAlign = "center";
  ctx.font = "10px 'Space Mono', monospace";
  ctx.fillText("Adjuntar captura de transferencia", baseWidth / 2, y);
  y += 14;
  ctx.fillText("para comenzar a elaborar tu pedido.", baseWidth / 2, y);
  y += 18;
  ctx.fillText("¡Gracias por tu preferencia!", baseWidth / 2, y);

  downloadTicketBtn.href = ticketCanvas.toDataURL("image/png");
  ticketCanvas.toBlob((b) => { ticketBlobCache = b; }, "image/png");
}

function getCanvasBlob(canvas) {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), "image/png");
  });
}

openWaBtn.addEventListener('click', async () => {
  openWaBtn.disabled = true;
  openWaBtn.textContent = "Preparando...";

  try {
    const blob = ticketBlobCache || await getCanvasBlob(ticketCanvas);
    const file = new File([blob], "Ticket-Gusto-Culposo.png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Ticket Gusto Culposo",
        text: currentWaURL.split("text=")[1] ? decodeURIComponent(currentWaURL.split("text=")[1]) : ""
      });
      ticketModal.classList.remove('active');
      openWaBtn.disabled = false;
      openWaBtn.textContent = "Ir a WhatsApp y Enviar Comprobante";
      return;
    }

    if (navigator.clipboard && navigator.clipboard.write) {
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob })
      ]);
      alert("Ticket copiado al portapapeles.\n\nAl abrirse WhatsApp: presiona Ctrl + V en el chat para pegar la foto del ticket y adjunta tu comprobante.");
    }
  } catch (e) {
    console.log("Copiado alternativo:", e);
  } finally {
    openWaBtn.disabled = false;
    openWaBtn.textContent = "Ir a WhatsApp y Enviar Comprobante";
    ticketModal.classList.remove('active');
    window.open(currentWaURL, '_blank');
  }
});

openCartBtn.addEventListener('click', () => {
  cartSidebar.classList.add('open');
  modalBackdrop.classList.add('active');
});

function closeCart() {
  cartSidebar.classList.remove('open');
  modalBackdrop.classList.remove('active');
}

closeCartBtn.addEventListener('click', closeCart);
modalBackdrop.addEventListener('click', closeCart);

window.scrollToCatalog = function() {
  const cat = document.getElementById("catalogoSection");
  if (cat) cat.scrollIntoView({ behavior: 'smooth' });
};

window.openInfoModal = function(type) {
  let title = "";
  let html = "";

  if (type === "comoPedir") {
    title = "¿Cómo hacer tu pedido?";
    html = `
      <div class="info-step-card">
        <strong>Paso 1: Elige tu antojo</strong>
        Explora el catálogo y pulsa en "+ Agregar". Si es un postre o crema, selecciona tu fruta base, tus toppings y aderezos incluidos. Si es salado, elige con qué ingredientes prepararlo.
      </div>
      <div class="info-step-card">
        <strong>Paso 2: Agrega extras a tu gusto</strong>
        Si lo deseas, puedes complementar con bola de helado, crema batida o escarchado de Nutella antes de confirmar.
      </div>
      <div class="info-step-card">
        <strong>Paso 3: Completa tus datos de entrega</strong>
        Ingresa a tu carrito pulsando el botón café superior. Pon tu nombre, teléfono y selecciona si recoges en local o si es a domicilio (mínimo $300 MXN con ubicación GPS o mapa).
      </div>
      <div class="info-step-card">
        <strong>Paso 4: Elige tu modalidad de pago</strong>
        Puedes pagar el 100% completo o dar un anticipo del 50% para que comencemos la preparación artesanal de tu pedido.
      </div>
      <div class="info-step-card">
        <strong>Paso 5: Envía tu comprobante</strong>
        Al pulsar "Generar Ticket", se descargará tu comprobante digital y te redirigirá a nuestro WhatsApp oficial (56-61-75-74-32) para adjuntar tu foto de transferencia y confirmar tu orden.
      </div>
    `;
  } else if (type === "anticipos") {
    title = "Pagos y Anticipos (50% / 100%)";
    html = `
      <p style="margin-bottom:10px;">En <strong>Gusto Culposo</strong> preparamos todos nuestros postres y snacks al momento para garantizar frescura y calidad de primera.</p>
      <div class="info-step-card">
        <strong>Anticipo del 50%:</strong>
        Es el monto mínimo indispensable para que entremos a cocina a elaborar tu pedido. El saldo restante (50%) se liquida al recibir o recoger.
      </div>
      <div class="info-step-card">
        <strong>Pago del 100%:</strong>
        Cubre el total de tu orden con anticipación para una entrega rápida sin manejo de efectivo.
      </div>
      <p style="margin-top:10px; font-size:0.8rem; color:#666;">
        Importante: Todo pedido requiere confirmación de captura de transferencia enviada a nuestro WhatsApp oficial (56-61-75-74-32).
      </p>
    `;
  } else if (type === "entregas") {
    title = "Envíos y Ubicación GPS";
    html = `
      <div class="info-step-card">
        <strong>Recoger en local:</strong>
        Sin monto mínimo de compra. Puedes acudir directamente por tu orden en cuanto te confirmemos por WhatsApp que está lista.
      </div>
      <div class="info-step-card">
        <strong>Envío a domicilio:</strong>
        Disponible a partir de <strong>$300 MXN</strong> de compra.
      </div>
      <div class="info-step-card">
        <strong>Ubicación satelital exacta:</strong>
        Usa el botón <em>GPS actual</em> o abre nuestro <em>Mapa interactivo</em> para mover el marcador rojo directamente a la puerta de tu domicilio, asegurando que tu repartidor llegue sin contratiempos.
      </div>
    `;
  } else if (type === "mesaEventos") {
    title = "Mesa de Postres & Snacks para Eventos";
    html = `
      <div style="text-align:center; padding: 20px 10px;">
        <i class="fa-solid fa-cake-candles" style="font-size: 2.5rem; color: #4a2c11; margin-bottom: 12px; display:block;"></i>
        <h4 style="color:#4a2c11; font-size:1.1rem; margin-bottom:6px;">Próximamente...</h4>
        <p style="font-size:0.86rem; color:#555; line-height:1.4;">
          Estamos preparando una experiencia inolvidable para tus bodas, cumpleaños, graduaciones y reuniones familiares. Muy pronto podrás cotizar barras interactivas de fresas con crema, waffles, donitas y botanas saladas directamente aquí.
        </p>
      </div>
    `;
  } else if (type === "paquetes") {
    title = "Paquetes para Fiestas";
    html = `
      <div style="text-align:center; padding: 20px 10px;">
        <i class="fa-solid fa-boxes-packing" style="font-size: 2.5rem; color: #4a2c11; margin-bottom: 12px; display:block;"></i>
        <h4 style="color:#4a2c11; font-size:1.1rem; margin-bottom:6px;">Próximamente...</h4>
        <p style="font-size:0.86rem; color:#555; line-height:1.4;">
          Combos y cajas especiales de postres para consentir a tus invitados. Espéralo muy pronto en nuestra plataforma web.
        </p>
      </div>
    `;
  } else if (type === "conocenos") {
    title = "Conócenos - Nuestra Historia";
    html = `
      <p style="margin-bottom:12px;">
        <strong>Gusto Culposo</strong> nació del impulso de 2 jóvenes emprendedores que no tuvieron miedo a intentar. Antes de llegar aquí, probamos distintos ramos de negocios: algunos salieron bien, otros no tanto, y en el camino enfrentamos pérdidas, fracasos y noches difíciles.
      </p>
      <p style="margin-bottom:12px;">
        Lejos de detenernos, cada tropiezo fue una escuela. Este proyecto representa la madurez de todo ese aprendizaje, un negocio que hoy está floreciendo con trabajo honesto y al que se han sumado más jóvenes talentosos que han aportado su granito de arena para construir lo que hoy ves.
      </p>
      <div class="info-step-card">
        <strong>Nuestra Filosofía:</strong>
        Creemos en la resiliencia y en hacer las cosas bien desde la raíz. No buscamos vender solo un producto, sino respaldar cada orden con un balance impecable de calidad, porción justa y precio honesto. Queremos que la frescura y dedicación en cada postre hablen por nosotros.
      </div>
      <p style="margin-top:12px;">
        Seguimos aprendiendo, capacitándonos e innovando para expandir nuestra presencia a más eventos y celebraciones, con la meta clara de abrir nuestra primera sucursal física en un local diseñado a la altura de lo que nuestros clientes merecen.
      </p>
      <p style="margin-top:14px; font-weight:700; color:#4a2c11; text-align:center;">
        Gracias por creer en el comercio local, apoyar el talento joven y disfrutar cada antojo sin culpa.
      </p>
    `;
  } else if (type === "expos") {
    title = "Participación en Eventos y Expos";
    html = `
      <div style="text-align:center; padding: 20px 10px;">
        <i class="fa-solid fa-award" style="font-size: 2.5rem; color: #4a2c11; margin-bottom: 12px; display:block;"></i>
        <h4 style="color:#4a2c11; font-size:1.1rem; margin-bottom:6px;">Próximamente...</h4>
        <p style="font-size:0.86rem; color:#555; line-height:1.4;">
          Nos estamos preparando para participar en bazares, expos gastronómicas y ferias locales. Aquí publicaremos las fechas y stands donde podrás visitarnos en vivo.
        </p>
      </div>
    `;
  } else if (type === "corporativos") {
    title = "Participación en Corporativos";
    html = `
      <div style="text-align:center; padding: 20px 10px;">
        <i class="fa-solid fa-building" style="font-size: 2.5rem; color: #4a2c11; margin-bottom: 12px; display:block;"></i>
        <h4 style="color:#4a2c11; font-size:1.1rem; margin-bottom:6px;">Próximamente...</h4>
        <p style="font-size:0.86rem; color:#555; line-height:1.4;">
          Estamos diseñando paquetes especiales para empresas, coffee breaks empresariales, activaciones de marca y convenios corporativos para consentir a tu equipo de trabajo.
        </p>
      </div>
    `;
  } else if (type === "eventos") {
    title = "Participación en Eventos";
    html = `
      <div style="text-align:center; padding: 20px 10px;">
        <i class="fa-solid fa-champagne-glasses" style="font-size: 2.5rem; color: #4a2c11; margin-bottom: 12px; display:block;"></i>
        <h4 style="color:#4a2c11; font-size:1.1rem; margin-bottom:6px;">Próximamente...</h4>
        <p style="font-size:0.86rem; color:#555; line-height:1.4;">
          Llevamos nuestro carrito y estación de preparación a festivales, eventos culturales y celebraciones de gran escala. Muy pronto podrás consultar nuestro calendario de eventos en vivo.
        </p>
      </div>
    `;
  } else if (type === "privacidad") {
    title = "Aviso de Privacidad";
    html = `
      <p style="margin-bottom:10px;">
        En cumplimiento con los principios de licitud y consentimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, <strong>Gusto Culposo</strong> (con domicilio operativo en Priv. Guadalupe Col. Pantitlán #34) informa que los datos personales recabados en este sitio web (nombre, teléfono, correo electrónico, dirección y ubicación GPS) son utilizados exclusivamente para:
      </p>
      <ul style="padding-left:18px; margin-bottom:10px; font-size:0.82rem; color:#555;">
        <li>Identificar y registrar el pedido del cliente.</li>
        <li>Coordinar la entrega a domicilio o entrega en sucursal.</li>
        <li>Generar el ticket digital de compra y registrar visitas del programa de fidelidad.</li>
        <li>Contacto directo vía WhatsApp o llamada para seguimiento del pedido.</li>
      </ul>
      <p style="font-size:0.8rem; color:#666;">
        Sus datos no son compartidos, transferidos ni vendidos a ningún tercero bajo ninguna circunstancia.
      </p>
    `;
  } else if (type === "terminos") {
    title = "Términos y Condiciones";
    html = `
      <div class="info-step-card">
        <strong>1. Elaboración y Pedidos:</strong>
        Todos los productos se elaboran al momento. La preparación inicia únicamente una vez recibido el comprobante de transferencia (anticipo mínimo del 50% o total 100%) en nuestro canal de WhatsApp.
      </div>
      <div class="info-step-card">
        <strong>2. Envíos a Domicilio:</strong>
        El monto mínimo para solicitar servicio a domicilio es de $300.00 MXN. Es responsabilidad del cliente brindar referencias claras y corroborar su ubicación satelital.
      </div>
      <div class="info-step-card">
        <strong>3. Tolerancia y Entrega:</strong>
        En entregas personales o en domicilio se cuenta con un tiempo de espera de 15 - 30 minutos una vez arribada la unidad dependiendo la distancia del lugar de entrega.
      </div>
      <div class="info-step-card">
        <strong>4. Cancelaciones:</strong>
        Debido a la naturaleza perecedera y preparación inmediata de los alimentos, los anticipos no son reembolsables una vez iniciada la elaboración.
      </div>
    `;
  }

  infoModalTitle.textContent = title;
  infoModalContent.innerHTML = html;
  infoModal.classList.add('active');
};

closeInfoModalBtn.addEventListener('click', () => {
  infoModal.classList.remove('active');
});

renderCatalog();
// Escucha nativa imperativa para el botón de eliminar del carrito
document.addEventListener('click', function(e) {
  const targetBtn = e.target.closest('[data-delete-id]');
  if (targetBtn) {
    const idTootip = targetBtn.getAttribute('data-delete-id');
    if (idTootip) {
      removeCartItem(idTootip);
    }
  }
});
// Función para cambiar de pestaña entre Menú y Cotiza tu evento
window.switchTab = function(tabName) {
  const menuBtn = document.getElementById("tabMenuBtn");
  const cotizaBtn = document.getElementById("tabCotizaBtn");
  const catalogoSec = document.getElementById("catalogoSection");
  const cotizaSec = document.getElementById("cotizaSection");

  if (tabName === 'menu') {
    menuBtn.classList.add('active');
    cotizaBtn.classList.remove('active');
    catalogoSec.classList.remove('hidden');
    cotizaSec.classList.add('hidden');
  } else {
    cotizaBtn.classList.add('active');
    menuBtn.classList.remove('active');
    cotizaSec.classList.remove('hidden');
    catalogoSec.classList.add('hidden');
  }
};