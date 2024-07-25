var texto = "";
var limiteContador = 1;
function simular() {
    var conta = iptConta.value;
    var digito = iptDigito.value;
    var senha = iptSenha.value;
    var contaResto = conta % 10;
    var contaLogin = false;

    if (conta != 0 && digito == contaResto) {

        if (senha == 'manaus' && (digito >=0 && digito <=3)) {
            contaLogin = true;
        } else if (senha == 'recife' && (digito >= 4 && digito <= 7)) {
            contaLogin = true;
        } else if (senha == 'fortaleza' && digito >= 8) {
            contaLogin = true;
        } else {
            alert(`Um ou mais dados estão incorretos`)
        }

    } else  if(conta == 0 || digito != contaResto){
        alert(`A conta deve ser diferente de 0 e o digito deve ser o resultado da divisao da conta por 10`)
    }
    if(contaLogin == true){
            divConta.style.display = "none";
            divSimulacao.style.display = "block";
    }
   
}

function resultados() {
    var valorOperacao = iptValor.value;
    var operacao = selectOperacao.value;
    var prazo = selectPrazos.value;
    var emprestimoCurto = 0.24;
    var emprestimoMedio = 0.16;
    var emprestimoLongo = 0.10;
    var investimentoCurto = 0.05;
    var investimentoMedio = 0.08;
    var investimentoLongo = 0.12;
    var juros = 0;
           
    if (operacao == "Empréstimo") {

        if (prazo == "Curto") {
            alert(`Esta operação está condicionada ao seu perfil`)
            juros = valorOperacao * emprestimoCurto;
        } else if (prazo == "Médio") {
            alert(`Esta operação está condicionada ao seu perfil`)
            juros = valorOperacao * emprestimoMedio;
        } else if (prazo == "Longo") {
            juros = valorOperacao * emprestimoLongo;
        }

        

        for (var contador = 1; contador < limiteContador; contador++) {
            texto = `Simulação ${contador} - Para o empréstimo de R$${valorOperacao} no ${prazo} prazo será cobrado os juros de R$${juros} ao ano<br>`;
        }
        divResultados.innerHTML += `${texto}`;
    } else if (operacao == "Investimento") {

        if (prazo == "Curto") {
            alert(`Esta operação está condicionada ao seu perfil`)
            juros = valorOperacao * investimentoCurto;
        } else if (prazo == "Médio") {
            alert(`Esta operação está condicionada ao seu perfil`)
            juros = valorOperacao * investimentoMedio;
        } else if (prazo == "Longo") {
            juros = valorOperacao * investimentoLongo;
        }

        
        for (var contador = 1; contador < limiteContador; contador++) {
            texto = `Simulação ${contador} - Investindo R$${valorOperacao} no ${prazo} prazo será cobrado os juros de R$${juros} ao ano<br>`;
        }
        divResultados.innerHTML += `${texto}`;
    }
    limiteContador += 1;
    
    mostrarbotao()        
}

function voltar (){
    contador = 2;
    limiteContador = 2;
    texto = ``;
    divResultados.innerHTML = ``;
    buttonVoltar.style.display = "none";
}

function mostrarbotao(){
    buttonVoltar.style.display = "block"
}