
    var lista_frutas = [];
    function adicionar(){    
        var fruta = input_fruta.value;

            lista_frutas.push( fruta );

        divMensagem.innerHTML = lista_frutas


    }

    function analisar(){
        var fruta = input_fruta.value;
        var tamanho_lista = lista_frutas.length;

        var contador_frutas = 0;
        
        for(var index = 0; index < tamanho_lista; index++){
            var fruta_atual = lista_frutas[index];

            if(fruta == fruta_atual){
                contador_frutas++
            }
        }
        divMensagem.innerHTML = `A fruta ${fruta} existe ${contador_frutas} vezes na lista`
    }


