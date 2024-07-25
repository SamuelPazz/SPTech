

    function avaliar(){

        var temp = inputTemp.value;
        var umi = inputUmi.value;
        

        if(umi <0 || umi >100){
            divMostrar.innerHTML=""
            alert(`Valor de umidade inválido`)  
        } else if(temp >=22 && temp <=23 && umi <60){
            divMostrar.innerHTML=`Clima agradável`
        } else {
            divMostrar.innerHTML=`Clima desconfortável`
        }
    }

