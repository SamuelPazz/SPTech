

    function calcpeso(){
        var homens = Number(inputqtdhomem.value);
        var mulheres = Number(inputqtdmulher.value);
        var peso = (homens * 90) + (mulheres * 70)

        if(peso <=500){
            divMostrar.innerHTML=`<span style="color:#00ff00;">Elevador vai se mover, pois está com ${peso}</span>`
        }
        if(peso >500){
            var reduzirpeso = peso - 500;
            divMostrar.innerHTML=`<span style="color:#ff0000;">Alguém precisa descer. Precisa perder ${reduzirpeso}kg para mover o elevador</span>`
        }
    }

