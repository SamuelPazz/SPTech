
    var texto = ``;
    function contar(){
        var min = Number(iptMin.value);
        var max = Number(iptMax.value);
        var num = Number(iptNum.value);
        
        if(min > 1 && (max < 100 && max > min) && num >=3 && num <= 10){

            for(var contador = min; min <= max; contador++){

                if(contador % num == 0){
                    texto += `${contador}`
                }
            }





            
        } else {
            if(min <=1){
                alert(`Limite inferior invalido, deve ser maior que 1 `)
            } else if(max >=100){
                alert(`Limite superior invalido, deve ser menor que 100 e maior que o inferior`)
            } else if(max < min){
                alert(`Limite superior menor que o inferior`)
            } else if(num <3 || num >10){
                alert(`Número de divisibilidade está invalido, deve estar entre 3 e 10`)
            }
        }
    }

