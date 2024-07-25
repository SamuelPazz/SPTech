
    function verificar(){
        var renda = Number(iptrenda.value);
        var rfamilia = Number(iptfamilia.value);

        if (renda <=1050 && rfamilia <=2100){
            alert(`Você terá direito!`)
        } else alert(`Você NÃO terá direito`)
    }

