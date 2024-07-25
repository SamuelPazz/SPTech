
    const baralho = []
    let cartasPuxadas = []
    let somaJogador = 0;
    let somaBanca = 0;

    function jogar() {
        baralho.push({ carta: "A", numCarta: 1, naipe: "Ouros", numNaipe: 1, valor: 1 },
            { carta: "A", numCarta: 1, naipe: "Espadas", numNaipe: 2, valor: 1 },
            { carta: "A", numCarta: 1, naipe: "Copas", numNaipe: 3, valor: 1 },
            { carta: "A", numCarta: 1, naipe: "Paus", numNaipe: 4, valor: 1 },
            { carta: "2", numCarta: 2, naipe: "Ouros", numNaipe: 1, valor: 2 },
            { carta: "2", numCarta: 2, naipe: "Espadas", numNaipe: 2, valor: 2 },
            { carta: "2", numCarta: 2, naipe: "Copas", numNaipe: 3, valor: 2 },
            { carta: "2", numCarta: 2, naipe: "Paus", numNaipe: 4, valor: 2 },
            { carta: "3", numCarta: 3, naipe: "Ouros", numNaipe: 1, valor: 3 },
            { carta: "3", numCarta: 3, naipe: "Espadas", numNaipe: 2, valor: 3 },
            { carta: "3", numCarta: 3, naipe: "Copas", numNaipe: 3, valor: 3 },
            { carta: "3", numCarta: 3, naipe: "Paus", numNaipe: 4, valor: 3 },
            { carta: "4", numCarta: 4, naipe: "Ouros", numNaipe: 1, valor: 4 },
            { carta: "4", numCarta: 4, naipe: "Espadas", numNaipe: 2, valor: 4 },
            { carta: "4", numCarta: 4, naipe: "Copas", numNaipe: 3, valor: 4 },
            { carta: "4", numCarta: 4, naipe: "Paus", numNaipe: 4, valor: 4 },
            { carta: "5", numCarta: 5, naipe: "Ouros", numNaipe: 1, valor: 5 },
            { carta: "5", numCarta: 5, naipe: "Espadas", numNaipe: 2, valor: 5 },
            { carta: "5", numCarta: 5, naipe: "Copas", numNaipe: 3, valor: 5 },
            { carta: "5", numCarta: 5, naipe: "Paus", numNaipe: 4, valor: 5 },
            { carta: "6", numCarta: 6, naipe: "Ouros", numNaipe: 1, valor: 6 },
            { carta: "6", numCarta: 6, naipe: "Espadas", numNaipe: 2, valor: 6 },
            { carta: "6", numCarta: 6, naipe: "Copas", numNaipe: 3, valor: 6 },
            { carta: "6", numCarta: 6, naipe: "Paus", numNaipe: 4, valor: 6 },
            { carta: "7", numCarta: 7, naipe: "Ouros", numNaipe: 1, valor: 7 },
            { carta: "7", numCarta: 7, naipe: "Espadas", numNaipe: 2, valor: 7 },
            { carta: "7", numCarta: 7, naipe: "Copas", numNaipe: 3, valor: 7 },
            { carta: "7", numCarta: 7, naipe: "Paus", numNaipe: 4, valor: 7 },
            { carta: "J", numCarta: 8, naipe: "Ouros", numNaipe: 1, valor: 0.5 },
            { carta: "J", numCarta: 8, naipe: "Espadas", numNaipe: 2, valor: 0.5 },
            { carta: "J", numCarta: 8, naipe: "Copas", numNaipe: 3, valor: 0.5 },
            { carta: "J", numCarta: 8, naipe: "Paus", numNaipe: 4, valor: 0.5 },
            { carta: "Q", numCarta: 9, naipe: "Ouros", numNaipe: 1, valor: 0.5 },
            { carta: "Q", numCarta: 9, naipe: "Espadas", numNaipe: 2, valor: 0.5 },
            { carta: "Q", numCarta: 9, naipe: "Copas", numNaipe: 3, valor: 0.5 },
            { carta: "Q", numCarta: 9, naipe: "Paus", numNaipe: 4, valor: 0.5 },
            { carta: "K", numCarta: 10, naipe: "Ouros", numNaipe: 1, valor: 0.5 },
            { carta: "K", numCarta: 10, naipe: "Espadas", numNaipe: 2, valor: 0.5 },
            { carta: "K", numCarta: 10, naipe: "Copas", numNaipe: 3, valor: 0.5 },
            { carta: "K", numCarta: 10, naipe: "Paus", numNaipe: 4, valor: 0.5 })
        divJogo.style.display = "block"
        divJogar.style.display = "none"
        let num = (Math.random() * 9 + 1).toFixed(0)
        let naipe = (Math.random() * 3 + 1).toFixed(0)
        let texto = ``
        divJogador.innerHTML = "Jogador:"

        for (let i = 0; i < baralho.length; i++) {
            if (num == baralho[i].numCarta && naipe == baralho[i].numNaipe) {
                somaJogador += baralho[i].valor
                cartasPuxadas.push({ carta: num, naipe: naipe })
                texto += `<br>(${somaJogador} pontos) - ${baralho[i].carta} de ${baralho[i].naipe}`
            }
        }
        divJogador.innerHTML += texto
    }

    function pedir() {
        for (let index = 0; index < baralho.length; index++) {
            let num = (Math.random() * 9 + 1).toFixed(0);
            let naipe = (Math.random() * 3 + 1).toFixed(0);
            let cartaAtual = { carta: num, naipe: naipe };
            let cartaJaPuxada = false;

            for (let i = 0; i < cartasPuxadas.length; i++) {
                if (cartaAtual.carta == cartasPuxadas[i].carta && cartaAtual.naipe == cartasPuxadas[i].naipe) {
                    cartaJaPuxada = true;
                    break;
                }
            }

            if (!cartaJaPuxada) {
                cartasPuxadas.push(cartaAtual);
                break;
            }
        }

        let texto = ``

        for (let i = 0; i < baralho.length; i++) {
            let ultimaCartaPuxada = cartasPuxadas.length - 1
            if (cartasPuxadas[ultimaCartaPuxada].carta == baralho[i].numCarta && cartasPuxadas[ultimaCartaPuxada].naipe == baralho[i].numNaipe) {
                somaJogador += baralho[i].valor
                texto = `<br>Quero mais uma carta!<br>(${somaJogador} pontos) - ${baralho[i].carta} de ${baralho[i].naipe}`
                break
            }
        }

        divJogador.innerHTML += texto

        if (somaJogador == 7.5) {
            divJogador.innerHTML += `<br>SETE E MEIO!`
            divBanca.innerHTML += `<br>Banca:<br><br>O jogador venceu com 7.5 pontos!`
            document.getElementById("btnPassar").disabled = true;
            document.getElementById("btnPedir").disabled = true;
        } else if (somaJogador > 7.5) {
            divJogador.innerHTML += `<br>O JOGADOR ESTOROU!`
            divBanca.innerHTML += `<br>Banca:<br><br>A Banca venceu com ${somaBanca} pontos!`
            document.getElementById("btnPassar").disabled = true;
            document.getElementById("btnPedir").disabled = true;
        }
    }


    function passar() {
        divBanca.innerHTML = `<br>Banca:`
        for (;somaBanca <= somaJogador;) {
            for (let i = 0; i < baralho.length; i++) {
                let numBanca = (Math.random() * 9 + 1).toFixed(0)
                let naipeBanca = (Math.random() * 3 + 1).toFixed(0)
                let texto = ``

                if (somaBanca < somaJogador) {
                    if (numBanca == baralho[i].numCarta && naipeBanca == baralho[i].numNaipe) {
                        somaBanca += baralho[i].valor
                        texto = `<br>(${somaBanca} pontos) - ${baralho[i].carta} de ${baralho[i].naipe}<br>`
                    }
                }
                divBanca.innerHTML += texto
            }
        }

        if (somaBanca == 7.5) {
            divBanca.innerHTML += `<br>SETE E MEIO!`
            divBanca.innerHTML += `<br><br>A banca venceu com 7.5 pontos!`
            document.getElementById("btnPassar").disabled = true;
            document.getElementById("btnPedir").disabled = true;
        } else if (somaBanca > 7.5) {
            divJogador.innerHTML += `<br>BANCA ESTOROU!`
            divBanca.innerHTML += `<br><br>O jogador venceu com ${somaJogador} pontos!`
            document.getElementById("btnPassar").disabled = true;
            document.getElementById("btnPedir").disabled = true;
        } else if (somaBanca > somaJogador && somaBanca < 7.5) {
            divBanca.innerHTML += `<br><br>A banca venceu com ${somaBanca} pontos!`
            document.getElementById("btnPassar").disabled = true;
            document.getElementById("btnPedir").disabled = true;
        }
    }

    function reiniciar() {
        divJogador.innerHTML = ``
        divBanca.innerHTML = ``
        document.getElementById("btnPassar").disabled = false;
        document.getElementById("btnPedir").disabled = false;
        cartasPuxadas = [];
        somaJogador = 0;
        somaBanca = 0;

        let num = (Math.random() * 9 + 1).toFixed(0)
        let naipe = (Math.random() * 3 + 1).toFixed(0)
        let texto = ``
        divJogador.innerHTML = "Jogador:"

        for (let i = 0; i < baralho.length; i++) {
            if (num == baralho[i].numCarta && naipe == baralho[i].numNaipe) {
                somaJogador += baralho[i].valor
                cartasPuxadas.push({ carta: num, naipe: naipe })
                texto += `<br>(${somaJogador} pontos) - ${baralho[i].carta} de ${baralho[i].naipe}`
            }
        }
        divJogador.innerHTML += texto
    }

