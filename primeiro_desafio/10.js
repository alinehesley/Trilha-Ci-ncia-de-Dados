var salario = parseFloat(prompt("Por favor, informe o salário:"));

// Armazena o valor original do salário
var salarioOriginal = salario;

if (salario <= 2000) {
    salario *= 1.1; // Aumento de 10%
} else if (salario > 5000 && salario < 10000) {
    salario *= 1.05; // Aumento de 5%
} else if (salario > 10000 && salario < 15000) {
    salario *= 1.02; // Aumento de 2%
}

// Exibe o valor original e o valor com aumento
console.log("Salário original: R$ " + salarioOriginal.toFixed(2));
console.log("Salário com aumento: R$ " + salario.toFixed(2));
