
    function calcrefri(){
        var refri = inputLata.value;
        var refriAno = refri * 365;

        divMostrar.innerHTML = `Você consome ${refriAno} refri por ano`

        if (refriAno >= 500) {
            divMostrar.innerHTML = `Você consome ${refriAno} refri por ano, cuidado com a diabetes`
        }
    }

