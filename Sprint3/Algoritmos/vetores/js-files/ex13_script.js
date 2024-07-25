
    var listaResultados = []
    function registrar(){
        var resultado = selectResultado.value;
        listaResultados.push(resultado)
        var vitorias = 0;
        var empates = 0;
        var derrotas = 0;
        var pontos = 0;
        divMsg.innerHTML = ``
        for(var i = 0; i < listaResultados.length; i++){
            if(listaResultados[i] == "Vitória"){
                vitorias++
                pontos +=3
            } else if(listaResultados[i] == "Empate"){
                empates++
                pontos ++
            } else if(listaResultados[i] == "Derrota"){
                derrotas++
            }
        }
        var aproveitamento = (pontos / (listaResultados.length * 3)) * 100
        divMsg.innerHTML = `
        O time teve: ${vitorias} vitórias, ${empates} empates, ${derrotas} derrotas<br>
        Pontuação total: ${pontos}pontos<br>
        Aproveitamento: ${aproveitamento}%<br>`
    }

    function pesquisar(){
        var pesquisa = Number(inputPesquisa.value);
        divPesquisa.innerHTML = ``
        if(pesquisa <= listaResultados.length){
            if(listaResultados[pesquisa-1]){
                divPesquisa.innerHTML += `No ${pesquisa} jogo, o time`
            }
            if(listaResultados[pesquisa-1] == "Vitória"){
                divPesquisa.innerHTML += ` Ganhou`
            } else if(listaResultados[pesquisa-1] == "Empate"){
                divPesquisa.innerHTML += ` Empatou`
            } else if(listaResultados[pesquisa-1] == "Derrota"){
                divPesquisa.innerHTML += ` Perdeu`
            }
        } else {
            divPesquisa.innerHTML = `Não foi cadastrado um ${pesquisa}º jogo`
        }
    }

