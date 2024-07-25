

    function analisar(){

        var nota = Number(inputNota.value);
        var frequencia = Number(inputFre.value);

        if(nota <0 || nota >10){
            alert(`Onde já se viu nota <0 ou >10`)
            divMostrar.innerHTML=``
        } else if(nota >=0 && nota <6){
            divMostrar.innerHTML=`Aluno ficou abaixo da média`
        } else if(nota >=6 && nota <=8){
            divMostrar.innerHTML=`Aluno ficou na média`
        } else if(nota >8 && nota <=10){
            divMostrar.innerHTML=`Aluno acima da média`
        }

        if(frequencia <0 || frequencia >100){
            alert(`Onde já se viu frequência <0 ou >100?!`)
            divMostrar.innerHTML=``
        } else if (frequencia >=75){
            divMostrar.innerHTML+=`<br>Aluno aprovado por frequência`
        } else if(frequencia <75){
            divMostrar.innerHTML+=`<br>Aluno reprovado por frequência`
        }
    }

