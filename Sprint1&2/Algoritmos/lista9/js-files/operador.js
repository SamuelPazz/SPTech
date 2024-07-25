
    function pares (){
        var texto = "";
        for(var contador = 0; contador <=100; contador+=2){
            var resto = contador % 2;
            if(resto == 0){
                texto += `${contador}<br>`
            }
        }
        divMostrar.innerHTML=`${texto}`
    }

