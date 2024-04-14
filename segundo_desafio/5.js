const readlineSync = require('readline-sync');

function gerarNumeroSecreto(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main() {
    const numeroSecreto = gerarNumeroSecreto(20, 30);
    let tentativas = 3;

    console.log("Bem-vindo ao jogo de acerto!");

    while (tentativas > 0) {
        const chute = parseInt(readlineSync.question(`Tentativa ${4 - tentativas} de 3\nDigite um número entre 20 e 30: `));

        if (chute >= 20 && chute <= 30) {
            if (chute === numeroSecreto) {
                console.log("Parabéns! Você acertou o número secreto!");
                return;
            } else {
                console.log("Número incorreto. Tente novamente.");
                tentativas--;
            }
        } else {
            console.log("Número fora do intervalo. Digite um número entre 20 e 30.");
        }
    }

    console.log("Tentativas esgotadas! O número secreto era:", numeroSecreto);
}

main();
