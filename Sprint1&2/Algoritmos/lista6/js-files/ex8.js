

    function logar(){
        var login = iptlogin.value;
        var senha = iptsenha.value;
        var codigo = iptcodigo.value;
        if(login =='SPTech' && senha == 'digital' && codigo == '123'){
            alert(`Usuário autenticado com sucesso`)
        } else alert(`Falha na autenticação`)
    }

