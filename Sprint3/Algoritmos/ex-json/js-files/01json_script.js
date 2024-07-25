

    // JSON -> JavaScript Objetct Notation

    function exibir() {

        var pessoa = {
            nome:"Fulano",
            sobrenome:"Ciclano",
            idade:55,    
        }

        var pessoa2 = {
            nome:"Beltrano",
            sobrenome:"de Tal",
            idade:19,  
        }
        console.log(pessoa)
        console.log(pessoa2)
        
        divMsg.innerHTML = `
            Pessoa 1:
            Seu nome é: ${pessoa.nome} ${pessoa.sobrenome}<br>
            Sua idade é: ${pessoa.idade}
            <br><br>
            Pessoa 2:
            Seu nome é: ${pessoa2.nome} ${pessoa2.sobrenome}<br>
            Sua idade é: ${pessoa2.idade}
        `;
    }   

