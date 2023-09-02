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
];

for (const produtoCatalago of catalago) {
  const cartaoProduto = `
<div id="card-produto-1">
<img 
    src="./assets/img/${produtoCatalago.nomeArquivoImagem}" alt="${produtoCatalago.nome}1 HLB_Store" 
    style="height:200px">
    <p>${produtoCatalago.marca}</p>        
    <p>${produtoCatalago.nome}</p>
    <p>$${produtoCatalago.preco}</p>
    <button>Adicionar</button>
</div>`;

  document.getElementById("container-produto").innerHTML += cartaoProduto;
};
