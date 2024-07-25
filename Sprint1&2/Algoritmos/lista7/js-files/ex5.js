

    function analisar(){
        var temp = Number(inputTemp.value);

        if(temp <21 || temp >24){
            alert(`Alerta de desconforto`)
            if(temp <21){
                alert(`As pessoas vão ter hipotermia`)
            } else if(temp >24){
                alert(`As pessoas vão derreter`)
            }
        }
    }

