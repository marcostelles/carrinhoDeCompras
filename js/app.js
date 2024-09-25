
let valorTotalCarrinho = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = `R$ 0`;

function adicionar(){
  //coletar item da lista de compras

  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];
  let quantidade = document.getElementById('quantidade').value;
  let valorTotal = valorUnitario * quantidade;

  if (quantidade == null || quantidade == 0){
    alert('Quantidade deve ser informada!');
  } else {
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotal}</span>
          </section>`;
    
    valorTotalCarrinho = valorTotalCarrinho + valorTotal;

    let tagValorTotal = document.getElementById('valor-total');

    tagValorTotal.textContent = `R$ ${valorTotalCarrinho}`;
 
    let quantidadeLimpar = document.getElementById('quantidade').value = 0;


  }

}


function limpar(){
    valorTotalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$ 0`;
}