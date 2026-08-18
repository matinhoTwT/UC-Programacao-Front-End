// 1) Fila de atendimento
{
    const fila = ['Ana', 'Bruno', 'Carla'];
    // adiciona mais uma pessoa ao final
    fila.push('Diego');
    console.log('Fila atual (usando for):');
    for (let i = 0; i < fila.length; i++) {
        console.log(`${i + 1} - ${fila[i]}`);
    }
    // remove pessoa do início
    const removida = fila.shift();
    console.log('Pessoa removida do início da fila:', removida);
    console.log('Fila após remoção:');
    for (let i = 0; i < fila.length; i++) {
        console.log(`${i + 1} - ${fila[i]}`);
    }
}

// 2) Validação números: retorna um novo array somente com valores que são numbers
function filtrarNumeros(arr) {
    if (!Array.isArray(arr)) return [];
    const resultado = [];
    for (const v of arr) {
        if (typeof v === 'number' && !Number.isNaN(v)) resultado.push(v);
    }
    return resultado;
}

// Exemplo de uso:
console.log('Exemplo filtrarNumeros:', filtrarNumeros([1, '2', 3, NaN, 4.5, null]));

// 3) Histórico de pedidos: adiciona código de 4 dígitos, mantendo no máximo 10 elementos
function adicionarPedido(historico, codigo) {
    if (!Array.isArray(historico)) return null;
    // garante que código seja string de 4 dígitos
    const codigoStr = String(codigo).padStart(4, '0');
    if (historico.length >= 10) {
        historico.shift();
    }
    historico.push(codigoStr);
    return historico;
}

// Exemplo de uso:
const historicoPedidos = ['0001', '0002', '0003'];
adicionarPedido(historicoPedidos, '0004');
console.log('Histórico de pedidos:', historicoPedidos);

// 4) Lista de compras: gera uma string com itens separados por ", "
function gerarTextoCompras(itens) {
    if (!Array.isArray(itens)) return '';
    // filtra apenas strings válidas e remove entradas vazias
    const filtrados = itens.filter(i => typeof i === 'string' && i.trim() !== '');
    return filtrados.join(', ');
}

// Exemplo de uso:
console.log('Lista de compras:', gerarTextoCompras(['leite', 'pão', 'ovos']));
