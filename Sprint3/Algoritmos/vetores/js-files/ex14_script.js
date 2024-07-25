
    var listaNumeros = []

    function analisar(){
        var num = Number(inputNum.value)
        listaNumeros.push(num)
        var maiornum = listaNumeros[0]
        var menornum = listaNumeros[0]
        divMsg.innerHTML = ``
        
        for(var i = 0; i < listaNumeros.length ; i++){
            divMsg.innerHTML += `${i+1}º Número: ${listaNumeros[i]}<br>`

            if(listaNumeros[i] > maiornum){
                maiornum = listaNumeros[i]
            }
            if(listaNumeros[i] < menornum){
                menornum = listaNumeros[i]
            }
        } divMsg.innerHTML += `Maior: ${maiornum}<br>Menor: ${menornum}`
    }

