
    var listaProdutos = []
    var listaPrecos = []
    var texto = ``
    
    function cadastrar(){
        var produto = inputProduto.value;
        var preco = Number(inputPreco.value);

        listaProdutos.push(produto)
        listaPrecos.push(preco)

    }

    function relatorio(){
        divMsg.innerHTML = ``
        divMsg.innerHTML += `Total de produtos: ${listaProdutos.length}<br><br>`
        
        var maiorpreco = listaPrecos[0]
        var menorpreco = listaPrecos[0]
        var produtoCaro = listaProdutos[0]
        var produtoBarato = listaProdutos[0]
        var valorvenda = 0;
        var soma = 0;
        var media = 0;

        for(var i = 0; i < listaProdutos.length; i++){
            
            valorvenda = listaPrecos[i] * 1.25;
            soma += listaPrecos[i]
            media = soma / listaPrecos.length
            
            if(listaPrecos[i] < menorpreco){
                menorpreco = listaPrecos[i]
                produtoBarato = listaProdutos[i]
            }

            if(listaPrecos[i] > maiorpreco){
                maiorpreco = listaPrecos[i]
                produtoCaro = listaProdutos[i]
            }

            texto +=`
            Produto ${i+1}: ${listaProdutos[i]}<br>
            Preço de compra:R$${listaPrecos[i]}. Vender por R$${valorvenda}<br>
            `
       } 
       divMsg.innerHTML = `
       Total de produtos:${listaProdutos.length}<br>
       O produto mais caro: ${produtoCaro}<br>
       O produto mais barato: ${produtoBarato}<br>
       A soma dos preços: ${soma}<br>
       A média dos preços: ${media}<br><br>
       ${texto}
       `
    }

