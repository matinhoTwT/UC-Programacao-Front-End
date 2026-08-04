// === While ===
// 1) Números de 1 a 100
function mostrar1a100While() {
    let i = 1;
    while (i <= 100) {
        console.log(i);
        i++;
    }
}

// 2) Fizz/Buzz (com while)
function fizzBuzzWhile() {
    let i = 1;
    while (i <= 100) {
        if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i);
        i++;
    }
}

// 3) Exibir 0 a n (n inserido pelo usuário)
function mostrar0aN() {
    const entrada = prompt('Digite um número inteiro n (>= 0):');
    const n = Number(entrada);
    if (Number.isNaN(n) || n < 0) {
        console.log('Entrada inválida.');
        return;
    }
    let i = 0;
    while (i <= n) {
        console.log(i);
        i++;
    }
}

// === Do...while ===
// 1) Solicitar 0 ou 1
function solicitarZeroOuUm() {
    let valido = false;
    let valor;
    do {
        const entrada = prompt('Digite 0 ou 1:');
        if (entrada === null) { console.log('Cancelado'); return; }
        if (!/^-?\d+$/.test(entrada)) {
            alert('Apenas números são aceitos.');
            continue;
        }
        valor = Number(entrada);
        if (valor === 0 || valor === 1) valido = true;
    } while (!valido);
    console.log('Valor aceito:', valor);
}

// 2) Solicitar senha até correto
function solicitarSenhaDoWhile() {
    const senha = '1234';
    let tentativa;
    do {
        tentativa = prompt('Digite a senha:');
        if (tentativa === null) { console.log('Cancelado'); return; }
    } while (tentativa !== senha);
    console.log('Senha correta.');
}

// 3) Solicitar 5 números e exibir o maior
function maiorDeCincoDoWhile() {
    let count = 0;
    let maior = -Infinity;
    do {
        const entrada = prompt(`Digite o número ${count + 1} de 5:`);
        const n = Number(entrada);
        if (Number.isNaN(n)) { alert('Entrada inválida'); continue; }
        if (n > maior) maior = n;
        count++;
    } while (count < 5);
    console.log('Maior número informado:', maior);
}

// === For ===
// 1) Exibir 0 a 100
function mostrar0a100For() {
    for (let i = 0; i <= 100; i++) console.log(i);
}

// 2) Média de peso de 10 pessoas
function mediaPesos10() {
    let soma = 0;
    for (let i = 0; i < 10; i++) {
        const entrada = prompt(`Informe o peso da pessoa ${i + 1}:`);
        const p = Number(entrada);
        if (Number.isNaN(p)) { alert('Entrada inválida'); i--; continue; }
        soma += p;
    }
    console.log('Média de peso:', soma / 10);
}

// 3) Contar quantos dos 10 números são maiores que 50
function contarMaioresQue50() {
    let contador = 0;
    for (let i = 0; i < 10; i++) {
        const entrada = prompt(`Digite o número ${i + 1}:`);
        const n = Number(entrada);
        if (Number.isNaN(n)) { alert('Entrada inválida'); i--; continue; }
        if (n > 50) contador++;
    }
    console.log('Quantidade > 50:', contador);
}

// === Complementares ===
// 1) Soma de 0 até n
function soma0aN() {
    const entrada = prompt('Informe um número inteiro n (>1):');
    const n = Number(entrada);
    if (Number.isNaN(n) || n <= 1) { console.log('Entrada inválida'); return; }
    let soma = 0;
    for (let i = 0; i <= n; i++) soma += i;
    console.log(`Soma de 0 a ${n}:`, soma);
}

// 2) Soma de dois números até que digite "encerrar"
function somaAteEncerrar() {
    while (true) {
        const a = prompt('Digite o primeiro número (ou "encerrar" para sair):');
        if (a === null || a.toLowerCase() === 'encerrar') { console.log('Encerrado'); return; }
        const b = prompt('Digite o segundo número:');
        if (b === null) { console.log('Cancelado'); return; }
        const na = Number(a);
        const nb = Number(b);
        if (Number.isNaN(na) || Number.isNaN(nb)) { alert('Entradas inválidas'); continue; }
        console.log(`Soma: ${na + nb}`);
    }
}

// 3) Ler 5 números e identificar maior e menor
function maiorEMenor5() {
    const nums = [];
    for (let i = 0; i < 5; i++) {
        const entrada = prompt(`Digite o número ${i + 1}:`);
        const n = Number(entrada);
        if (Number.isNaN(n)) { alert('Entrada inválida'); i--; continue; }
        nums.push(n);
    }
    const maior = Math.max(...nums);
    const menor = Math.min(...nums);
    console.log('Maior:', maior, 'Menor:', menor);
}

// 4) Tabuada de um número
function tabuada() {
    const entrada = prompt('Digite um número para ver a tabuada:');
    const n = Number(entrada);
    if (Number.isNaN(n)) { console.log('Entrada inválida'); return; }
    for (let i = 1; i <= 10; i++) console.log(`${n} x ${i} = ${n * i}`);
}

// 5) Ler 20 números e contar intervalos
function contarIntervalos20() {
    let a = 0, b = 0, c = 0;
    for (let i = 0; i < 20; i++) {
        const entrada = prompt(`Digite o número ${i + 1}:`);
        const n = Number(entrada);
        if (Number.isNaN(n)) { alert('Entrada inválida'); i--; continue; }
        if (n >= 0 && n <= 100) a++;
        else if (n >= 101 && n <= 200) b++;
        else if (n > 200) c++;
    }
    console.log('0-100:', a, '101-200:', b, '>200:', c);
}

// 6) Soma até número negativo
function somaAteNegativo() {
    let soma = 0;
    while (true) {
        const entrada = prompt('Digite um número (negativo para encerrar):');
        if (entrada === null) { console.log('Cancelado'); return; }
        const n = Number(entrada);
        if (Number.isNaN(n)) { alert('Entrada inválida'); continue; }
        if (n < 0) break;
        soma += n;
    }
    console.log('Soma obtida:', soma);
}

// 7) Senha com contagem de tentativas
function senhaComTentativas() {
    const senha = 'senha123';
    let tentativas = 0;
    let entrada;
    do {
        entrada = prompt('Digite a senha:');
        if (entrada === null) { console.log('Cancelado'); return; }
        if (entrada !== senha) tentativas++;
    } while (entrada !== senha);
    console.log('Senha correta. Tentativas incorretas:', tentativas);
}

// 8) Ler 10 números e contar pares
function contarPares10() {
    let pares = 0;
    for (let i = 0; i < 10; i++) {
        const entrada = prompt(`Digite o número ${i + 1}:`);
        const n = Number(entrada);
        if (Number.isNaN(n)) { alert('Entrada inválida'); i--; continue; }
        if (n % 2 === 0) pares++;
    }
    console.log('Quantidade de pares:', pares);
}

// 9) Sequência de Fibonacci (n primeiros)
function fibonacciN() {
    const entrada = prompt('Quantos termos da sequência Fibonacci deseja imprimir?');
    const n = Number(entrada);
    if (Number.isNaN(n) || n <= 0) { console.log('Entrada inválida'); return; }
    const seq = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) seq.push(0);
        else if (i === 1) seq.push(1);
        else seq.push(seq[i - 1] + seq[i - 2]);
    }
    console.log('Fibonacci:', seq.join(', '));
}

// === Desenhos ===
// 1) Triângulo
function desenharTriangulo(linhas = 5) {
    for (let i = 1; i <= linhas; i++) {
        console.log('# '.repeat(i).trim());
    }
}

// 2) Calendário simples (imprime um mês começando no dia de semana informado)
function imprimirCalendario(diasDoMes = 31, diaInicio = 0) {
    // diaInicio: 0 = Domingo, 1 = Segunda, ... mas exibiremos cabeçalho conforme pedido
    console.log(' S  T  Q  Q  S  S  D');
    let linha = '';
    // espaços iniciais
    for (let i = 0; i < diaInicio; i++) linha += '   ';
    for (let d = 1; d <= diasDoMes; d++) {
        linha += (d < 10 ? ' ' + d : d) + ' ';
        if ((d + diaInicio) % 7 === 0 || d === diasDoMes) {
            console.log(linha.trim());
            linha = '';
        }
    }
}
