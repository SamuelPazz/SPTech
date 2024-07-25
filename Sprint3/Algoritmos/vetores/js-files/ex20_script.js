
    var listaProdutos = [];
    var listaPrecos = [];

    function cadastrar() {
        var produto = iptProduto.value;
        var preco = Number(iptPreco.value);

        if (preco >= 0 && produto.length >= 3) {
            listaProdutos.push(produto);
            listaPrecos.push(preco);
            divExibir.innerHTML = `Produto Cadastrado`;
        } else {
            divExibir.innerHTML = `Insira valores válidos`;
        }
    }

    function atualizar(){
        var texto = ``;
        var total = 0;

        for(var i = 0; i < listaProdutos.length; i++){
            texto += `${i+1}. ${listaProdutos[i]} - R$${listaPrecos[i]} <br>`;
            total += listaPrecos[i];
        }

        divExibir.innerHTML = `Você tem ${listaPrecos.length} itens cadastrados em estoque:<br>
        ${texto}<br>
        Seu estoque vale R$${total}`

    }

    function filtrar(){
        var filtro = selectFiltro.value;
        var valor = Number(iptValor.value);
        var texto2 = ``
        divExibir.innerHTML = ``

        if(filtro != "#"){
            for(var i = 0; i < listaProdutos.length; i++){                
                if(filtro == "Acima" && listaPrecos[i] > valor){
                    texto2 += `${i+1}. - ${listaProdutos[i]} - R$${listaPrecos[i]}<br>`
                } else if(filtro == "Abaixo" && listaPrecos[i] < valor) {
                    texto2 += `${i+1}. - ${listaProdutos[i]} - R$${listaPrecos[i]}<br>`
                }
            }
            divExibir.innerHTML = texto2
        }
    }

