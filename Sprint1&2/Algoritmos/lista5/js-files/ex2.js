function analisar(){
    var renda = inputRenda.value;

    if(renda <=250){
        divExibir.innerHTML=`Classe E`
    } else if (renda <=900){
        divExibir.innerHTML=`Classe D`
    } else if(renda <=2500){
        divExibir.innerHTML=`Classe C`
    } else if (renda <= 9500){
        divExibir.innerHTML=`Classe B`
    } else if (renda >9500){
        divExibir.innerHTML=`Classe A`
    }
    // OU else  divExibir.innerHTML=`Classe A`

}