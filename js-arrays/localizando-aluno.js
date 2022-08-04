const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 9, 7 ,8] ;

let listaDeNotasEAlunos = [alunos, medias]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + " , sua média é " + listaDeNotasEAlunos[1][indice];
    } else {
        return 'Aluno não localizado.'
    }
}

console.log(exibeNomeNota('João'))