

    var listaDestino = []
    function adicionar(){
        var destino = inputDestino.value;
        listaDestino.push(destino)
    }

    function primeiraViagem(){
        var viagem1 = listaDestino[0]
        if(viagem1 < 0){
            divMensagem.innerHTML = `Ainda não viajou`
        } else {
            divMensagem.innerHTML = `Sua primeira viagem foi ${listaDestino[0]}`
        }
    }

    function terceiraViagem(){
        var viagem3 = listaDestino[2]
        if(viagem3 < 2){
            divMensagem.innerHTML = `Ainda fez a terceira viagem`
        } else {
            divMensagem.innerHTML = `Sua terceira viagem foi ${listaDestino[2]}`
        }
    }

    function ultimaViagem(){
        var viagemFinal = listaDestino.length - 1

        if(viagemFinal < 0){
            divMensagem.innerHTML = `Ainda não viajou`
        } else {
            divMensagem.innerHTML = `Sua ultima viagem foi ${listaDestino[viagemFinal]}`   
        }
    }

