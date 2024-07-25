
    var listaLinhas = []

    function gravar() {
        var linha = iptLinha.value;
        listaLinhas.push(linha)

        divMsg.innerHTML = ``
        for (var i = listaLinhas.length - 1; i >= 0; i--) {

            divMsg.innerHTML += `${listaLinhas[i]}<br>`;

        }
    }

    function pesquisar() {
        var pesquisaLinha = iptPesquisa.value;
        divPesquisa.innerHTML = ``
        var pesquisaIndice = []

        if (listaLinhas.indexOf(pesquisaLinha) >= 0) {
            for (var i = 0; i <= listaLinhas.length; i++) {

                if (listaLinhas[i] == pesquisaLinha) {
                    pesquisaIndice.push(i+1)
                }
            }
            divPesquisa.innerHTML = `Você cadastrou essa linha ${pesquisaIndice.length} vezes, nesta ordem: ${pesquisaIndice}`
        } else {
            divPesquisa.innerHTML = `Você nunca pegou essa linha`
        }
    }

