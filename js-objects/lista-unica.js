const clientes = [
    {
        nome: "André",
        idade: 36,
        cpf: "31958187803",
        email:"andre@email.com",
        fones: ["823495473", "945867234"],
        dependentes: [{
            nome: 'Sara',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        },
        {  
            nome: 'Samia Maria',
            parentesco: 'Filha',
            dataNasc: '04/01/2014'
        }],
    },
    {
        nome: "Juliana",
        idade: 36,
        cpf: "34663578935",
        email:"juliana@email.com",
        fones: ["5536436543645", "55365525783456"],
        dependentes: [{
            nome: 'Sophia',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }]
    }
]

const listaDeClientes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDeClientes)