

    function recomendacao(){
        var hora = Number(ipthora.value);
        if(hora >=19 && hora <=21){
            divMostrar.innerHTML=`Não é recomendável que você assista sua série favorita no horário ${hora}`;
        } else divMostrar.innerHTML=`O horário ${hora} é adequado para assistir sua série favorita!`;
    }

