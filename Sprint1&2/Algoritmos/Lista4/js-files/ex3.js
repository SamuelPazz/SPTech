
    function calcnota(){
        var n1 = Number(inputn1.value);
        var n2 = Number(inputn2.value);
        var n3 = Number(inputn3.value);

        var media = (n1 + n2 + n3) / 3;
        divMostrar.innerHTML = `Sua média é de ${media}`

        if (media >9.4){
            divMostrar.innerHTML = `Sua média é de ${media}, Parabéns, você é fora de série!`
        }
    }

