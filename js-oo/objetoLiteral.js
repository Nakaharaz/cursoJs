const user = {
    nome: 'Enzo',
    email: 'Enzonakahara@gmail.com',
    nascimento: '07/05/2004',
    role: 'Estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email, this.nascimento, this.role)
    }
}

const admin = {
    nome: 'Ana',
    email: 'a@a.com',
    role: 'Admin',
    criarCurso() {
        console.log('Curso criado!')
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();