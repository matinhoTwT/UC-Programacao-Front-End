// 1. Declaração de Função

soma(5,5);

/**
 * 
 * @param {number} a Primeiro número a ser somado
 * @param {number} b Segundo número a ser somado
 * @returns 
 */
function soma(a, b) {
    return a + b;
}

soma(10, 20);
soma(4, 8);


function media(n1, n2, n3 = 5) {
    return (n1 + n2 + n3) / 3;
}

console.log( media(10, 8) )
console.log( media(10, 8, 6) )
console.log( media(10, 8, 6, 9) )


function boasVindas(nome) {
    let contagem = 0;
    let mensagemPadrao  = 'Olá, seja bem-vindo, ';

    // Declaração
    return function exibirMensagem() {
        contagem++;
        console.log(`${mensagemPadrao} ${nome}`);
        console.log(`Esta é a minha saudação de número #${contagem}`);
    }
}

const saudacao = boasVindas('Alan');
console.log(typeof saudacao);
saudacao();
saudacao();
saudacao();
saudacao();
// console.log(mensagemPadrao);





