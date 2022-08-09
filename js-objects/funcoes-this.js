class Integrante {
    constructor(nome, idade, posicao, aniversario) {
        this.nome = nome;
        this.idade = idade;
        this.posicao = posicao;
        this.aniversario = aniversario;
    }
}

const casa = {
    enzo: { 
        dados: new Integrante('Enzo', 18, 'Filho Mais Velho', '07/05/2004'),
        apresenta: function() {
            console.log(`Olá, meu nome é ${this.dados.nome}`)
        }
    },
    eduardo: new Integrante('Eduardo', 16, 'Filho Do Meio', '17/04/2006'),
}

function imprimeNome(tipoCliente, cidade) {
    console.log(`Cliente ${tipoCliente} da filial de ${cidade} - Nome: ${this.nome}. E-mail: ${this.email}`)
}

const clienteJose = {
    nome: 'José',
    email: 'jose@email.com',
}



const tipoJose = ['brabo', 'Rio de Janeiro']

imprimeNome.apply(clienteJose, tipoJose)