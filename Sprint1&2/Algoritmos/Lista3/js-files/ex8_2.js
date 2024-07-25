
    var valor = 0;
    var saldo = 0;

    function atualizarValor (){
        valor = Number(inputValor.value);
    }

    function receber(){
        atualizarValor()
        saldo += valor;
        divMostrar.innerHTML += `Depósito de R$ ${valor}  efetuado! Saldo atual: R$ ${saldo}<br>`

    }

    function pagar(){
        atualizarValor()
        saldo -= valor;
        divMostrar.innerHTML += `Retirada de R$ ${valor} efetuada! Saldo atual: R$ ${saldo}<br> `

    }



