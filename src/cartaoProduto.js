import { catalago } from "./utilidades";
export function renderizarCatalago() {
  for (const produtoCatalago of catalago) {
    const cartaoProduto = `
<div class="shadow-xl shadow-slate-400  rounded-lg w-48 m-2 flex flex-col p-1 justify-between group" id="card-produto-${produtoCatalago.id}">
<img 
    src="./assets/img/${produtoCatalago.nomeArquivoImagem}" alt="${produtoCatalago.nome} HLB_Store" 
     class="group-hover:scale-110 duration-300  my-3 rounded-lg">
    <p class='text-sm'>${produtoCatalago.marca}</p>        
    <p class='text-sm' '>${produtoCatalago.nome}</p>
    <p class='text-sm'>$${produtoCatalago.preco}</p>
    <button  class="border-4 border-black bg-black text-slate-200 p-1 hover:bg-white duration-300 hover:text-slate-950 " id='adicionar-${produtoCatalago.id}'><i class="fa-solid fa-cart-plus"></i></button>
</div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
    document.getElementById("adicionar-${produtoCatalago.id}");
  }
}
