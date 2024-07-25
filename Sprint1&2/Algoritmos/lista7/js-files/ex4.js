
    function analisar(){
        var forma = inputForma.value;

        if(forma == "Dinheiro" || forma == "Débito" || forma == "Crédito" || forma == "Boleto"){
            if(forma == "Dinheiro" || forma == "Débito"){
                divMostrar.innerHTML=`Você terá que pagar a vista`
            } else if(forma == "Crédito" || forma == "Boleto"){
                divMostrar.innerHTML=`Pagamento poderá ser parcelado`
            }
        } else alert(`Forma de pagamento não foi inserida ou é inválida, fique atento a letras Maiúsculas`)
    }

