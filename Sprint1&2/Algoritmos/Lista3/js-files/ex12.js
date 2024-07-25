
    var valorPizza = 0;
    var qtdPessoas = 0;
    var total = 0;
    var Caixinha = 0;
    var saborPizza = '';
    var divisao = 0;

    function valorfinal(){
        saborPizza = inputSabor.value;
        qtdPessoas = Number(inputPessoas.value);
        valorPizza = Number(inputPizza.value);

        Caixinha = valorPizza * 0.10;
        total = valorPizza + Caixinha;
        divisao = total / qtdPessoas
     
        divMostrar.innerHTML = `Valor total: ${total} cada amigo vai colaborar com R$ ${divisao} para a pizza de ${saborPizza}`;
    }


