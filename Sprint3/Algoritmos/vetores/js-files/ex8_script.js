
    var listaAluno = []
    function cadastrar(){
        var aluno = inputAluno.value;
        listaAluno.push(aluno)

        divMensagem.innerHTML = ``
        for (var i = listaAluno.length -1; i >= 0; i--){
            divMensagem.innerHTML += `<br>${listaAluno[i]}` 
        }
    }


