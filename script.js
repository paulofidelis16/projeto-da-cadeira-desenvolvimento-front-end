// ===== Adriano Moto Peças – script.js =====
// Número da loja: código do país (55) + DDD + número, só dígitos.
const WHATSAPP = "558386405699";

const PRODUTOS = [
  {id:1,nome:"Kit Tração Riffel para CG160",cat:"Transmissão",marca:"Riffel",preco:180.00,comp:"CG 160",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw1mI_vgQn7Fw_KrGxRQVO8gfnxyxiFNKFENtisC3dEw&s=10"},
  {id:2,nome:"Caixa de direção Danidrea para CG160",cat:"Suspensão e direção",marca:"Danidrea",preco:100.00,comp:"CG 160",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_WYb-3bMtsCgqqhS4E0zBgbxjplv7PMC_ZSPTZTCVKg&s"},
  {id:3,nome:"Patins de freio Cobreq",cat:"Freios",marca:"Cobreq",preco:45.00,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCu1AdXvzpsorfkmNOcTb7RvG10QmStTiskerNz9ERKfcAt-WClgAagQ&s=10"},
  {id:4,nome:"Lâmpada H4 Magnetron",cat:"Elétrica",marca:"Magnetron",preco:45.00,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTubyMjHLfomUBU6sF_istLPwZTr-6ffrfxcE_FgVemrg&s=10"},
  {id:5,nome:"Lâmpada de Led H4 Stallion",cat:"Elétrica",marca:"Stallion",preco:60.00,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQscAHihs4vJ9qZxgS4FHkEkVopMQpccKbsvd1VzzahoSxuzd8QCOSQh4U&s=10"},
  {id:6,nome:"Amortecedor Monoshock Cofap para Bros 160",cat:"Suspensão e direção",marca:"Cofap",preco:550.00,comp:"Bros 160",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxYxasXXFiOoUiJQGWYqsRivXzJASuxRHM_dPu9cDTw&s"},
  {id:7,nome:"Jogo de Juntas para CG160 Vedamotors",cat:"Motor",marca:"Vedamotors",preco:60.00,comp:"CG 160",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNkoTuP8tAH1UJK861UwAhuL6yxwNHh6CEnADdRP08w&s"},
  {id:8,nome:"Vela de ignição NGK",cat:"Elétrica",marca:"NGK",preco:40.00,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5YTDa-2wKsNYDungiaXVHKNEWk0TlHBauUpmOz2VHuz5mx-kyP0VRAaR&s=10"},
  {id:9,nome:"Cabo de acelerador Scud",cat:"Motor",marca:"Scud",preco:35.00,img:"https://down-br.img.susercontent.com/file/br-11134207-7r98o-lty55593xfv853"},
  {id:10,nome:"Embreagem completa Diafrag",cat:"Motor",marca:"Diafrag",preco:220.00,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6v8hdDLeyhQpIkMAHplSWs2SGDJwRd1TfDXbCZFms4g&s"},
  {id:11,nome:"Óleo Mobil 10W30",cat:"Óleos",marca:"Mobil",preco:50.00,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGLOM49H0eO3DX6TRfZ8b32heunnn0xhKSsyXho3GiZfxE3tShY1hJpAt&s=10"},
  {id:12,nome:"Óleo Mobil 20W50",cat:"Óleos",marca:"Mobil",preco:45.00,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46Mwnit2QMr4tt0mv0_7TgtuoT5WMg5vrvldbW9emrtDmLbdEXwFcwzA&s=10"},
  {id:13,nome:"Óleo Motul 10W30",cat:"Óleos",marca:"Motul",preco:60.00,img:"https://m.media-amazon.com/images/I/61EulmchG9L.jpg"},
  {id:14,nome:"Óleo Motul 20W50",cat:"Óleos",marca:"Motul",preco:55.00,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0AMb4sC2UiP3H6NcLLcBQ56OhAbJC6rkVdAZxncD4EoDdmHYjZB7eeck&s=10"},
  {id:15,nome:"Protetor de carenagem CG150/160",cat:"Acessórios",marca:"Outras",preco:280.00,comp:"CG 150 / 160",img:"https://m.convertiez.com.br/sbsmotos/shop/products/images/6024466/medium/protetor-de-carenagem-titan-150160-awa_15648.png"},
  {id:16,nome:"Alça Quadrada POP110",cat:"Acessórios",marca:"Outras",preco:70.00,comp:"Pop 110",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oXYhin9E_FlgX9wTFxgyfeHxsnuU3W5iWC-4iUeLHg&s"},
  {id:17,nome:"Pneu Vipal 110/80-14",cat:"Pneus",marca:"Vipal",preco:300.00,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0cKxyDZSLCXTT4LM1TotS3qF8RWmkWLsIi8-OC9ZsRlpHVOSS0zB_KyjS&s=10"},
  {id:18,nome:"Pneu Pirelli Diablo Rosso 150/60-17",cat:"Pneus",marca:"Pirelli",preco:890.00,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgHOi2TmZD1KBzsRnG236hw0lxZaCVnMYF-ezDjOIX29Tz4tWtFFRzIA0&s=10"},
  {id:19,nome:"Pneu Panther Gripster 90/90-18",cat:"Pneus",marca:"Panther",preco:220.00,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJWu2-VmiuyNTmiCXBASK3TRlrV31qonWfJa3qo2mIQ&s"},
  {id:20,nome:"Pneu Maggion 110/90-17",cat:"Pneus",marca:"Maggion",preco:350.00,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pCZo2a6G7l7ZGcpM0AGMt_QfifafJ3z4gKVtO59IkXdA2RBESTzZcMdQ&s=10"}
];

const brl = v => v.toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
const $ = id => document.getElementById(id);
const state = {cat:"Todas", q:"", brand:"Todas", sort:"rel", cart:{}};

// Carrinho salvo no navegador
try { state.cart = JSON.parse(localStorage.getItem("amp-cart")) || {}; } catch (e) { state.cart = {}; }
function save() { try { localStorage.setItem("amp-cart", JSON.stringify(state.cart)); } catch (e) {} }

// Remove acentos para a busca
const norm = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function setup() {
  const cats = ["Todas", ...new Set(PRODUTOS.map(p => p.cat))];
  $("chips").innerHTML = cats.map(c =>
    `<button class="chip" data-cat="${c}" aria-pressed="${c === state.cat}">${c}</button>`).join("");

  const brands = ["Todas", ...new Set(PRODUTOS.map(p => p.marca))]
    .sort((a, b) => a === "Todas" ? -1 : b === "Todas" ? 1 : a.localeCompare(b));
  $("brand").innerHTML = brands.map(b =>
    `<option value="${b}">${b === "Todas" ? "Todas as marcas" : b}</option>`).join("");
}

function render() {
  let list = PRODUTOS.filter(p =>
    (state.cat === "Todas" || p.cat === state.cat) &&
    (state.brand === "Todas" || p.marca === state.brand) &&
    (!state.q || norm(`${p.nome} ${p.marca} ${p.cat} ${p.comp || ""}`).includes(norm(state.q))));

  if (state.sort === "asc") list.sort((a, b) => a.preco - b.preco);
  if (state.sort === "desc") list.sort((a, b) => b.preco - a.preco);
  if (state.sort === "az") list.sort((a, b) => a.nome.localeCompare(b.nome));

  $("count").textContent = list.length + (list.length === 1 ? " peça encontrada" : " peças encontradas");

  $("grid").innerHTML = list.length ? list.map(p => `
    <article class="card">
      <img class="foto" src="${p.img}" alt="${p.nome}" width="200" height="150" loading="lazy"
           style="width:100%;height:150px;object-fit:contain;background:#fff">
      <div class="body">
        <h3>${p.nome}</h3>
        <div class="meta">${p.cat}${p.comp ? " · Serve em: " + p.comp : ""}</div>
        <div class="price">${brl(p.preco)}</div>
        <button class="add" data-add="${p.id}">Adicionar ao carrinho</button>
      </div>
    </article>`).join("")
    : `<div class="empty" style="grid-column:1/-1">Nenhuma peça encontrada. Tente outro nome ou limpe os filtros.</div>`;
}

function renderCart() {
  const ids = Object.keys(state.cart).filter(id => PRODUTOS.some(p => p.id == id));
  let total = 0, n = 0;

  $("items").innerHTML = ids.length ? ids.map(id => {
    const p = PRODUTOS.find(x => x.id == id), q = state.cart[id];
    total += p.preco * q; n += q;
    return `<div class="it">
      <strong>${p.nome}</strong><span>${brl(p.preco * q)}</span>
      <div class="qty">
        <button data-dec="${id}" aria-label="Diminuir">−</button>
        <span>${q}</span>
        <button data-inc="${id}" aria-label="Aumentar">+</button>
        <button class="rm" data-rm="${id}">Remover</button>
      </div></div>`;
  }).join("") : `<p class="empty" style="margin-top:20px">Seu carrinho está vazio. Adicione peças do catálogo.</p>`;

  $("total").textContent = brl(total);
  $("cnt").textContent = n;
  $("send").disabled = !ids.length;
  save();
}

function openCart(aberto) {
  $("cart").classList.toggle("open", aberto);
  $("shade").classList.toggle("open", aberto);
  $("cart").setAttribute("aria-hidden", !aberto);
  if (aberto) $("closeCart").focus();
}

function enviar() {
  const nome = $("nome").value.trim(), modelo = $("modelo").value.trim();
  if (!nome || !modelo) {
    $("msg").textContent = "Preencha seu nome e o modelo da moto para enviar.";
    return;
  }
  $("msg").textContent = "";

  let total = 0;
  const linhas = Object.keys(state.cart).map(id => {
    const p = PRODUTOS.find(x => x.id == id), q = state.cart[id];
    total += p.preco * q;
    return `• ${q}x ${p.nome} – ${brl(p.preco * q)}`;
  });

  const texto = `Olá, Adriano Moto Peças! Quero fazer um pedido.\n\nCliente: ${nome}\nMoto: ${modelo}\n\n${linhas.join("\n")}\n\nTotal: ${brl(total)}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
}

// ===== Eventos =====
document.addEventListener("click", e => {
  const t = e.target.closest("button");
  if (!t) return;
  const d = t.dataset;

  if (d.cat) {
    state.cat = d.cat;
    document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c.dataset.cat === state.cat));
    render();
  }
  if (d.add) {
    state.cart[d.add] = (state.cart[d.add] || 0) + 1;
    renderCart();
    t.textContent = "Adicionado ✓";
    setTimeout(() => t.textContent = "Adicionar ao carrinho", 900);
  }
  if (d.inc) { state.cart[d.inc]++; renderCart(); }
  if (d.dec) { state.cart[d.dec]--; if (state.cart[d.dec] <= 0) delete state.cart[d.dec]; renderCart(); }
  if (d.rm)  { delete state.cart[d.rm]; renderCart(); }
});

$("q").addEventListener("input", e => { state.q = e.target.value; render(); });
$("brand").addEventListener("change", e => { state.brand = e.target.value; render(); });
$("sort").addEventListener("change", e => { state.sort = e.target.value; render(); });
$("openCart").addEventListener("click", () => openCart(true));
$("closeCart").addEventListener("click", () => openCart(false));
$("shade").addEventListener("click", () => openCart(false));
$("send").addEventListener("click", enviar);
document.addEventListener("keydown", e => { if (e.key === "Escape") openCart(false); });

// Início
setup();
render();
renderCart();