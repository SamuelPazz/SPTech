
    var listaProjetos = []
    function registrar(){
        var projeto = inputProjetos.value;

        listaProjetos.push(projeto)

        if(listaProjetos.length >= 0 && listaProjetos.length <=4){
            divMensagem.innerHTML = `Você já fez ${listaProjetos.length} projetos. Por isso você é um profissional Júnior`        
        } else if(listaProjetos.length >= 5 && listaProjetos.length <=12){
            divMensagem.innerHTML = `Você já fez ${listaProjetos.length} projetos. Por isso você é um profissional Pleno`        
        } else if(listaProjetos.length >=13){
            divMensagem.innerHTML = `Você já fez ${listaProjetos.length} projetos. Por isso você é um profissional Sênior`        
        }
    }
    function mostrar(){
        divMensagem2.innerHTML = ``
        for(var i = listaProjetos.length -1; i >= 0; i--){
            divMensagem2.innerHTML += `<br>${listaProjetos[i]}`
        }
    }

