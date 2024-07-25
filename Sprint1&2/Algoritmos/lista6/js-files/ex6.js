

    function avaliar(){
        nota = Number(iptnota.value);
        frequencia = Number(iptfre.value);

        if(nota >=6 && frequencia>=75){
            alert(`Parabéns! Aprovado!`)
        } else alert(`infelizmente, não foi desta vez`)
    }

