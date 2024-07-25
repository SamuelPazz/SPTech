

    function beneficio(){

        var renda = Number(inputRenda.value);
        var rFamilia = Number(inputRFamilia.value);

        if(renda <=2000 || rFamilia <=3000){
            divMostrar.innerHTML=`Você terá direito ao auxílio`
        } else divMostrar.innerHTML=`Sem direito ao auxílio`
    }

