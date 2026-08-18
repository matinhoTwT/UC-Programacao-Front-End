const balao = document.getElementById('balao');

const TAMANHO_INICIAL = 100;
const TAMANHO_MAXIMO = 300;

let tamanhoAtual = TAMANHO_INICIAL;
balao.style.fontSize = `${tamanhoAtual}px`;

function manipularTecla(evento) {
  if (evento.key === 'ArrowUp') {
    evento.preventDefault(); 
    tamanhoAtual *= 1.1; 

    if (tamanhoAtual > TAMANHO_MAXIMO) {
      explodirBalao();
      return;
    }

    balao.style.fontSize = `${tamanhoAtual}px`;
  } else if (evento.key === 'ArrowDown') {
    evento.preventDefault(); 
    tamanhoAtual *= 0.9; 
    balao.style.fontSize = `${tamanhoAtual}px`;
  }
}

function explodirBalao() {
  balao.textContent = '💥';
  document.removeEventListener('keydown', manipularTecla);
}

document.addEventListener('keydown', manipularTecla);