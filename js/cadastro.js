let nome = document.getElementById("nome");
let usuario = document.getElementById("usuario");
let telefone = document.getElementById("telefone");
let curso = document.getElementById("curso");
let senha = document.getElementById("senha");
let confsenha = document.getElementById("confirmacao-senha");
let enviarformulario = document.getElementById("enviarformulario");
let termosservico = document.getElementById("termosservicobox");
/* let masculino = $("#masculino");
let feminino = $("#feminino");
let naobinario = $("#naobinario");
let naoespecificado = $("#naoespecificado"); */

enviarformulario.addEventListener("click", () => {
    const generos = document.querySelectorAll('input[name="genero"]');
    let generoSelecionado;
    if (nome.value == "") alert("Preencha o nome")
    else if (usuario.value == "") alert("Preencha o nome de usuário")
    else if (telefone.value == "") alert("Preencha o telefone")
    else if (curso.value == "") alert("Preencha o nome do curso")
    else if (senha.value == "") alert("Preencha a senha")
    else if (confsenha.value == "") alert("Preencha a confirmação de senha")
    else if (confsenha.value != senha.value ) alert("As senhas não correspondem")
    else if (termosservico.checked ==false) {alert("Aceite os termos do serviço")}
     else {alert("Você está registrado!")}
     for (const genero of generos) {
        if (genero.checked) {
            generoSelecionado = genero.value;
            break;
        }
    }
    generoSelecionado ? "" : alert("Preencha o sexo")
     

})

var myInput = document.getElementById("senha");
var letter = document.getElementById("minuscula");
var capital = document.getElementById("maiuscula");
var number = document.getElementById("numero");
var length = document.getElementById("letras");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("caixamsg").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("caixamsg").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}