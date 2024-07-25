
    function contar(){
        var texto = ""
        for (var contador = 1; contador <= 15; contador++) {
            texto += `${contador}<br>`
        }
        divMensagem.innerHTML = `${texto}`;
    }

