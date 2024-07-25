
    var choco = 0;
    var vrchocolate = 3.00;
    var total = 0;
    function calcChoco (){
        choco = inputChoco.value;
        if(choco >=13){
            vrchocolate = 2.50;
        }
        total = choco * vrchocolate;
        divMostrar.innerHTML =`o valor da sua compra foi de ${total}`;
    }

