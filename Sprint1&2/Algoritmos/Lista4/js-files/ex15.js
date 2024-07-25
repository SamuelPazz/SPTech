
    
    function avaliar(){
        var idade = inputIdade.value;
        var nome = inputNome.value;

        if(idade >=18){
            divMostrar.innerHTML = `${nome}, vamos tirar a CNH?`
        } else{
            divMostrar.innerHTML = `${nome}, vai jogar PlayStation!`
        }
    }

