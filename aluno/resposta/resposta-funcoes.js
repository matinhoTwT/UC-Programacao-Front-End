// 1) Maior entre três números
function maiorDeTres(a, b, c) {
    const na = Number(a);
    const nb = Number(b);
    const nc = Number(c);
    if (Number.isNaN(na) || Number.isNaN(nb) || Number.isNaN(nc)) {
        console.log('Entrada inválida: um dos parâmetros não é número.');
        return null;
    }
    const maior = Math.max(na, nb, nc);
    console.log('Maior valor:', maior);
    return maior;
}

// Exemplo:
maiorDeTres(5, 12, 9);

// 2) concatenar3 com separador padrão
function concatenar3(p1, p2, p3, separador = ' | ') {
    return String(p1) + separador + String(p2) + separador + String(p3);
}

// Exemplo:
console.log(concatenar3('um', 'dois', 'três'));

// 3) Converter minutos para horas (retorna horas como número decimal)
function minutosParaHoras(minutos) {
    const m = Number(minutos);
    if (Number.isNaN(m)) return null;
    return m / 60;
}

// Exemplo:
console.log('90 minutos em horas:', minutosParaHoras(90));

// 4) Quantidade de gasolina para ida e volta
function retornarQuantidadeDeGasolina(kmDestino, consumoPor100km) {
    const km = Number(kmDestino);
    const consumo = Number(consumoPor100km);
    if (Number.isNaN(km) || Number.isNaN(consumo)) return null;
    const distanciaTotal = km * 2; // ida e volta
    const litrosNecessarios = (distanciaTotal * consumo) / 100;
    return litrosNecessarios;
}

// Exemplo:
console.log('Litros necessários:', retornarQuantidadeDeGasolina(150, 8));

// 5.1 Exibir produto com preço formatado
function exibirProdutoPreco(nome, preco) {
    const p = Number(preco);
    if (Number.isNaN(p) || typeof nome !== 'string') {
        console.log('Parâmetros inválidos.');
        return;
    }
    const formatted = p.toFixed(2).replace('.', ',');
    // cria uma linha com pontos até o preço (largura aproximada)
    const nomePontos = nome.padEnd(40, '.');
    console.log(`${nomePontos} R$ ${formatted}`);
}

// 5.2 Preço da parcela
function precoParcela(precoTotal, quantidadeParcelas = 1) {
    const total = Number(precoTotal);
    const parcelas = Number(quantidadeParcelas);
    if (Number.isNaN(total) || Number.isNaN(parcelas) || parcelas < 1) return null;
    if (parcelas > 12) return total;
    return total / parcelas;
}

// 5.3 Aplicar desconto
function aplicarDesconto(valorTotal, desconto) {
    const total = Number(valorTotal);
    const d = Number(desconto);
    if (Number.isNaN(total) || Number.isNaN(d)) return null;
    const resultado = total - d;
    return resultado > 0 ? resultado : 0;
}

// 5.4 Aplicar cupom de desconto
function aplicarCupomDeDesconto(valorTotal, cupom) {
    if (typeof cupom !== 'string') return valorTotal;
    switch (cupom) {
        case 'CUPOM50':
            return aplicarDesconto(valorTotal, 50);
        case 'CUPOM100':
            return aplicarDesconto(valorTotal, 100);
        case 'CUPOM200':
            return aplicarDesconto(valorTotal, 200);
        default:
            return valorTotal;
    }
}

// Exemplos:
exibirProdutoPreco('Jaqueta Jeans', 220);
console.log('Preço da parcela (R$ 1200, 6x):', precoParcela(1200, 6));
console.log('Aplicar desconto (R$200, desconto 50):', aplicarDesconto(200, 50));
console.log('Aplicar cupom (R$500, CUPOM100):', aplicarCupomDeDesconto(500, 'CUPOM100'));

