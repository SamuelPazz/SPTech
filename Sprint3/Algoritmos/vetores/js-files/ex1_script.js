

    var listaFrutas = ['banana', 'morango', 'uva']

    function pesquisar(){
        var fruta = inputFruta.value;

        if(listaFrutas.indexOf(fruta) >= 0){
            divMensagem.innerHTML = `A fruta ${fruta} existe na lista`
        } else {
            divMensagem.innerHTML = `Não existe a fruta ${fruta} na lista`
        }
    }

