const arrayNums = [1, 2, 3, 4];

function multiplicaNumeros(numero) {
    return numero * 10;
}

const arrayNova = arrayNums.map(numero => multiplicaNumeros(numero));

console.log(arrayNova)