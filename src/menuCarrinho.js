function abrirCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[360px]");
  document.getElementById("carrinho").classList.add("right-[0px]");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

export function adicionarAoCarrinho() {
    const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
  
const cartaoProdutoCarrinho = `<article class="flex bg-purple-950 rounded-lg relative">
        <button id="remover-produto"><i class=" absolute top-0 right-0 fa-solid fa-circle-xmark p-1 hover:text-red-700 hover:text-xl"></i></button>
        <img src="./assets/img/product-1.jpg" alt="Blusa" class="h-24 rounded-lg p-1">
        <div class="py-2 px-5">
          <p class="text-gray-50 text-sm">Blusa </p>
          <p class="text-gray-300 text-xs">Tamanho: M</p>
          <p class="text-green-500 text-lg">$70 </p>
        </div>
      </article>`;

      containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}
