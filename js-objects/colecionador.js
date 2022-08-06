const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipoColecao: ["quadrinhos"],
    contato: "joao@email.com",
    adicionarTipo: function(propriedade,tipo){
        if(typeof colecionador[propriedade] != "undefined") {
            this[propriedade].push(tipo);
        }
        if(typeof colecionador[propriedade] == "undefined") {
            colecionador[propriedade] = [];
            this[propriedade].push(tipo);
        }
    }
}

colecionador.adicionarTipo("Enzo","Nakahara")

for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipoColecao","HQ"+i)
}

console.log(colecionador)