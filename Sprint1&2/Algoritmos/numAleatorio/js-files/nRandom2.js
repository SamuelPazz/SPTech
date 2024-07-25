
    var texto = ``
    function gerar(){
        var aleatorio = Math.random()
        divMensagem.innerHTML = `Sorteado ${aleatorio}`;
    }

    
    function gerar_0_10(){
        var aleatorio = Math.random()
        var novo_aleatorio = aleatorio * 10;
        divMensagem.innerHTML = `Sorteado ${aleatorio} Novo: ${novo_aleatorio}`;
    }
    
    function gerar_5_20(){
        var aleatorio = Math.random()
        var novo_aleatorio = aleatorio * 15 + 5;
        divMensagem.innerHTML = `Sorteado ${aleatorio} Novo: ${novo_aleatorio}`;
    }

    
    function gerar_24_49(){
        var min = 24;
        var max = 49;
        var intervalo = max - min;
        var aleatorio = Math.random()
        var novo_aleatorio = aleatorio * intervalo + min
        divMensagem.innerHTML = `Sorteado ${aleatorio} Novo: ${novo_aleatorio}`;
    }

    function gerar_m50_50(){
        var min = -50;
        var max = 50;
        var intervalo = max - min;
        var aleatorio = Math.random()
        var novo_aleatorio = aleatorio * intervalo + min
        var decimal_2 = novo_aleatorio.toFixed(2)
        var inteiro = novo_aleatorio.toFixed(0);

        divMensagem.innerHTML = `
        <br>Sorteado ${aleatorio}
        <br>Novo: ${novo_aleatorio}
        <br>Decima 2: ${decimal_2}
        <br>Inteiro ${inteiro}`
    }

    function sortear3(){
        var aleatorio = (Math.random() * 4 + 1).toFixed(0);

        for(var cont = 1; aleatorio != 3; conta ++){
            var aleatorio = (Math.random() * 4 + 1).toFixed(0);
            
            texto += `${aleatorio}`
        }
        divMensagem.innerHTML = `${texto}`

    }


