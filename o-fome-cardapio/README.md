# Ô, Fome! — seu cardápio digital

Um cardápio com categorias, pesquisa e detalhes ampliados de cada produto. Feito em HTML, CSS e JavaScript puro, sem bibliotecas ou instalação de dependências.

## Como abrir

Dê dois cliques em **index.html**. O cardápio funciona diretamente no navegador. Se preferir um servidor local, abra o terminal nesta pasta, execute `node servidor.cjs` e acesse http://127.0.0.1:4180.

## Onde mexer em cada coisa

| Arquivo ou pasta | Para que serve |
| --- | --- |
| `index.html` | Nome da marca, textos da página e estrutura |
| `js/produtos.js` | **Produtos, preços, descrições, ingredientes, fotos e categorias** |
| `css/estilos.css` | Cores, fontes, tamanhos e aparência no celular |
| `js/cardapio.js` | Busca, filtros e abertura dos detalhes |
| `assets/` | Imagens e ícone da aba |
| `servidor.cjs` | Servidor opcional para visualizar localmente |
| `preparar.cjs` | Prepara uma cópia do site para publicação |
| `.openai/hosting.json` | Identificação e configuração da hospedagem Sites |
| `dist/` | Cópia gerada para publicação; não edite diretamente |

## Trocar produtos e preços

Abra `js/produtos.js`. Cada produto é um bloco com campos em português. Por exemplo, `preco: 32.90` aparece automaticamente como **R$ 32,90**. Edite `nome`, `resumo`, `descricao`, `ingredientes`, `porcao` e `alergenos` conforme seu cardápio real.

Para adicionar um produto, copie um bloco completo dentro da lista `produtos`, separando os blocos com vírgula. Use um `id` único e uma `categoria` existente: `hamburgueres`, `pasteis`, `cafes`, `acompanhamentos` ou `bebidas`. A lista `categorias` no mesmo arquivo permite mudar os nomes e títulos dos filtros.

## Trocar as fotos

1. Coloque sua foto em `assets/`, por exemplo `meu-pastel.jpg`.
2. No produto, troque os três campos por:

```js
imagem: 'assets/meu-pastel.jpg',
posicao: 'center',
tamanho: 'cover'
```

Prefira fotos quadradas com o alimento centralizado. As fotos iniciais são uma montagem única em `assets/cardapio.png`, com seis posições. Por isso usam `tamanho: '300% 200%'`; troque para `cover` quando usar uma foto individual. A imagem da abertura é configurada na classe `.hero-photo`, em `css/estilos.css`.

## Trocar marca, cores e fontes

O nome Ô, Fome! é uma marca fictícia criada para esta demonstração. Troque o título, o logotipo em texto e as chamadas em `index.html`. As cores estão nas variáveis `:root` no começo de `css/estilos.css`. Os comentários numerados separam abertura, produtos, rodapé, janela de detalhes e celular. As fontes Outfit e DM Sans carregam pelo Google Fonts; sem internet, o navegador usa fontes locais alternativas.

## Funcionalidades

- Filtro por categoria e busca por nome, descrição curta ou ingredientes, ignorando acentos.
- Produto clicável inteiro; janela com foto, preço, porção e ingredientes.
- Fechamento por botão, clique fora ou tecla Escape; foco devolvido ao produto.
- Layout adaptado para celular, tablet e computador, com navegação por teclado e respeito à preferência por movimento reduzido.
- Estado vazio com botão para limpar a busca e voltar a todos os produtos.
- Faixa de frases com movimento contínuo, sem símbolos decorativos de flor. Para ajustar a velocidade, altere `26s` na classe `.ribbon-track` do CSS. A animação pausa ao passar o mouse e é desativada quando o dispositivo prefere movimento reduzido.

Este projeto apresenta o cardápio. Não envia pedidos nem processa pagamentos. Produtos, preços, porções, ingredientes e informações de alergênicos são exemplos: revise-os conforme sua operação. As imagens são ilustrativas, geradas por IA; confira fotos reais e receitas antes de usar comercialmente.

## Preparar para publicação

Execute `node preparar.cjs`. Os arquivos prontos estarão em `dist/`. Sempre edite os arquivos originais e gere a pasta novamente depois das mudanças. Não é necessário executar npm install.

## Origem das imagens

`assets/cardapio.png` foi criada pela ferramenta integrada ImageGen. O prompt completo está em `PROMPT-IMAGEM.md`. Ícones simples e favicon são SVG locais. Não há dependências de fotos externas.
