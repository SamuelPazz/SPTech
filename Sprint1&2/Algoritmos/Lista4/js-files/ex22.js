
    var meta = 0;
    var economia = 0;
    var diferencaEco = 0;
    var diferencaMeta = 0;

    function analisar() {
        meta = inputMeta.value;
        economia = inputEco.value;
        diferencaEco = economia - meta;
        diferencaMeta = meta - economia;

        if (economia >= meta) {
            divMostrar.innerHTML = `Parabéns, meta alcançada!<br>`;

            if (economia > meta) {
                divMostrar.innerHTML += `Meta ultrapassada em ${diferenca}<br>`
            }
        } 
        if (economia < meta) {
            divMostrar.innerHTML = `Força! Ainda em busca da meta! Falta ${diferencaMeta}<br>`;
        }


    }

