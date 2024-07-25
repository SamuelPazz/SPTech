
    var listaProdutos = []
    var listaPrecos = []
    function cadastrar(){
        var produto = inputProduto.value;
        var preco = inputPreco.value

        listaProdutos.push(produto)
        listaPrecos.push(preco)
    }

    function relatorio(){

        divMsg.innerHTML = ``
        divMsg.innerHTML += `Total de produtos: ${listaProdutos.length}<br><br>`

        for(var i = 0; i < listaProdutos.length; i++){
            
            var valorvenda = listaPrecos[i] * 1.25;
            divMsg.innerHTML +=`
            Produto ${i+1}: ${listaProdutos[i]}<br>
            Preço de compra:R$${listaPrecos[i]}. Vender por R$${valorvenda}<br>
            `
       }
    }

