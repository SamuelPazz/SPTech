
    var texto = ""
    function papagaio(){
        var num = inputNum.value;
        var frase = inputFrase.value;
        
            for(var contador = 1; contador <= num; contador++){
                texto += `${frase} `;
            }
            for(var contador = 1; contador <= num; contador++){
                alert(`${contador} - ${texto}`);
            }
    }

