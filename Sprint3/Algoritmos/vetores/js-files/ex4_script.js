
    var listaFilmes = [];
    function cadastrar(){
        var filme = inputFilmes.value;
        listaFilmes.push(filme)
    }

    function ver(){
        var favoritoFinal = listaFilmes.length - 1;

        divMensagem.innerHTML = `
        ${listaFilmes}<br><br>
        Total = ${listaFilmes.length}<br>
        O filme que você mais gosta é ${listaFilmes[0]}<br>
        E desses, o que você menos gosta é ${listaFilmes[favoritoFinal]}
        `
    }
    

