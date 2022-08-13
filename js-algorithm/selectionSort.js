const livros = require('./listaLivros');
const menorValor = require('./menorValor')

for (let atual = 0; atual < livros.length - 1; atual++) {
    let menor = menorValor(livros, atual);
    
    console.log(atual)
    let livroAtual = livros[atual];
    console.log(livroAtual)
    let livroMenorPreco = livros[menor];
    console.log(livroMenorPreco)
    
    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros)