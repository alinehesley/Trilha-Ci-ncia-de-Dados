const readlineSync = require('readline-sync');

function calcularRendimento(capitalAplicado, tempoDeAplicacao) {
    let taxaDeJuros;

    if (capitalAplicado > 50000 && capitalAplicado <= 100000 && tempoDeAplicacao > 12 && tempoDeAplicacao <= 24) {
        taxaDeJuros = 0.05;  // Taxa de rendimento de 5%
    } else if (capitalAplicado > 50000 && capitalAplicado <= 100000 && tempoDeAplicacao > 24 && tempoDeAplicacao <= 36) {
        taxaDeJuros = 0.10;  // Taxa de rendimento de 10%
    } else {
        taxaDeJuros = 0.006022;  // Taxa de rendimento de 0.6022% padrão
    }

    const valorRendimento = capitalAplicado * Math.pow(1 + taxaDeJuros, tempoDeAplicacao);

    return valorRendimento;
}

function main() {
    let capitalAplicado;
    let tempoDeAplicacao;
    let valorRendimento;

    do {
        capitalAplicado = parseFloat(readlineSync.question('Informe o valor aplicado na poupança: '));
        tempoDeAplicacao = parseInt(readlineSync.question('Informe a quantidade de meses de aplicação: '));

        if (isNaN(capitalAplicado) || capitalAplicado <= 0) {
            console.log('Valor informado inválido! Por favor, informe o valor depositado na poupança.');
        }
    } while (isNaN(capitalAplicado) || capitalAplicado <= 0);

    valorRendimento = calcularRendimento(capitalAplicado, tempoDeAplicacao);

    console.log(`A poupança de R$${capitalAplicado.toFixed(2)} aplicada em ${tempoDeAplicacao} meses, rendeu R$${valorRendimento.toFixed(2)}.`);
}

main();
