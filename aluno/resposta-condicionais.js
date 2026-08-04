// 1) Verifica se um número está entre mínimo e máximo (excluindo os extremos)
{
    const minimo = 10;
    const maximo = 20;
    const entrada = prompt(`Exercício 1 - Digite um número entre ${minimo} e ${maximo} (excluindo extremos):`);
    const numero = Number(entrada);
    if (Number.isNaN(numero)) {
        alert('Entrada inválida: não é um número.');
    } else {
        const entre = numero > minimo && numero < maximo;
        alert(`O número ${numero} está entre ${minimo} e ${maximo}? ${entre ? 'Sim' : 'Não'}`);
    }
}

// 2) Verifica se a senha informada é igual à senha armazenada
{
    const senhaArmazenada = 'senhaSegura123';
    const senha = prompt('Exercício 2 - Digite a senha:');
    if (senha === null) {
        alert('Operação cancelada.');
    } else {
        alert(senha === senhaArmazenada ? 'Senha correta.' : 'Senha incorreta.');
    }
}

// 3) Consórcio: idade >= 18 e renda mensal >= 2 salários mínimos
{
    const idadeStr = prompt('Exercício 3 - Informe sua idade:');
    const rendaStr = prompt('Informe sua renda mensal (R$):');
    const salarioMinimoStr = prompt('Informe o valor do salário mínimo atual (ou deixe vazio para usar R$1212):');
    const idade = Number(idadeStr);
    const renda = Number(rendaStr);
    const salarioMinimo = salarioMinimoStr ? Number(salarioMinimoStr) : 1212;
    if (Number.isNaN(idade) || Number.isNaN(renda) || Number.isNaN(salarioMinimo)) {
        alert('Entradas inválidas.');
    } else {
        const apto = idade >= 18 && renda >= 2 * salarioMinimo;
        alert(apto ? 'Apto a realizar consórcio.' : 'Não apto a realizar consórcio.');
    }
}

// 4) Concurso para professor: calcular pontuação por experiência e formação
{
    const expStr = prompt('Exercício 4 - Quantos anos de experiência você tem?');
    const formacao = prompt('Qual sua formação? (graduação / especialização / mestrado / doutorado)');
    const exp = Number(expStr);
    if (Number.isNaN(exp) || !formacao) {
        alert('Entrada inválida.');
    } else {
        const pontosExp = exp < 5 ? 10 : 20;
        const f = formacao.trim().toLowerCase();
        let pontosFormacao = 0;
        if (f === 'graduação' || f === 'graduacao' || f === 'graduaçao') pontosFormacao = 10;
        else if (f === 'especialização' || f === 'especializacao') pontosFormacao = 20;
        else if (f === 'mestrado') pontosFormacao = 30;
        else if (f === 'doutorado') pontosFormacao = 40;
        else pontosFormacao = 0;
        alert(`Pontuação total: ${pontosExp + pontosFormacao} pontos.`);
    }
}

// 5) Verifica se nota está entre 7.0 e 10.0
{
    const notaStr = prompt('Exercício 5 - Digite uma nota (0.0 a 10.0):');
    const nota = Number(notaStr);
    if (Number.isNaN(nota)) {
        alert('Entrada inválida.');
    } else {
        const ok = nota >= 7.0 && nota <= 10.0;
        alert(ok ? 'Aprovado (nota entre 7.0 e 10.0).' : 'Nota fora do intervalo de aprovação.');
    }
}

// 6) Determina se uma letra é vogal ou consoante
{
    const letra = prompt('Exercício 6 - Digite uma letra:');
    if (!letra || letra.length !== 1 || /[^a-zA-Z]/.test(letra)) {
        alert('Entrada inválida. Digite uma única letra.');
    } else {
        const l = letra.toLowerCase();
        const vogais = ['a', 'e', 'i', 'o', 'u'];
        alert(vogais.includes(l) ? 'Vogal.' : 'Consoante.');
    }
}

// 7) Par/Ímpar e Negativo/Positivo
{
    const nStr = prompt('Exercício 7 - Digite um número inteiro:');
    const n = Number(nStr);
    if (Number.isNaN(n)) {
        alert('Entrada inválida.');
    } else {
        const parImpar = n % 2 === 0 ? 'Par' : 'Ímpar';
        const sinal = n > 0 ? 'Positivo' : n < 0 ? 'Negativo' : 'Zero (neutro)';
        alert(`${n} é ${parImpar} e ${sinal}.`);
    }
}

// 8) Financiamento de veículo: idade >=21 e renda >= R$3000
{
    const idadeStr8 = prompt('Exercício 8 - Informe sua idade:');
    const rendaStr8 = prompt('Informe sua renda mensal (R$):');
    const idade8 = Number(idadeStr8);
    const renda8 = Number(rendaStr8);
    if (Number.isNaN(idade8) || Number.isNaN(renda8)) {
        alert('Entradas inválidas.');
    } else {
        const apto8 = idade8 >= 21 && renda8 >= 3000;
        alert(apto8 ? 'Apto para financiamento de veículo.' : 'Não apto para financiamento de veículo.');
    }
}

// 9) Bolsa de estudos: calcula pontuação por renda e média
{
    const rendaStr9 = prompt('Exercício 9 - Informe a renda familiar (R$):');
    const mediaStr9 = prompt('Exercício 9 - Informe a média acadêmica (0.0 a 10.0):');
    const renda9 = Number(rendaStr9);
    const media9 = Number(mediaStr9);
    if (Number.isNaN(renda9) || Number.isNaN(media9)) {
        alert('Entradas inválidas.');
    } else {
        let pontosRenda = 0;
        if (renda9 <= 2000) pontosRenda = 30;
        else if (renda9 <= 4000) pontosRenda = 20;
        else pontosRenda = 10;

        let pontosMedia = 0;
        if (media9 <= 6.9) pontosMedia = 5;
        else if (media9 <= 8.4) pontosMedia = 15;
        else pontosMedia = 25;

        const total = pontosRenda + pontosMedia;
        alert(`Pontuação total para bolsa: ${total} pontos.`);
    }
}
