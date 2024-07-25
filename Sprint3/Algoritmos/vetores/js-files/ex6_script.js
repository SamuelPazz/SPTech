
    var listaFilmes = [];
    var texto = ``
    function cadastrar(){
        var filme = inputFilmes.value;
        listaFilmes.push(filme)

        for(var i = 0; i < listaFilmes.length; i++){
            texto = `<br>${listaFilmes[i]}`
        }
        divMensagem.innerHTML += `${texto}`
    }    

