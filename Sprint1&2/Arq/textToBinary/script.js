function converter(){
    var texto = document.getElementById("inputTexto").value;
    var conversao = document.getElementById("divResultado");
    conversao.innerHTML = "";
    for (var i = 0; i < texto.length; i++){
      conversao.innerHTML += texto[i].charCodeAt(0).toString(2) + " ", " "
      conversao.innerHTML += texto[i].charCodeAt(0).toString(16) + "<br> " 
    }
  }
