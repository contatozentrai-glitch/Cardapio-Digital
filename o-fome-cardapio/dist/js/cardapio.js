/* Comportamento da interface. Para trocar produtos, edite produtos.js. */
(() => {
  'use strict';
  const { categorias, produtos } = window.CARDAPIO;
  const $ = (id) => document.getElementById(id);
  const moeda = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const normalizar = (texto) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const escapar = (texto) => String(texto).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const desenhos = {
    grid: '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/>',
    burger: '<path d="M4 10a8 7 0 0 1 16 0H4Zm-1 4h18M4 18h16l-1 3H5l-1-3Z"/><path d="M9 6h.01M14 5h.01"/>',
    pastel: '<path d="m3 17 9-13 9 13H3Zm0 0c3 5 15 5 18 0M8 15l4-6M12 15l3-4"/>',
    coffee: '<path d="M4 8h13v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm13 1h2a3 3 0 0 1 0 6h-2M7 2v3M12 2v3M3 22h15"/>',
    fries: '<path d="m4 10 2 12h12l2-12-5 2H9l-5-2ZM7 10V3h3v8M12 12V2h3v10M17 11V5h3v5"/>',
    drink: '<path d="m6 8 2 14h9l2-14H6Zm6 0 2-6h6M7 12h11"/>',
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>'
  };
  const icone = (nome) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${desenhos[nome]}</svg>`;
  let categoriaAtual = 'todos';
  let ultimoProduto = null;
  $('search-icon').innerHTML = icone('search');
  $('categories').innerHTML = categorias.map((categoria) => `<button class="category" type="button" data-category="${categoria.id}" aria-pressed="${categoria.id === 'todos'}">${icone(categoria.icone)}${escapar(categoria.nome)}</button>`).join('');

  function aplicarFoto(elemento, produto) {
    elemento.style.backgroundImage = `url("${produto.imagem}")`;
    elemento.style.backgroundPosition = produto.posicao || 'center';
    elemento.style.backgroundSize = produto.tamanho || 'cover';
  }

  function renderizar() {
    const termo = normalizar($('search').value);
    const encontrados = produtos.filter((p) => (categoriaAtual === 'todos' || p.categoria === categoriaAtual) && normalizar([p.nome, p.resumo, ...p.ingredientes].join(' ')).includes(termo));
    $('category-title').textContent = categorias.find((c) => c.id === categoriaAtual).titulo;
    $('result-count').textContent = `${encontrados.length} ${encontrados.length === 1 ? 'opção' : 'opções'}`;
    $('empty-state').hidden = encontrados.length > 0;
    $('products').innerHTML = encontrados.map((produto) => {
      const categoria = categorias.find((c) => c.id === produto.categoria);
      return `<button type="button" class="product-card" data-product="${escapar(produto.id)}" aria-label="Ver detalhes de ${escapar(produto.nome)}, ${moeda(produto.preco)}"><span class="card-photo" style="display:block"><span class="food-image" role="img" aria-label="${escapar(produto.nome)}"></span>${produto.selo ? `<span class="product-tag">${escapar(produto.selo)}</span>` : ''}</span><span class="card-content"><span class="card-category">${escapar(categoria.nome)}</span><span class="card-name">${escapar(produto.nome)}</span><span class="card-description">${escapar(produto.resumo)}</span><span class="card-bottom"><span class="price">${moeda(produto.preco)}</span><span class="details-link">Ver detalhes <i aria-hidden="true">↗</i></span></span></span></button>`;
    }).join('');
    $('products').querySelectorAll('.product-card').forEach((cartao, indice) => aplicarFoto(cartao.querySelector('.food-image'), encontrados[indice]));
  }

  $('categories').addEventListener('click', (evento) => {
    const botao = evento.target.closest('[data-category]');
    if (!botao) return;
    categoriaAtual = botao.dataset.category;
    $('categories').querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === botao)));
    renderizar();
  });
  $('search').addEventListener('input', renderizar);
  $('reset-search').addEventListener('click', () => {
    $('search').value = '';
    $('categories').querySelector('[data-category="todos"]').click();
    $('search').focus();
  });

  $('products').addEventListener('click', (evento) => {
    const cartao = evento.target.closest('[data-product]');
    if (!cartao) return;
    const produto = produtos.find((p) => p.id === cartao.dataset.product);
    ultimoProduto = cartao;
    $('detail-name').textContent = produto.nome;
    $('detail-category').textContent = categorias.find((c) => c.id === produto.categoria).nome;
    $('detail-description').textContent = produto.descricao;
    $('detail-price').textContent = moeda(produto.preco);
    $('detail-portion').textContent = produto.porcao;
    $('detail-ingredients').innerHTML = produto.ingredientes.map((ingrediente) => `<li>${escapar(ingrediente)}</li>`).join('');
    $('detail-allergens').textContent = produto.alergenos;
    aplicarFoto($('detail-photo'), produto);
    $('detail-photo').setAttribute('aria-label', produto.nome);
    $('product-dialog').showModal();
    $('product-dialog').scrollTop = 0;
    document.body.classList.add('modal-open');
    $('close-dialog').focus({ preventScroll: true });
  });
  const fechar = () => $('product-dialog').close();
  $('close-dialog').addEventListener('click', fechar);
  $('back-to-menu').addEventListener('click', fechar);
  $('product-dialog').addEventListener('click', (evento) => {
    if (evento.target !== $('product-dialog')) return;
    const retangulo = $('product-dialog').getBoundingClientRect();
    if (evento.clientX < retangulo.left || evento.clientX > retangulo.right || evento.clientY < retangulo.top || evento.clientY > retangulo.bottom) fechar();
  });
  $('product-dialog').addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    ultimoProduto?.focus({ preventScroll: true });
  });
  renderizar();
})();
