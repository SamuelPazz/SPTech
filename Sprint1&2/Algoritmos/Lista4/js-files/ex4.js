
    function calc(){
        var vPizza = inputVPizza.value;
        var amigos = inputAmigos.value;
        var dividir = vPizza / amigos;
        divMostrar.innerHTML = `Cada amigo vai pagar R$${dividir} pela pizza`

        if(dividir > 20){
            divMostrar.innerHTML = `Deu ruim! Pizza muito cara!`
        }
    }

