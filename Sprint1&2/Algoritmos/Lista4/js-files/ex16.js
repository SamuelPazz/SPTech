
    var saldo = 0;
    var debito = 0;
    function analisar(){
        saldo = inputSaldo.value;
        debito = inputDebito.value;
        saldo -= debito

        if (saldo <0){
            divMostrar.innerHTML = `<span style="color:#ff0000; font-weight:bold">o saldo atual da conta corrente é ${saldo}`
        } else {
            divMostrar.innerHTML = `<span style="color:#0000ff; font-style: italic;">o saldo atual da conta corrente é ${saldo}`
        }
    }

