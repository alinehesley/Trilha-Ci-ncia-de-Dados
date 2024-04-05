var numero1 = parseFloat(prompt("Por favor, insira o primeiro número:"));
var numero2 = parseFloat(prompt("Agora, insira o segundo número:"));

if (numero2 !== 0) {
    // Verifica se o primeiro número é divisível pelo segundo
    if (numero1 % numero2 === 0) {
        console.log("O primeiro número é divisível pelo segundo");
    } else {
        console.log("O primeiro número não é divisível pelo segundo");
    }
} else {
    console.log("Não é possível dividir por zero. Por favor, insira um segundo número diferente de zero.");
}
