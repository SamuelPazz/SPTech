
    function curto (){
        var min = inputMin.value;
        var max = inputMax.value;
        var texto = "";
        for(var contador = min; contador <= max; contador++){
            
            var resto3 = contador % 3;
            var resto5 = contador % 5;
            if(resto3 == 0 && resto5 == 0){
                texto += `É TRI! & É PENTA!<br>`
            } else if(resto3 == 0){
                texto += `É TRI!<br>`
            } else if(resto5 == 0){
                texto+= `É PENTA!<br>`
            } else {
                texto += `${contador}<br>`
            }
        }
        divMostrar.innerHTML=`${texto}`
    }

