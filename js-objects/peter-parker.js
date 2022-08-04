const parker = {
    nome: "Peter Parker",
    identidadeDeHeroi: "Homem Aranha",
    quantosFilmesApareceu: 6,
    status: "Vivo",
    forca: 1500
}

const informacoes = ["nome", "identidadeDeHeroi", "quantosFilmesApareceu", "status", "forca"];

informacoes.forEach(infos => console.log(parker[infos]));
