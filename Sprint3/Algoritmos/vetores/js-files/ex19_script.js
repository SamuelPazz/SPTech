
var listaFilmes = []

    function cadastrar(){
        var filme = iptFilme.value;
        divExibir.innerHTML = ``
        listaFilmes.push(filme)
        divExibir.innerHTML = `Você já assistiu ${listaFilmes.length} filmes`
    }

    function listar(){
        divExibir.innerHTML = ``
        for(var i = listaFilmes.length -1; i >= 0; i--){
            divExibir.innerHTML += `${listaFilmes[i]}<br>`
        }
    }

    function filtrar(){
        divExibir.innerHTML = ``
        var min = Number(iptMin.value);
        var max = Number(iptMax.value);

        for(var i = max - 1; i >= min - 1; i--){
            divExibir.innerHTML += `${listaFilmes[i]}<br>`
        }
    }

