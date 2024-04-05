var listaSalarios = prompt("Por favor, insira a lista de salários separados por vírgula:");
var salarios = listaSalarios.split(",");

// Inicializa a variável para armazenar a soma dos salários
var somaSalarios = 0;

// Itera sobre cada salário na lista
for (var i = 0; i < salarios.length; i++) {
    // Converte o salário para um número de ponto flutuante e adiciona à soma
    somaSalarios += parseFloat(salarios[i]);
}

console.log("O total da folha de pagamento é: " + somaSalarios);
