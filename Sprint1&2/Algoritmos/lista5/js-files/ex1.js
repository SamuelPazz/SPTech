 
    function analisar(){
        var altura = Number(inputAltura.value);
        
        if(altura <=1.65){
            divExibir.innerHTML=`Você pode ser piloto de corrida`;
        } else if (altura <=1.80){
            divExibir.innerHTML=`Você pode ser jogador de futebol`;
        } else if(altura >1.80){
            divExibir.innerHTML=`Você pode ser jogador de vôlei ou basquete`;
        }
    }