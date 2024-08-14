let TotalGeral ;
limpar () ;

function adicionar () {
  //Recuperar Valores Nome do Produto, quantidade e valor 
  let Produto = document.getElementById('produto').value ;
    NomeProduto = Produto.split('-')[0] ;
    ValorUnitario = Produto.split('R$') [1];
  let Quantidade = document.getElementById('quantidade').value ;
   if (Quantidade == 1-1 ){
    alert ('Insira a quantidade do prduto') ;
    return ;
   }
 
  //Calcular o preço, o nosso subtotal
  let Preco = ValorUnitario * Quantidade ;
 
  //Adicionar no carrinho 
  let Carrinho = document.getElementById('lista-produtos') ;
    Carrinho.innerHTML = Carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${Quantidade}x</span> ${Produto} <span class="texto-azul">R$${Preco}</span>
        </section>`
 
  //Atualizart o Valor Total
  TotalGeral = TotalGeral + Preco ;
    let CampoTotal = document.getElementById('valor-total') ;
    CampoTotal.textContent = `R$ ${TotalGeral}` ;
    document.getElementById('quantidade').value = 0 ;
}

function limpar () {
    TotalGeral = 0 ;
    document.getElementById('lista-produtos').innerHTML = ` `
    document.getElementById('valor-total').textContent = `R$0`
}