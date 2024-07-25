
    function calcluz(){
        var kwh = inputKWh.value;
        var valorluz = 0.85;
        var desconto = kwh * 0.10;
        var total = kwh * valorluz;
    
        if (kwh <100){
            total -= desconto
        }
        alert(`Valor da conta pendente:${total}`);
    }

