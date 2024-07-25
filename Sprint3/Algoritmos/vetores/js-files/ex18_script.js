
var listaMusicas = []

    function cadastrar(){
        var musica = iptMusica.value;
        listaMusicas.push(musica)
    }

    function exibir(){
        divExibir.innerHTML = ``
        for(var i = 0; i < listaMusicas.length; i++){
            divExibir.innerHTML += `${listaMusicas[i]}<br>`
        }
    }

    function filtrar(){
        divExibir.innerHTML = ``
        var comeco = Number(iptComeco.value);
        var fim = Number(iptFim.value);

        for(var i = comeco - 1; i < fim; i++){
            divExibir.innerHTML += `${listaMusicas[i]}<br>`
        }
    }

