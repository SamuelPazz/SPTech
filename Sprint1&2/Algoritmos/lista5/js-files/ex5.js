function classificar (){
    var nota = inputNota.value;

    if(nota <5){
        divMostrar.innerHTML=`Aluno precisa de muita ajuda`
    } else if(nota <=7){
        divMostrar.innerHTML=`Aluno na média`
    } else if (nota <=9.5){
        divMostrar.innerHTML=`Aluno na acima da média`
    } else if (nota >9.5){
        divMostrar.innerHTML=`Aluno fora da curva`
    }
}