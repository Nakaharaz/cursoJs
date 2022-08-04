const nomes = ['Enzo', 'Diego', 'Mykelly', 'Isa'];
const notas = [10, 5, 8, 3];

const aprovados = notas.filter((_, indice) => notas[indice] >= 5);

console.log(`Números aceitos: ${aprovados}`);