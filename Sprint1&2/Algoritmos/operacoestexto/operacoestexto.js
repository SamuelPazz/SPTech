function analisar() {
    var frase = inputFrase.value;

    var tamanho_frase = frase.length;
    divMostrar.innerHTML = `Comprimento do texto: ${tamanho_frase}`;
    if (tamanho_frase >= 8) {
        divMostrar.innerHTML += `<br>- Possui 8 letras ou mais`;
    } else {
        divMostrar.innerHTML += `<br>- Possui MENOS de 8 letras`
    }

    var comeca_a = frase.startsWith('a');
    divMostrar.innerHTML += `<br>Começa com a?: ${comeca_a}`;


    var comeca_hash = frase.startsWith('#');
    divMostrar.innerHTML += `<br>Começa com #?: ${comeca_hash}`;

    var termina_com = frase.endsWith('.com');
    divMostrar.innerHTML += `<br>Termina com ".com"?${termina_com}`;

    var primeira_letra = frase[0];
    divMostrar.innerHTML += `<br>Primeira letra: ${primeira_letra}`;

    var terceira_letra = frase[2]
    divMostrar.innerHTML += `<br>Terceira letra: ${terceira_letra}`;

    var ultima_letra = frase[tamanho_frase - 1]
    divMostrar.innerHTML += `<br>ultima letra: ${ultima_letra}`;

    var indice_arroba = frase.indexOf('@')
    divMostrar.innerHTML += `<br>Índice do @ ${indice_arroba}`;

    if (indice_arroba < 0) {
        divMostrar.innerHTML += `<br>Não possui @ nessa frase!`;
    }

    var frase_maiuscula = frase.toUpperCase();
    var frase_minuscula = frase.toLowerCase();
    divMostrar.innerHTML += `
        <br>Frase Maiúscula: ${frase_maiuscula}
        <br>Frase Minúscula: ${frase_minuscula}
    `
    if (frase_maiuscula == "SIM") {
        divMostrar.innerHTML += `<br>Você digitou SIM`
    } else if (frase_minuscula == "não") {
        divMostrar.innerHTML += `<br>Você digitou não`
    }

    // replace ou replaceAll

    var frase_sem_espacos = frase.replaceAll(' ', '');
    divMostrar.innerHTML += `<br>Frase sem espaços: ${frase_sem_espacos}`

    var frase_formatada = frase.replaceAll('a', '4').replaceAll('e', '3').replaceAll('s', '5')
        .replaceAll('A', '4').replaceAll('E', '3').replaceAll('S', '5')
}
