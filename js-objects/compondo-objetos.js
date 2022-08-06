const cliente = {
    nome: "André",
    idade: 36,
    cpf: "31958187803",
    email:"andre@email.com",
    fones: ["823495473", "945867234"],
    dependentes: [{
        nome: 'Sara',
        parentesco: 'filha',
        dataNasc: '04/01/2014',
        mesada: 0,
        darMesada: function(adicional) 
        {
        this.mesada += adicional;
        }
    },
    {  
        nome: 'Samia Maria',
        parentesco: 'Filha',
        dataNasc: '04/01/2014',
        mesada: 0,
        darMesada: function(adicional) 
        {
        this.mesada += adicional;
        }
    }],
    saldo: 100,

    depositar: function(valor) 
    {
        this.saldo += valor;
    }
}
/* console.log(cliente.saldo);
cliente.depositar(20);
console.log(cliente.saldo); */

cliente.dependentes.forEach((_, index) => {
    console.log(cliente.dependentes[index].mesada);
})
cliente.dependentes.forEach((_, index) => {
    cliente.dependentes[index].darMesada(20);
});
cliente.dependentes.forEach((_, index) => {
    console.log(cliente.dependentes[index].mesada);
})