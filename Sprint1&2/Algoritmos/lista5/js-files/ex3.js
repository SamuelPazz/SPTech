function analisar(){
    var temp = inputTemp.value;

    if(temp <14){
        divMostrar.innerHTML=`Congelante`
    } else if (temp <=21){
        divMostrar.innerHTML=`Com Frio`
    } else if (temp <=24){
        divMostrar.innerHTML=`Confortável`
    } else if (temp <=31){
        divMostrar.innerHTML=`Com Calor`
    } else if (temp >31){
        divMostrar.innerHTML=`Calor escaldante`
    }
}