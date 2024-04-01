let baseCalc = 0;
let num1;
let num2;
let devolveDec1;
let devolveDec2;
let resultado = 0;
let operacao;

function validarEntradaConversao(numero, base) {

    var validChars = '';

    if (base == 10) {
        validChars = '0123456789';
    } else if (base == 2) {
        validChars = '01';
    } else if (base == 8) {
        validChars = '01234567';
    } else if (base == 16) {
        validChars = '0123456789ABCDEFabcdef';
    }

    for (var i = 0; i < numero.length; i++) {
        if (validChars.indexOf(numero[i]) === -1) {
            return false;
        }
    }
}
function converter() {
    let numero = inputNumero.value;
    let base = Number(selectBase.value);
    let decimal = 0;
    let octal = 0;
    let hexadecimal = 0;
    let binario = 0;
    let devolveDec;

    if (validarEntradaConversao(numero, base) == false) {
        document.getElementById("divConversao").innerHTML = `<p>O valor  inserido é inválido. insira um número válido para a base selecionada.</p>`
        return;
    }
    
    if (numero == '' || base == ''){
        document.getElementById("divConversao").innerHTML = `<p>Insira o valor e a base</p>`
    }

    if (base == 10) {
        devolveDec = parseInt(numero, base);
        binario = devolveDec.toString(2);
        octal = devolveDec.toString(8);
        hexadecimal = devolveDec.toString(16);
        if (decimal == 'NaN' || binario == 'NaN' || octal == 'NaN' || hexadecimal == 'NaN'){
            document.getElementById("divConversao").innerHTML = `<p>Insira o valor</p>`
        } else {
            document.getElementById("divConversao").innerHTML = `Número em binário: <p>${binario}</p><br> Número em octal: <p>${octal}</p> <br> Número em hexadecimal: <p>${hexadecimal.toUpperCase()}</p>`
        }
    } else if (base == 2) {
        devolveDec = parseInt(numero, base);
        decimal = devolveDec;
        octal = devolveDec.toString(8);
        hexadecimal = devolveDec.toString(16);
        if (decimal == 'NaN' || binario == 'NaN' || octal == 'NaN' || hexadecimal == 'NaN'){
            document.getElementById("divConversao").innerHTML = `<p>Insira o valor</p>`
        } else {
            document.getElementById("divConversao").innerHTML = `Número em decimal: <p>${decimal}</p><br>Número em octal: <p>${octal}</p><br>Número em hexadecimal: <p>${hexadecimal.toUpperCase()}</p>`
        }
    } else if (base == 8) {
        devolveDec = parseInt(numero, base);
        decimal = devolveDec;
        binario = devolveDec.toString(2);
        hexadecimal = devolveDec.toString(16);
        if (decimal == 'NaN' || binario == 'NaN' || octal == 'NaN' || hexadecimal == 'NaN'){
            document.getElementById("divConversao").innerHTML = `<p>Insira o valor</p>`
        } else {
            document.getElementById("divConversao").innerHTML = `Número em decimal: <p>${decimal}</p> <br> Número em binário: <p>${binario}</p> <br> Número em hexadecimal: <p>${hexadecimal.toUpperCase()}</p>`
        }
    } else if (base == 16) {
        devolveDec = parseInt(numero, base);
        decimal = devolveDec;
        binario = devolveDec.toString(2);
        octal = devolveDec.toString(8);
        if (decimal == 'NaN' || binario == 'NaN' || octal == 'NaN' || hexadecimal == 'NaN'){
            document.getElementById("divConversao").innerHTML = `<p>Insira o valor</p>`
        } else {
            document.getElementById("divConversao").innerHTML = `Número em decimal: <p>${decimal}</p> <br> Número em binário: <p>${binario}</p> <br> Número em octal: <p>${octal}</p>`
        }
    }
}
function validarEntradaCalc(num1, num2, baseCalc) {

    var validChars = '';

    if (baseCalc == 10) {
        validChars = '0123456789';
    } else if (baseCalc == 2) {
        validChars = '01';
    } else if (baseCalc == 8) {
        validChars = '01234567';
    } else if (baseCalc == 16) {
        validChars = '0123456789ABCDEFabcdef';
    }

    for (var i = 0; i < num1.length; i++) {
        if (validChars.indexOf(num1[i]) === -1) {
            return false;
        }
    }

    for (var i = 0; i < num2.length; i++) {
        if (validChars.indexOf(num2[i]) === -1) {
            return false;
        }
    }
}

function somar() {
    baseCalc = Number(selectBaseCalc.value);
    num1 = inputNum1.value;
    num2 = inputNum2.value;
    devolveDec1 = parseInt(num1, baseCalc);
    devolveDec2 = parseInt(num2, baseCalc);
    resultado = devolveDec1 + devolveDec2;
    if (validarEntradaCalc(num1, num2, baseCalc) == false) {
        document.getElementById("divCalculo").innerHTML = `<p>O valor  inserido é inválido. insira um número válido para a base selecionada.</p>`
        return;
    }

    if (baseCalc == 10) {
        resultado = resultado;
    } else if (baseCalc == 2) {
        resultado = resultado.toString(2);
    } else if (baseCalc == 8) {
        resultado = resultado.toString(8);
    } else if (baseCalc == 16) {
        resultado = resultado.toString(16);
        resultado = resultado.toUpperCase();
    }
    
    if (num1 == '' || num2 == ''){
        document.getElementById("divCalculo").innerHTML = `<p>Insira os valores e a base</p>`
    } else {
        document.getElementById("divCalculo").innerHTML = `<p>o resultado é ${resultado}</p>`
    }
}
function subtrair() {
    baseCalc = Number(selectBaseCalc.value);
    num1 = inputNum1.value;
    num2 = inputNum2.value;
    devolveDec1 = parseInt(num1, baseCalc);
    devolveDec2 = parseInt(num2, baseCalc);
    resultado = devolveDec1 - devolveDec2;
    if (validarEntradaCalc(num1, num2, baseCalc) == false) {
        document.getElementById("divCalculo").innerHTML = `<p>O valor  inserido é inválido. insira um número válido para a base selecionada.</p>`
        return;
    }

    if (baseCalc == 10) {
        resultado = resultado;
    } else if (baseCalc == 2) {
        resultado = resultado.toString(2);
    } else if (baseCalc == 8) {
        resultado = resultado.toString(8);
    } else if (baseCalc == 16) {
        resultado = resultado.toString(16);
        resultado = resultado.toUpperCase();
    }

    if (num1 == '' || num2 == ''){
        document.getElementById("divCalculo").innerHTML = `<p>Insira os valores e a base</p>`
    } else {
        document.getElementById("divCalculo").innerHTML = `<p>o resultado é ${resultado}</p>`
    }
}
function multiplicar() {
    baseCalc = Number(selectBaseCalc.value);
    num1 = inputNum1.value;
    num2 = inputNum2.value;
    devolveDec1 = parseInt(num1, baseCalc);
    devolveDec2 = parseInt(num2, baseCalc);
    resultado = devolveDec1 * devolveDec2;
    if (validarEntradaCalc(num1, num2, baseCalc) == false) {
        document.getElementById("divCalculo").innerHTML = `<p>O valor  inserido é inválido. insira um número válido para a base selecionada.</p>`
        return;
    }

    if (baseCalc == 10) {
        resultado = resultado;
    } else if (baseCalc == 2) {
        resultado = resultado.toString(2);
    } else if (baseCalc == 8) {
        resultado = resultado.toString(8);
    } else if (baseCalc == 16) {
        resultado = resultado.toString(16);
        resultado = resultado.toUpperCase();
    }

    if (num1 == '' || num2 == ''){
        document.getElementById("divCalculo").innerHTML = `<p>Insira os valores e a base</p>`
    } else {
        document.getElementById("divCalculo").innerHTML = `<p>o resultado é ${resultado}</p>`
    }
}
function dividir() {
    baseCalc = Number(selectBaseCalc.value);
    num1 = inputNum1.value;
    num2 = inputNum2.value;
    devolveDec1 = parseInt(num1, baseCalc);
    devolveDec2 = parseInt(num2, baseCalc);
    resultado = devolveDec1 / devolveDec2;
    if (validarEntradaCalc(num1, num2, baseCalc) == false) {
        document.getElementById("divCalculo").innerHTML = `<p>O valor  inserido é inválido. insira um número válido para a base selecionada.</p>`
        return;
    }

    if (baseCalc == 10) {
        resultado = resultado;
    } else if (baseCalc == 2) {
        resultado = resultado.toString(2);
    } else if (baseCalc == 8) {
        resultado = resultado.toString(8);
    } else if (baseCalc == 16) {
        resultado = resultado.toString(16);
        resultado = resultado.toUpperCase();
    }
    
    if (num1 == '' || num2 == ''){
        document.getElementById("divCalculo").innerHTML = `<p>Insira os valores e a base</p>`
    } else {
        document.getElementById("divCalculo").innerHTML = `<p>o resultado é ${resultado}</p>`
    }
}