
    var valor = 0;
    var total = 0;

    function atualizarValor(){
        valor = Number(inputvalor.value)
    }

    function depositar (){
        atualizarValor()
        total += valor
        alert('Depósito de R$' + valor + ' efetuado! Saldo atual: R$' + total)
    }

    function retirar(){
        atualizarValor()
        total -= valor
        alert('Retirada de R$' + valor + ' efetuada! Saldo atual: R$ '+ total)
    }

 


