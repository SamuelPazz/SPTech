
    var sono = 0;
    var fase1 = 0;
    var fase2 = 0;
    var fase3 = 0;
    var faseRem = 0;

  

    function fases (){
        sono = inputSono.value;
        fase1 = sono * 0.05;
        fase2 = sono * 0.45;
        fase3 = sono * 0.30;
        faseRem = sono * 0.20;

        divSono.innerHTML = `Ao dormir ${sono} horas, você dormiu:<br> 
        ${fase1} horas na fase 1 <br> 
        ${fase2} horas na fase 2 <br>
        ${fase3} horas na fase 3 <br>
        ${faseRem} horas na fase REM <br>
        `
    }



