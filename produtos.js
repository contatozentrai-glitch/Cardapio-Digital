/* EDITE O CARDÁPIO AQUI. Preços em reais, usando ponto nos centavos.
   Para usar uma foto própria: imagem: 'minha-foto.jpg', posicao: 'center', tamanho: 'cover'.
   As fotos iniciais compartilham uma montagem com 3 colunas e 2 linhas. */
window.CARDAPIO = {
  categorias: [
    { id: 'todos', nome: 'Tudo de bom', titulo: 'Um pouco de tudo', icone: 'grid' },
    { id: 'hamburgueres', nome: 'Hambúrgueres', titulo: 'Entre dois pães, muita felicidade', icone: 'burger' },
    { id: 'pasteis', nome: 'Pastéis', titulo: 'Crocância que dá vontade', icone: 'pastel' },
    { id: 'cafes', nome: 'Cafés', titulo: 'Uma pausa bem quentinha', icone: 'coffee' },
    { id: 'acompanhamentos', nome: 'Acompanhamentos', titulo: 'Companhia boa é assim', icone: 'fries' },
    { id: 'bebidas', nome: 'Bebidas', titulo: 'Um gole de frescor', icone: 'drink' }
  ],
  produtos: [
    { id: 'duplo-da-casa', nome: 'Duplo da casa', categoria: 'hamburgueres', preco: 32.90, resumo: 'Dois smash, cheddar e aquele molho especial.', descricao: 'Duas camadas de sabor, queijo derretido e o toque do nosso molho. Um hambúrguer caprichado para quando a fome pede um pouco mais.', ingredientes: ['Pão brioche com gergelim', '2 smash bovinos de 80 g', 'Cheddar', 'Picles', 'Molho da casa'], porcao: '1 hambúrguer · 160 g de carne', alergenos: 'Contém glúten, leite, ovo e soja.', selo: 'Ô, que delícia!', imagem: 'cardapio.png', posicao: '0% 0%', tamanho: '300% 200%' },
    { id: 'pastel-queijo', nome: 'Pastel de queijo', categoria: 'pasteis', preco: 12.00, resumo: 'Casquinha crocante. Queijo que puxa. Só vem.', descricao: 'Douradinho por fora, generoso por dentro. A combinação simples que nunca perde a graça, com massa fina e muito queijo derretido.', ingredientes: ['Massa de pastel', 'Muçarela', 'Orégano'], porcao: '1 pastel · aproximadamente 150 g', alergenos: 'Contém glúten e leite.', selo: 'Crocância pura', imagem: 'cardapio.png', posicao: '50% 0%', tamanho: '300% 200%' },
    { id: 'cappuccino', nome: 'Cappuccino cremoso', categoria: 'cafes', preco: 10.90, resumo: 'Café, leite e uma pausa que abraça.', descricao: 'Espresso com leite vaporizado e uma espuma bem cremosa. Acompanhado de um biscoitinho para deixar a pausa ainda mais gostosa.', ingredientes: ['Café espresso', 'Leite integral vaporizado', 'Espuma de leite', 'Biscoito amanteigado'], porcao: '1 xícara · 180 ml', alergenos: 'Contém leite. O biscoito contém glúten e ovo.', selo: '', imagem: 'cardapio.png', posicao: '100% 0%', tamanho: '300% 200%' },
    { id: 'batata', nome: 'Batata douradinha', categoria: 'acompanhamentos', preco: 16.90, resumo: 'Sequinhas, douradas e difíceis de dividir.', descricao: 'Batatas fritas com casquinha crocante e interior macio, finalizadas com sal. Perfeitas para acompanhar seu hambúrguer ou beliscar sem pressa.', ingredientes: ['Batata', 'Óleo vegetal', 'Sal'], porcao: '1 porção · 200 g', alergenos: 'Consulte a equipe sobre contaminação cruzada.', selo: '', imagem: 'cardapio.png', posicao: '0% 100%', tamanho: '300% 200%' },
    { id: 'suco-laranja', nome: 'Laranjinha natural', categoria: 'bebidas', preco: 9.00, resumo: 'Um gole de sol para acompanhar seu dia.', descricao: 'Suco de laranja fresquinho servido com gelo. Leve, cítrico e refrescante do primeiro ao último gole.', ingredientes: ['Suco de laranja', 'Gelo'], porcao: '1 copo · 300 ml', alergenos: 'Consulte a equipe sobre contaminação cruzada.', selo: 'Pra refrescar', imagem: 'cardapio.png', posicao: '50% 100%', tamanho: '300% 200%' },
    { id: 'bacon', nome: 'Bacon sem miséria', categoria: 'hamburgueres', preco: 29.90, resumo: 'Bacon crocante e cheddar. De respeito.', descricao: 'Um clássico com atitude: hambúrguer bovino, tiras de bacon e cheddar derretido, com alface e tomate para completar cada mordida.', ingredientes: ['Pão brioche com gergelim', 'Hambúrguer bovino de 120 g', 'Bacon', 'Cheddar', 'Alface', 'Tomate', 'Maionese'], porcao: '1 hambúrguer · 120 g de carne', alergenos: 'Contém glúten, leite, ovo e soja.', selo: '', imagem: 'cardapio.png', posicao: '100% 100%', tamanho: '300% 200%' }
  ]
};
