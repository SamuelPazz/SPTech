
    function pares (){
        var min = inputMin.value;
        var max = inputMax.value;
        var texto = "";
        for(var contador = min; contador >=min && contador <= max; contador++){
            var resto = contador % 2;
            if(resto == 0){
                texto += `${contador}<br>`
            }
        }
        divMostrar.innerHTML=`${texto}`
    }

