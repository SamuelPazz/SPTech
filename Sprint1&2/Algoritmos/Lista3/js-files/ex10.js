
    var votosA = 0;
    var votosB = 0;
    var brancos = 0;
    var nulos = 0;

    function resultados(){
        votosA = Number(inputVotosA.value);
        votosB = Number(inputVotosB.value);
        brancos = Number(inputBrancos.value);
        nulos = Number(inputNulos.value);
        var invalidos = brancos + nulos;
        var total = votosA + votosB + brancos + nulos;
        var porcentagemA = (votosA / 100 ) * total;
        var porcentagemB = (votosB / 100) * total;
        var porcentagemI = (brancos + nulos) / 100 * total;
        
        divMostrar.innerHTML = `O total de votos é ${total}<br>
        Votos Candidato A: ${votosA} Votos ${porcentagemA}% dos votos<br>
        Votos Candidato B: ${votosB} Votos ${porcentagemB}% dos votos<br>
        Votos inválidos: ${invalidos} Votos ${porcentagemI}% dos votos`
    }



