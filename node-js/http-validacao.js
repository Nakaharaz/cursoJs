const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function checaStatus(arrayURLs) {

    const arrayStatus = await Promisse.all(arrayURLs.map(url => {
        const res = await fetch(url)
        return res.status;
    }))
    return arrayStatus;
}

function geraArrayDeURLs(arrayLinks) {
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join()) 
}

function validaURLs(arrayLinks) {
    return geraArrayDeURLs(arrayLinks);
}

module.exports = validaURLs;