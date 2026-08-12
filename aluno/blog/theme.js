function trocarCorFundo(cor) {
    document.body.style.backgroundColor = cor;
}

function trocarFonteTitulos(fonte) {
    const titulos = document.querySelectorAll('h1, h2');

    titulos.forEach((titulo) => {
        titulo.style.fontFamily = fonte;
    });
}

function removerMetaInformacoes() {
    const metas = document.querySelectorAll('.meta');

    metas.forEach((meta) => {
        meta.remove();
    });
}

function inserirTextoAntesDoPrimeiroParagrafo(texto) {
    const artigos = document.querySelectorAll('article');

    artigos.forEach((artigo) => {
        const primeiroParagrafo = artigo.querySelector('p:not(.meta)'); 

        if (primeiroParagrafo) {
            const marcador = document.createElement('span');
            marcador.className = 'prefixo';
            marcador.textContent = texto;

            primeiroParagrafo.insertBefore(marcador, primeiroParagrafo.firstChild);
        }
    });
}

function inserirAvisoNoTopo() {
    const main = document.querySelector('main');

    if (!main) {
        return;
    }

    const alerta = document.createElement('div');
    alerta.className = 'alert';

    const texto = document.createElement('p');
    texto.textContent = 'Atenção: os textos abaixo são excertos gerados com IA apenas porque são exemplos de preenchimento para uma atividade de programação. Leia, escreva, estude: não terceirize sua humanidade para uma máquina espertinha de autocompletar.';

    alerta.appendChild(texto);
    main.insertBefore(alerta, main.firstChild);
}

