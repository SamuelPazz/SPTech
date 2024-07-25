
    var listaBairro = []
    var bairro;
    function cadastrar(){
        bairro = inputBairro.value;
        listaBairro.push(bairro)
    }

    function relembrar(){    
        var num = Number(inputNum.value);
        var qtdBairro = listaBairro.length;
        var numBairro = listaBairro[num -1]

        if(num > listaBairro.length){
            divMensagem.innerHTML = `Você ainda não morou num ${num}º bairro!`
        } else {
            divMensagem.innerHTML = `bairro ${num} = ${numBairro}`
        }

      
    }
    

