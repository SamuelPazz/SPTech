
    var texto = ``;
    function atazanar(){
        var elefantes = inputElefantes.value;
        var frase = `incomodam`;
        var fraseCompleta = ``;

            for(var contador = 2; contador <= elefantes; contador++){
                if(contador == 2){
                    fraseCompleta = `${frase}, `
                }
                fraseCompleta += `${frase}, `
                texto += `1 elefante incomoda muita gente!<br>${contador} elefantes, ${fraseCompleta}muito mais!<br>`
            }
            divMostrar.innerHTML=`${texto}`
    }

