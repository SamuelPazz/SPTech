
    function contarIdade(){
        var texto = ``
        var idade = Number(inputIdade.value);
        for(var contador = 0; contador <= idade; contador++){
            
            if(contador >= 0 && contador <= 4){
                texto += `<br>${contador} anos (Primeira Infância)`        
            } else if(contador > 4 && contador <= 6){
                texto += `<br>${contador} anos (Pré-escolar)`
            } else if(contador > 6 && contador <= 10){
                texto += `<br>${contador} anos (Segunda Infância)`
            } else if(contador > 10 && contador <= 18){
                texto += `<br>${contador} anos (Adolescência)`
            } else if(contador > 18 && contador <= 50){
                texto += `<br>${contador} anos (Adulto)`
            } else if(contador > 50 && contador <= 100){
                texto += `<br>${contador} anos (Melhor idade)`
            } else if(contador > 100){
                texto += `<br>${contador} anos (Matusalém)`
            }
        }  
        divMostrar.innerHTML = `${texto}`
    }

