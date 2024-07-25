
    function exibir(){
        var dias = Number(iptDias.value);

        var texto = ``;
        var resto = 1;
        for(var contador = 1; contador <= 30; contador++){
        
            if(contador % dias == resto){
                texto += `Dia ${contador} - Musculação<br>`
            } else{
                texto += `Dia ${contador} - Comer, dormir etc<br>`    
            }
        } 
        divMostrar.innerHTML=`${texto}`
    }

