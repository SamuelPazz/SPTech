var texto = ``;
    function assistir(){
        var ep = Number(iptEp.value);
        var tempo = Number(iptTempo.value);
        var uniTempo = selectUniTemp.value;
        var pAbertura = selectAbertura.value;
        var pEncerramento = selectEncerramento.value;
        var minEp = 24

        if(ep >=1 && ep <=1100){

            if(uniTempo == "Horas"){
                tempo = tempo * 60
            }

            if(pAbertura == "Sim"){
                minEp = minEp - 2;
            }

            if(pEncerramento == "Sim"){
                minEp = minEp - 2;
            }

            var epsAssistidos = tempo / minEp;
            var contador = ep
            var qtdEps = (tempo / minEp) + ep
            
            for(    ; contador <= qtdEps; contador++){
                texto+= `<br> Episódio: ${contador}<br>`
    
            
                    for(var contadormin = 1; contadormin <= minEp; contadormin++){
                        
                        if(tempo != 0){
                            tempo --;
                            if(pAbertura == "Não" && (contadormin == 1 || contadormin == 2)){
                                texto += `Minuto ${contadormin}: Assistindo abertura<br>`
                            } else if((pEncerramento == "Não" && (contadormin == 23 || contadormin == 24)) ||
                            (pAbertura == "Sim" && pEncerramento == "Não" && (contadormin == 21 || contadormin == 22))){
                                texto += `Minuto ${contadormin}: Assistindo Encerramento<br>`
                            } else {
                                texto += `Minuto ${contadormin}: Assistindo o episódio<br>`
                            }
                        } else {
                            minEp = contadormin; 
                            divMostrar.innerHTML = `${texto}<br>Fim dos episódios!<br> Foram assistidos: ${epsAssistidos} episódios` 
                        }
                    }
            } 
            texto = ``


        } else {
            alert(`O número do episódio é inválido`)
        }
    }