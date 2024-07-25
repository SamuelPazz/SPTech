

    function buscar() {
        let cep = inputCep.value;
        let cepfetch = 'https://viacep.com.br/ws/' + cep + '/json/'
        fetch(cepfetch) 
            .then(function(resposta) {
                console.log('resposta não formatada' + resposta)

                resposta.json()
                .then(function(respostaFormatada) {
                    inputCep.value = respostaFormatada.cep
                    inputLogradouro.value = respostaFormatada.logradouro
                    inputComplemento.value = respostaFormatada.complemento
                    inputBairro.value = respostaFormatada.bairro
                    inputCidade.value = respostaFormatada.localidade
                    inputEstado.value = respostaFormatada.uf
                    console.log('resposta formatada' + JSON.stringify(respostaFormatada))
                })
            })
            .catch(function (erro) {
                console.log('Erro ao buscar cep' + erro)
            })
    }

