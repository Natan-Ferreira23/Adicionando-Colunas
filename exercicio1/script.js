var button = document.querySelector("button");
let cliques = 0;
let num = 1;
let linhaNova = criarLinha();
let linhaAntiga = linhaNova;
button.addEventListener('click', function () {
    if (cliques < 3) {
        cliques += 1;
        criarDiv();
        num++;
    } else {
        cliques = 1;
        linhaNova = criarLinha();
        linhaAntiga = linhaNova;
        criarDiv();
        num++;
    }


});

function criarDiv() {


    criaGrids(linhaAntiga);

}

function criarLinha() {
    let linha = document.createElement('div');
    linha.classList.add('row');
    return linha;
}
function criaGrids(linha) {
    let col = document.createElement('div');
    col.classList.add('col'); // Adiciona a classe 'col' à coluna

    // Cria um elemento h1 com o texto 'Olá mundo'
    let titulo = document.createElement('h1');
    titulo.textContent = 'Col ' + num;

    // Adiciona o elemento h1 à coluna
    col.appendChild(titulo);

    // Adiciona a coluna à linha

    linha.appendChild(col);

    // Adiciona a linha ao corpo do documento
    document.body.appendChild(linha);
}




