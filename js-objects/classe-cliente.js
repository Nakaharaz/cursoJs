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

const enzo = new Cliente('Enzo', 'Japanakah@outlook.com', '50119642808', 100)

enzo.exibirSaldo()

