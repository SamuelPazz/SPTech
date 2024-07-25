
    var saldo = 0;
    var debito = 0;

    function analisarConta(){
        var saldo = inputSaldo.value;
        var debito = inputDebito.value;
        saldo -= debito

        if (saldo < 0) {
            // divMostrar.style.color = '#ff0000'
            // divMostrar.style.fontWeight = 'bold'
            divMostrar.innerHTML = `<span style = "color:#ff0000; font-weight:bold;">O saldo atual da conta corrente é ${saldo}</span>`
        } else {
            divMostrar.innerHTML = `O saldo atual da conta corrente é ${saldo}`
        }
       
    }


