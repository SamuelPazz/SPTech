

    function analisar () {
        var qtdfilhos = inputFilhos.value;

        if (qtdfilhos >=1){
            divMostrar.innerHTML = `Não tem TV<br>`
        }
        if (qtdfilhos >=2){
            divMostrar.innerHTML = `Não tem TV<br>Não tem internet`
        }
        if (qtdfilhos >=3){
            divMostrar.innerHTML = `Não tem TV<br>Não tem internet<br>Não tem video game`

        }
        if (qtdfilhos >=4){
            divMostrar.innerHTML = `Não tem TV<br>Não tem internet<br>Não tem video game<br>Não tem Netflix`

        }
    }

