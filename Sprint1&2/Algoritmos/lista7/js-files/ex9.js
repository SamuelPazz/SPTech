
    function analisar(){
        var marca = inputTv.value;
        var preco = Number(inputPreco.value);

        if(preco <800 || preco >2000){
            divMostrar.innerHTML=`TV fora da faixa de preço`
            if(preco <800){
               divMostrar.innerHTML+=`<br>Preço baixo demais!` 
            } else if(preco >2000){
                divMostrar.innerHTML+=`<br>TV cara demais, infelizmente`
            }
        } else if(marca == "Mondial" || marca == "Britânia"){
            divMostrar.innerHTML=`Na faixa de preço, porém marca não confiável`
        } else if(marca == "LG" || marca == "Samsung"){
            divMostrar.innerHTML=`Essa TV pode entrar na sua lista!`
        }
    }


