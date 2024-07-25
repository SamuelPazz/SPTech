

    function verificar(){
        nota1 = Number(inputNota1.value);
        nota2 = Number(inputNota2.value);
        media = (nota1 + nota2) / 2;

        if(media >=6){
            alert(`Parabéns, aprovado!`)
        }
        if(media <6){
            alert(`Tente outra vez...`)
        }
    }

