

    function analisar(){

        var idade = iptidade.value;
        var salario = Number(iptsalario.value);

        if(idade <18 && salario <2500){
           divMostrar.innerHTML=`Menor de idade e liso` 
        } else if(idade <18 && salario >=2500){
            divMostrar.innerHTML=`Menor de idade e ostentação`
        } else if(idade >=18 && salario <3500){
            divMostrar.innerHTML=`Maior de idade e liso`
        } else if(idade >=18 && salario >=3500 && salario <=7000){
            divMostrar.innerHTML=`Maior de idade e ostentação`
        } else if(idade >=18 && salario>7000){
            divMostrar.innerHTML=`Maior de idade e mega ostentação`
        }
    }

