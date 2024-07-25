
    function nota (){
        var nome = InputNOME.value;
        var nc = Number(InputNota.value) * 0.40;
        var ns = Number(InputSE.value) * 0.60;
        var media = (nc + ns);

        alert('A média de ' + nome + ' será de ' + media)
    }

