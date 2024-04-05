// Solicita as três notas finais do aluno
var nota1 = parseFloat(prompt("Por favor, informe a primeira nota:"));
var nota2 = parseFloat(prompt("Por favor, informe a segunda nota:"));
var nota3 = parseFloat(prompt("Por favor, informe a terceira nota:"));

// Calcula a média das notas
var media = (nota1 + nota2 + nota3) / 3;

if (media >= 0 && media <= 10) {
    if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
} else {
    console.log("Por favor, insira notas válidas (entre 0 e 10)!");
}
