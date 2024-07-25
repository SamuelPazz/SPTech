
function descrever(){
    var time = inputTime.value;

    if (time == "São Paulo"){
        divMostrar.innerHTML=`<p style="background-color:black; color:red;">Salve o Tricolor paulista</p>`
    } else if(time == "Palmeiras"){
        divMostrar.innerHTML=`<p style="background-color:green; color:white;">Salve o alviverde imponente</p>`
    }  else if(time == "Corinthians" ){
        divMostrar.innerHTML=`<p style="background-color:black; color:white;">Salve o Corinthians</p>`
    }  else if(time == "Santos"){
        divMostrar.innerHTML=`<p style="background-color:white; color:black;">Agora quem dá a bola é o Santos</p>`
    } 
}