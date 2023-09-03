import { catalago } from "./utilidades";
export function renderizarCatalago() {
  for (const produtoCatalago of catalago) {
    const cartaoProduto = `
<div class="border-solid border-2 border-sky-500 w-48 m-2 flex flex-col p-1 justify-between group" id="card-produto-${produtoCatalago.id}">
<img 
    src="./assets/img/${produtoCatalago.nomeArquivoImagem}" alt="${produtoCatalago.nome} HLB_Store" 
     class="hover:scale-110 duration-300 ">
    <p>${produtoCatalago.marca}</p>        
    <p>${produtoCatalago.nome}</p>
    <p class="precoP">$${produtoCatalago.preco}</p>
    <button class="border-4 border-black bg-black text-slate-200 p-1 hover:bg-white duration-300 hover:text-slate-950 " ><i class="fa-solid fa-cart-plus"></i></button>
</div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }
}
