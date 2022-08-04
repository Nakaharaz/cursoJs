const cliente = {
    nome: "André",
    idade: 36,
    cpf: "31958187803",
    email:"andre@email.com"
}

const chaves = ['nome', 'idade', 'cpf', 'email']

chaves.forEach(info => console.log(cliente[info]))