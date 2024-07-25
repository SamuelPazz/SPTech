
    function verificar() {
        var saldo = Number(inputSaldo.value);

        if (saldo == 0) {
            divMostrar.innerHTML = `<span style="color:#000000;"> Conta zerada</span>`
        }
        if (saldo < 0) {
            divMostrar.innerHTML = `<span style="color:#ff0000;"> Está devendo!</span>`
        }
        if (saldo > 0) {
            divMostrar.innerHTML = `<span style="color:#0000ff;"> Saldo positivo! sorriso</span>`
        }

    }

