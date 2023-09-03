// const nomeProduto = "Casaco Branco";
// const marca = "Zara";
// const preco = 70;
// const nomeArquivoImagem = "produto-1"
// console.log(nomeProduto); // Casaco Branco
// console.log(marca);
// alert ("asd test");

const catalago = [
  {
    id: 1,
    nome: "Casaco Branco",
    marca: "Zara",
    preco: 70,
    nomeArquivoImagem: "product-1.jpg",
  },
  {
    id: 2,
    nome: "Sobretudo Azul",
    marca: "Zara",
    preco: 110,
    nomeArquivoImagem: "product-2.jpg",
  },
  {
    id: 3,
    nome: "Casaco Marrom",
    marca: "Zara",
    preco: 200,
    nomeArquivoImagem: "product-3.jpg",
  },
  {
    id: 4,
    nome: "blazer",
    marca: "Zara",
    preco: 150,
    nomeArquivoImagem: "product-4.jpg",
  },
  {
    id: 5,
    nome: "Jaqueta Jeans",
    marca: "Zara",
    preco: 110,
    nomeArquivoImagem: "product-5.jpg",
  },
];

for (const produtoCatalago of catalago) {
  const cartaoProduto = `
<div class="border-solid border-2 border-sky-500 w-48 m-2" id="card-produto-${produtoCatalago.id}">
<img 
    src="./assets/img/${produtoCatalago.nomeArquivoImagem}" alt="${produtoCatalago.nome} HLB_Store" 
    style="height:300px">
    <p>${produtoCatalago.marca}</p>        
    <p>${produtoCatalago.nome}</p>
    <p class="precoP">$${produtoCatalago.preco}</p>
    <button>Adicionar</button>
</div>`;

  document.getElementById("container-produto").innerHTML += cartaoProduto;
}
