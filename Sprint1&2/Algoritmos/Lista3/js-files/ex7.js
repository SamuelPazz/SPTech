
    var saldo = 0;
    
    function receber() {
        saldo += 100;
        alert('Transferência de R$100 Recebida! Saldo atual: R$' + saldo);
    }

    function pagar(){
        saldo -= 50;
        alert('Pagamento de R$50 efetuado! Saldo Atual: R$' + saldo);
    }

