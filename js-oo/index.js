import User from './user.js';
import Admin from './admin.js';
import Docente from './docente.js';

// const novoUser = new User('Mykelly', 'm@m.com.br', '04/07/2006');
// console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Enzo', 'e@e', '07/05/2004',);
console.log(novoAdmin.nome)
novoAdmin.nome = 'André'
console.log(novoAdmin.nome) 