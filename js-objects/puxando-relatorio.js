const cliente = {
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
    saldo: 100,

    depositar: function(valor) 
    {
        this.saldo += valor;
    }
}

let relatorio = ""

for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
    relatorio += `${info}, `
      }
}

console.log(relatorio)