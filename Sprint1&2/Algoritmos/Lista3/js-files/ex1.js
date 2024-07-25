
    

    function ApHomem(){
        var idade = Number(InputIdade.value);
        var aposentadoriaH = Number(70);
        var calcular = aposentadoriaH - idade;
        alert('Você é homem e têm ' + idade + ' anos de idade, falta ' + calcular + ' anos para você se aposentar.')
    }

    function ApMulher(){
        var idade = Number(InputIdade.value)
        var aposentadoriaM = Number(60);
        var calcular = aposentadoriaM - idade;
        alert('Você é mulher e têm ' + idade + ' anos de idade, falta ' + calcular + ' anos para você se aposentar.')
    }


