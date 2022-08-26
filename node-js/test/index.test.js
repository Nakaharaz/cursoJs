const pegaArquivo = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('Deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });
    it('Deve retornar array com resultados::', async () => {
        const resultado = await pegaArquivo('/Users/Japan/Documents/js/node-js/test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResult)
    });
    it('Deve retornar mensagem "Não existem links"', async () => {
        const resultado = await pegaArquivo('/Users/Japan/Documents/js/node-js/test/arquivos/texto1SemLinks.md')
        expect(resultado).toBe('Não existem links');
    })
})