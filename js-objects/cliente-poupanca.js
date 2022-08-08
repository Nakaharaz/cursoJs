function Cliente(nome,cpf,email,saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup
}

const ana = new ClientePoupanca('Ana', '34028329302', 'anaju.oneck@gmail.com', 100, 200);

console.log(ana)

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor;
}

ana.depositarPoup(30)

console.log(ana.saldoPoup)