function Cliente(nome,cpf,email,saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const enzo = new Cliente('Enzo', '50119642808', 'Japanakah@outlook.com', 100)

console.log(enzo)

enzo.depositar(100);

console.log(enzo)
