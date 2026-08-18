const btnGato = document.getElementById('btn-gato');
const btnCao = document.getElementById('btn-cao');
const btnBackground = document.getElementById('btn-background');

const imagemPet = document.getElementById('imagem-pet');
const tituloPet = document.getElementById('titulo-pet');

const fotoCachorro = 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400';
const fotoGato = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400';

const cores = ['#06F874', '#8706f8', '#f806a7', '#f80606', '#f8e806'];
let indiceCorAtual = 0;

btnCao.addEventListener('click', () => {
  imagemPet.src = fotoCachorro;
  imagemPet.alt = 'Foto de um cachorro';
  tituloPet.textContent = 'Cachorrinho';
});

btnGato.addEventListener('click', () => {
  imagemPet.src = fotoGato;
  imagemPet.alt = 'Foto de um gato';
  tituloPet.textContent = 'Gatinho';
});

btnBackground.addEventListener('click', () => {
  indiceCorAtual = (indiceCorAtual + 1) % cores.length;
  document.body.style.backgroundColor = cores[indiceCorAtual];
});