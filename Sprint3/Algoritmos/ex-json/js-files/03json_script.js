
    // JSON -> JavaScript Objetct Notation
    var listaPessoas = []
    function exibir() {   

        var pessoa = {
            nome:"Fulano",
            
            endereco: {
                rua: "Haddock Lobo",
                bairro: "Cerqueira César ",
                cidade: "São Paulo",
                estado: "SP",
                numero: 595,
            }
        }
        listaPessoas.push(pessoa)
        divMsg.innerHTML = `${JSON.stringify(pessoa)}`;
    }   

