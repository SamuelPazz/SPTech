

    var texto = ``
    function exibir(){
        var qtdCafe = Number(inputQTD.value);
        var cafeimg = `<img src="https://w7.pngwing.com/pngs/563/535/png-transparent-coffee-in-spoon-coffee-sago-palm-landscape-arecaceae-coffee-powder-coffee-shop-pest-control-coffee.png" width= "250px"/>`;

        var leiteimg = `<img src="https://minhasaude.proteste.org.br/wp-content/uploads/2023/06/colher-carregando-punhado-de-leite-em-po-sobre-fundo-branco.jpg" width="250px"/>`;

        var imgs = `${cafeimg}${cafeimg}${leiteimg}<br><br>`

        for(var contador =1; contador <= qtdCafe; contador++){
            texto += `${imgs}`
        };
        divMostrar.innerHTML = `${texto}`
    }


