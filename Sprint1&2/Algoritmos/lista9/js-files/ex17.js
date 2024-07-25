
var quantidade = 0;
    function cocas(){
        var texto = ``;
        quantidade = inputCoca.value;

        for(var contador = 1; contador <= quantidade; contador++){

            texto += `<img src="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2013/11/30/cocacoaacucar.jpg" width="100px">`
        } divMostrar.innerHTML = `${texto}`
    }

