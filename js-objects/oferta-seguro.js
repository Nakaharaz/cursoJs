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

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Envia oferta de seguro para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)