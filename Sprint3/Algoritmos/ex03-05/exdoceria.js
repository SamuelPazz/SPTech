function verificar(){
    var quantidadeMacaron = Number(iptMacarons.value);
    var quantidadeBrigadeiro = Number(iptBrigadeiros.value);
    var quantidadeCupcake = Number(iptCupcakes.value);
    var quantidadeCheesecake = Number(iptCheesecakes.value);
    var valorMacaron = Number(iptValorMacarons.value);
    var valorBrigadeiro = Number(iptValorBrigadeiros.value);
    var valorCupcake = Number(iptValorCupcakes.value);
    var valorCheesecake = Number(iptValorCheesecakes.value);

    var total = (quantidadeMacaron * valorMacaron) + (quantidadeBrigadeiro * valorBrigadeiro) + (quantidadeCupcake * valorCupcake) + (quantidadeCheesecake * valorCheesecake)

    var qtdDoces = quantidadeBrigadeiro + quantidadeCheesecake + quantidadeCupcake + quantidadeMacaron

    var imgMacaron = `<img src="https://static.vecteezy.com/system/resources/previews/026/757/722/original/macaron-with-ai-generated-free-png.png" width="50px">`

    var imgBrigadeiro = `<img src="https://i.pinimg.com/originals/0e/ec/36/0eec36fcebed486925bad71eafbe9fb4.png" width="50px">`

    var imgCupcake = `<img src="https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-cupcake-png-with-ai-generated-png-image_11571382.png" width="50px">`

    var imgCheesecake = `<img src="https://static.vecteezy.com/system/resources/previews/025/064/843/original/cheesecake-with-ai-generated-free-png.png" width="50px">`


    if(quantidadeBrigadeiro >=0 && quantidadeCheesecake >=0 &&  quantidadeCupcake >=0 && quantidadeMacaron >=0 && valorBrigadeiro >=0 && valorCheesecake >=0 && valorCupcake >=0 && valorMacaron){

        divMsg.innerHTML = ``

        var contMacaron = quantidadeMacaron
        var contBrigadeiro = quantidadeBrigadeiro
        var contCupcake = quantidadeCupcake
        var contCheesecake = quantidadeCheesecake
        for(var i = 1; i <= qtdDoces; i++){

            if(contMacaron !=0){
                divMsg.innerHTML += `<br>Venda ${i} - ${imgMacaron} - R$${valorMacaron} ` 
                contMacaron --
            } else if(contBrigadeiro !=0){
                divMsg.innerHTML += `<br>Venda ${i} - ${imgBrigadeiro} - R$${valorBrigadeiro} ` 
                contBrigadeiro --
            } else if(contCupcake !=0){
                divMsg.innerHTML += `<br>Venda ${i} - ${imgCupcake} - R$${valorCupcake} ` 
                contCupcake --
            } else if(contCheesecake !=0){
                divMsg.innerHTML += `<br>Venda ${i} - ${imgCheesecake} - R$${valorCheesecake} ` 
                contCheesecake --
            }
        }

        divMsg.innerHTML += `<br>Com a quantidade de ${quantidadeMacaron} Macarons, ${quantidadeBrigadeiro} Brigadeiros, ${quantidadeCupcake} Cupcakes e ${quantidadeCheesecake} Cheesecakes, a venda totalizará R$${total}`

    } else {
        divMsg.innerHTML = `<span style="color: red">Há um ou mais campos com valores negativos, insira 0 ou valores maiores</span>`
    }
}