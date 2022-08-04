const notas = [10, 7, 8, 5, 10];
notas.pop();
// console.log(notas);

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
// console.log(media)

const numeros = [10, 20, 30];

const novosNumeros = notas.concat(numeros);
// console.log(novosNumeros)

let i = 0

function mostraNotas() {
    while (i < notas.length) {
        console.log(notas[i]);
        i++;
    }
}
