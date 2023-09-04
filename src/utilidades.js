export const catalogo = [
  {
    id: "1",
    marca: "Xbox",
    nome: "Xbox Series X",
    preco: 3500,
    imagem: "product-1.jpg",
    feminino: false,
  },
  {
    id: "2",
    marca: "Xbox",
    nome: "Xbox Series S - Branco/Preto",
    preco: 1650,
    imagem: "product-2.jpg",
    feminino: false,
  },
  {
    id: "3",
    marca: "Xbox",
    nome: "Controle Sem Fio – Stormcloud Vapor Special Edition",
    preco: 250,
    imagem: "product-3.jpg",
    feminino: false,
  },
  {
    id: "4",
    marca: "Xbox",
    nome: "Headset Sem Fio Xbox",
    preco: 600,
    imagem: "product-4.jpg",
    feminino: false,
  },
  {
    id: "5",
    marca: "Sony",
    nome: "DualSense Edge",
    preco: 850,
    imagem: "product-5.jpg",
    feminino: true,
  },
  {
    id: "6",
    marca: "Sony",
    nome: "Headset sem fio PULSE 3D™",
    preco: 450,
    imagem: "product-6.jpg",
    feminino: true,
  },
  {
    id: "7",
    marca: "Sony",
    nome: "PlayStation 5",
    preco: 3500,
    imagem: "product-7.jpg",
    feminino: true,
  },
  {
    id: "8",
    marca: "Sony",
    nome: "PlayStation VR2",
    preco: 3600,
    imagem: "product-8.jpg",
    feminino: true,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article"); 
  const articleClasses = [
    "flex",
    "bg-stone-200",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }
  

  const cartaoProdutoCarrinho = `
    <img
      src="./assets/img/${produto.imagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">
        ${produto.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
    </div>`;
  

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}

