function apresentacao(nome) {
    return `Meu nome é ${nome}`
}

const apresentacaoArrow = nome => `Meu nome é ${nome}`
const nome = (num1, num2) => num1 + num2;

// arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 >10) {
        return "Só pode números menores que 10"
    } else {
        return num1 + num2;
    }
}