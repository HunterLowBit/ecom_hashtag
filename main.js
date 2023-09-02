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
}];


const cartaoProduto = `
<div id="card-produto-1">
<img 
    src="./assets/img/${catalago[0].nomeArquivoImagem}" alt="produto 1 HLB_Store" 
    style="height:200px">
    <p>${catalago[0].marca}</p>        
    <p>${catalago[0].nome}</p>
    <p>${catalago[0].preco}</p>
    <button>Adicionar</button>
</div>`;

document.getElementById("container-produto").innerHTML += cartaoProduto;
