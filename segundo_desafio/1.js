function Operacao(a, b) {
    let exponenciacao = Math.pow(a, b);
    let restoDivisao = a % b;
    let subtracao = b - a;

    console.log("Soma da exponenciação:", exponenciacao);
    console.log("Resto da divisão de", a, "por", b, ":", restoDivisao);
    console.log("Subtração de", b, "por", a, ":", subtracao);
}

// Testando a função
console.log(Operacao(5, 3));
