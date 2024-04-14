const readlineSync = require('readline-sync');

function calcularRendimento(capitalAplicado, tempoDeAplicacao) {
    let taxaDeJuros;

    if (capitalAplicado >= 999.99 && capitalAplicado <= 10000 && tempoDeAplicacao > 5 && tempoDeAplicacao < 12) {
        taxaDeJuros = 0.02;  // Taxa de rendimento de 2% para as condições especificadas
    } else {
        taxaDeJuros = 0.006022;  // Taxa de rendimento de 0.6022% padrão
    }

    const montante = capitalAplicado * Math.pow(1 + taxaDeJuros, tempoDeAplicacao);

    return montante;
}

function main() {
    let capitalAplicado;
    let tempoDeAplicacao;
    let valorRendimento;

    do {
        capitalAplicado = parseFloat(readlineSync.question('Informe o valor aplicado na poupança: '));
        tempoDeAplicacao = parseInt(readlineSync.question('Informe a quantidade de meses de aplicação: '));

        if (isNaN(capitalAplicado) || capitalAplicado <= 0 || isNaN(tempoDeAplicacao)) {
            console.log('Valor informado inválido! Por favor, informe o valor depositado na poupança.');
        }
    } while (isNaN(capitalAplicado) || capitalAplicado <= 0 || isNaN(tempoDeAplicacao));

    valorRendimento = calcularRendimento(capitalAplicado, tempoDeAplicacao);

    console.log(`A quantia de R$${capitalAplicado.toFixed(2)} aplicada em ${tempoDeAplicacao} meses, rendeu R$${valorRendimento.toFixed(2)}.`);
}

main();
