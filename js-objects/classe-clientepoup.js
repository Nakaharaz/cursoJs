class Cliente{
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo) 
        this.saldoPoupanca = saldoPoupanca;
    }
    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
}

const enzo = new ClientePoupanca('Enzo', 'enzo@gmail.com', '012901291092', 100, 0);

console.log(enzo);

enzo.depositar(100);
enzo.depositarPoupanca(200);

console.log(enzo);