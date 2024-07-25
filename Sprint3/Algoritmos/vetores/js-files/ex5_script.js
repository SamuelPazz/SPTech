
    var listaFilmes = [];
    function cadastrar(){
        var filme = inputFilmes.value;
        listaFilmes.push(filme)
    
        var favoritoFinal = listaFilmes.length - 1;
        divMensagem.innerHTML = ``
        divMensagem.innerHTML += `<br>Seu filme favorito: ${listaFilmes[0]}`

        if(listaFilmes[2]) {
            divMensagem.innerHTML += `<br>Seu 3º filme favorito:${listaFilmes[2]} `
        } else {
            divMensagem.innerHTML += `<br>Seu 3º Ainda não existe`
        }

        divMensagem.innerHTML += `<br>Total de filmes cadastrados:${listaFilmes.length}`
    }
    

