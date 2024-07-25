

    function analisar(){

        var altura = Number(inputAltura.value);
        var cor = selectCor.value;

        if(altura <1.85 && (cor == "3" || cor == "4")){
            divMostrar.innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQleyQ9fi_xDgcBFdD1IxoA9PU_gPCt8ugsIQ&usqp=CAU">`
        } else divMostrar.innerHTML=`<img src="https://images.vexels.com/media/users/3/208461/isolated/preview/d5c9b514b4a2e863a64ec7e97be4266d-personagem-de-homem-triste.png">`
    }

