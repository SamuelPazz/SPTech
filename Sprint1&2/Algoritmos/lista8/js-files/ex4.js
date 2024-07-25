

    function autenticar(){

        var login = inputLogin.value;
        var senha = inputSenha.value;
        var pessoal = inputPessoal.value;
        
        if(login == "ana" && senha == "braga" && (pessoal == "1949" || pessoal == "louro josé")){
            divMostrar.innerHTML=`Usuário autenticado`
        } else {
            divMostrar.innerHTML=`Falha na autenticação`
        }
    }

