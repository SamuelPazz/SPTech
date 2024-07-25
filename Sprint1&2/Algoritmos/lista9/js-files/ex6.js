
    var texto = "";
    function amor(){
        var nomeamor = inputAmor.value;
        var qtd = inputQtd.value;
        
        for(var contador =1; contador <= qtd; contador ++){
            texto += `${contador}-${nomeamor},eu te amo! Sempre lembre disso!<br> `
        }
        divMostrar.innerHTML=`${texto}`
    }

