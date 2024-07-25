
    listaPrecos = []
    function cadastrar(){
        var preco = Number(inputPreco.value);

        listaPrecos.push(preco)
    }

    function atualizar(){
        var texto = ``
        var total = 0;
        divMsg.innerHTML = ``
        for(var i = listaPrecos.length -1; i >=0; i--){
            
            total += listaPrecos[i]
            texto += `${listaPrecos[i]}<br>`
        }
        divMsg.innerHTML = `${texto} <br> Você tem ${listaPrecos.length} produtos cadastrados<br>Seu estoque vale R$${total}`
    }

