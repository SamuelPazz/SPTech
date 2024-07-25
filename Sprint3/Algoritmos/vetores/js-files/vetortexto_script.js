

    function exibir(){
        var frase = input_frase.value;
        var tamanho_frase = frase.length;

        if(tamanho_frase >= 5){
            div_mensagem.innerHTML = ``
            for(var index = 0; index < tamanho_frase; index++){
                var letra_atual = frase [index]
                div_mensagem.innerHTML += `${ letra_atual } <br>`
            }
            
        } else {
            alert(`Deve ter ao menos 5 letras`)
        }
    }

