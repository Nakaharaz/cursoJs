<<<<<<< HEAD
const chalk = require('chalk')
const pegaArquivo = require('./index');

const caminho = process.argv;

async function processaTexto (caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);
    console.log(chalk.yellow('Lista de links'), resultado)
}

processaTexto(caminho)
=======
const chalk = require('chalk');
const pegaArquivo = require('./index');
const validaURLs = require('./http-validacao');

const caminho = process.argv;

console.log(caminho)

async function processaTexto(caminhoDeArquivo) {
  const resultado = pegaArquivo(caminhoDeArquivo[2]);
  if (caminho[3] === 'validar') {
    console.log(chalk.yellow('Links validados', validaURLs(resultado)))
  } else {
    console.log(chalk.yellow('lista de links'), resultado);
  }
}

processaTexto(caminho);
>>>>>>> 7a5c3e8480b49a2fbfbc6f7f563cbb73c25ed2c3
