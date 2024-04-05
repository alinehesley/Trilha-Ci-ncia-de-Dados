var anoNascimento = parseInt(prompt("Por favor, informe o ano de nascimento:"));

// Ano atual
var anoAtual = new Date().getFullYear();
var idade = anoAtual - anoNascimento;
console.log("A idade é: " + idade);
