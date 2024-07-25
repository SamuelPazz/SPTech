
    var listaFilmes = [];
    var texto = ``
    function cadastrar(){
        var filme = inputFilmes.value;
        listaFilmes.push(filme)

        for(var i = 0; i < listaFilmes.length; i++){

            if(i % 2 == 0){
                texto = `<br><span style="color: blue">${listaFilmes[i]}</span>`
            } else {
                texto = `<br><span style="color: red">${listaFilmes[i]}</span>`
            }
        }
        divMensagem.innerHTML += `${texto}`
    }    

