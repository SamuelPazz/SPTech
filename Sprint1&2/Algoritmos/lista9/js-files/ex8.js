
    var texto = ""
    function adoro(){
        var num = inputNum.value;
        if(num >=0 && num <=200){

            for(var contador = 0; contador <= num; contador+=7){
                texto+= `${contador}<br>`
            }
            divMostrar.innerHTML=`${texto}`
        }
    }

