
function calcular(){
    var peso = inputPeso.value;

    if(peso <=13.5){
        divMostrar.innerHTML=`Abaixo do peso`
    } else if (peso == 18.3){
        divMostrar.innerHTML=`Peso perfeito`
    } else if (peso <=21.2){
        divMostrar.innerHTML=`Peso na média`
    } else if (peso >21.2){
        divMostrar.innerHTML=`Acima do peso`
    }
}