
    listaFilhos = []

    function cadastrar(){
        var filho = inputFilho.value;

        if(listaFilhos.indexOf(filho) < 0){
            listaFilhos.push(filho)
        } else {
            alert(`Não pode mais de 1 filho com o mesmo nome!`)
        }
    }

    function atualizar(){

        divMsg.innerHTML = `Você tem ${listaFilhos.length} filhos 
        <br>Seu custo mensal será de aproximadamente R$${listaFilhos.length * 3000} se colocá-los em escola particular<br> 
        ou R$${listaFilhos.length * 1500} se eles estudarem em escola pública`
    }

