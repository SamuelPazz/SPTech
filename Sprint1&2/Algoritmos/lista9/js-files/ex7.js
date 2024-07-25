
    var texto = ""
    function adoro(){
        var num = inputNum.value;
        if(num >=20 && num <=100){

            for(var contador = 0; contador <= num; contador+=5){
                texto+= `${contador}<br>`
            }
            divMostrar.innerHTML=`${texto}`
        }
    }

