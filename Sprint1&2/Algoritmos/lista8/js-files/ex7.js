
    var tentativa = 3;
    function autenticar(){

        var login = inputLogin.value;
        var senha = inputSenha.value;
        var pessoal = inputPessoal.value;
        
        if(tentativa >= 1 && login == "ana" && senha == "braga" && (pessoal == "1949" || pessoal == "louro josé")){
            divMostrar.innerHTML=``
            divMostrar.innerHTML=`<br>Usuário autenticado<br>`;
            tentativa = 3;
        } else if(tentativa >= 1){
            tentativa --;           
            divMostrar.innerHTML=`<br>Falha na autenticação<br>ainda está restam ${tentativa} tentativas<br>`;
        } else if(tentativa > 0){
            divMostrar.innerHTML=``
            divMostrar.innerHTML=`<br>Falha na autenticação<br>ainda está restam ${tentativa} tentativas<br>Usuário BLOQUEADO! Procure seu gerente!<br>`
        }
    }           

