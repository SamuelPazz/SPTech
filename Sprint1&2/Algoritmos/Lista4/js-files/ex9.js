
    var serie = '';
    var ep = 0;;

    function verificar(){
        var serie = inputSerie.value;
        var ep = Number(inputEp.value);
        var minEp = ep * 22;
        var horas = minEp / 60;
        
        divMostrar.innerHTML = `Vejo que você gosta da série ${serie}`

        if (horas > 30) {
            divMostrar.innerHTML += `Vejo que você gosta da série ${serie}. Uau, você realmente gosta dessa série!`
        } 
        
    } 

