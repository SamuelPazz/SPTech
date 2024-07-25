

    function verificar(){
        var temperatura = Number(inputTemperatura.value);

        if(temperatura <10){
            divMostrar.innerHTML=`Apropriada p/ conservar alimento<br><img src="https://www.hipolabor.com.br/blog/wp-content/uploads/2017/06/93752-8-alimentos-nutritivos-que-ajudam-a-manter-o-bom-funcionamento-do-organismo.jpg" alt"">`
        } else {
            divMostrar.innerHTML=`Inapropriada p/ conservar alimento<br><img src="https://static.tuasaude.com/media/article/ed/zg/como-identificar-alimentos-estragados_22594_l.jpg" alt"">`
        }
    }

