// 1. Comparar dois produtos
const produto1 = {
  nome: "Leite",
  preco: 5.49,
  categoria: "Laticínios"
};

const produto2 = {
  nome: "Banana",
  preco: 4.99,
  categoria: "Hortifruti"
};

function produtoMaisCaro(produtoA, produtoB) {
  if (produtoA.preco > produtoB.preco) {
    console.log(`O produto mais caro é ${produtoA.nome}, da categoria ${produtoA.categoria}.`);
    return produtoA;
  } else if (produtoB.preco > produtoA.preco) {
    console.log(`O produto mais caro é ${produtoB.nome}, da categoria ${produtoB.categoria}.`);
    return produtoB;
  } else {
    console.log("Os produtos têm o mesmo preço.");
    return null;
  }
}

produtoMaisCaro(produto1, produto2);

// 2. Calcular a média do aluno
const aluno = {
  nome: "Maria",
  idade: 20,
  curso: "Front-end",
  notas: [8, 7, 9, 10]
};

function calcularMedia(alunoRecebido) {
  const soma = alunoRecebido.notas.reduce((acumulador, nota) => acumulador + nota, 0);
  alunoRecebido.media = soma / alunoRecebido.notas.length;
  console.log(`A média de ${alunoRecebido.nome} é ${alunoRecebido.media.toFixed(1)}.`);
  return alunoRecebido.media;
}

calcularMedia(aluno);

// 3. Exibir detalhes do carro e alterar opcionais
const carro = {
  nome: "Civic",
  cor: "Prata",
  modelo: "2024",
  opcionais: {
    "ar condicionado": true,
    "direção helétrica": false,
    multimídia: true
  }
};

function exibirDetalhesCarro(carroRecebido) {
  console.log(`Nome: ${carroRecebido.nome}`);
  console.log(`Cor: ${carroRecebido.cor}`);
  console.log(`Modelo: ${carroRecebido.modelo}`);
  console.log("Opcionais:");

  for (const opcional in carroRecebido.opcionais) {
    console.log(`- ${opcional}: ${carroRecebido.opcionais[opcional] ? "sim" : "não"}`);
  }
}

function alterarOpcional(carroRecebido, nomeOpcional, valor) {
  carroRecebido.opcionais[nomeOpcional] = valor;
  console.log(`O opcional "${nomeOpcional}" foi alterado para ${valor}.`);
}

exibirDetalhesCarro(carro);
alterarOpcional(carro, "direção helétrica", true);
exibirDetalhesCarro(carro);

// 4. Consolidar dados de vendas e estoque
const produtos_vendas = {
  cafes: [
    {
      sku: 7654,
      marca: "Povo Brasileiro",
      preco: 24.0,
      categoria: "Mercearia"
    },
    {
      sku: 8765,
      marca: "Soberano - Gourmet",
      preco: 29.0,
      categoria: "Mercearia"
    },
    {
      sku: 3467,
      marca: "Dose Certa",
      preco: 27.0,
      categoria: "Mercearia"
    }
  ]
};

const produtos_estoque = {
  cafes: [
    {
      sku: 3467,
      peso: 500.0,
      unidade: "mg",
      estoque: 101
    },
    {
      sku: 7654,
      peso: 250.0,
      unidade: "mg",
      estoque: 182
    },
    {
      sku: 8765,
      peso: 250.0,
      unidade: "mg",
      estoque: 46
    }
  ]
};

function consolidarProdutos(produtosVendas, produtosEstoque) {
  const produtosConsolidados = {};

  for (const categoria in produtosVendas) {
    produtosConsolidados[categoria] = produtosVendas[categoria].map((produtoVenda) => {
      const produtoEstoque = produtosEstoque[categoria].find((item) => item.sku === produtoVenda.sku);

      return {
        sku: produtoVenda.sku,
        marca: produtoVenda.marca,
        preco: produtoVenda.preco,
        categoria: produtoVenda.categoria,
        estoque: produtoEstoque ? produtoEstoque.estoque : null,
        peso: produtoEstoque ? produtoEstoque.peso : null,
        unidade: produtoEstoque ? produtoEstoque.unidade : null
      };
    });
  }

  console.log(produtosConsolidados);
  return produtosConsolidados;
}

consolidarProdutos(produtos_vendas, produtos_estoque);

// 5. Carrinho de compras com métodos
const carrinho = {
  cliente: "Alice",
  itens: [{ nome: "Smartphone", preco: 2200, quantidade: 1 }],
  cupons: ["MENOS10", "PROMO10", "10PORCENTO"]
};

carrinho.adicionarProduto = function (nome, preco, quantidade) {
  const produtoExistente = this.itens.find((item) => item.nome === nome);

  if (produtoExistente) {
    produtoExistente.quantidade += quantidade;
  } else {
    this.itens.push({ nome, preco, quantidade });
  }

  console.log(`Produto ${nome} adicionado ao carrinho.`);
};

carrinho.calcularTotal = function () {
  const total = this.itens.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
  this.total = total;
  console.log(`Total do carrinho: R$ ${this.total.toFixed(2)}`);
  return this.total;
};

carrinho.aplicarDesconto = function (cupom) {
  if (this.cupons.includes(cupom)) {
    this.cupomUtilizado = cupom;
    this.total = this.total * 0.9;
    this.descontoAplicado = true;
    console.log(`Cupom ${cupom} aplicado com sucesso.`);
  } else {
    this.descontoAplicado = false;
    console.log("Cupom inválido.");
  }

  return this.total;
};

carrinho.exibirCupom = function () {
  console.log(`Cliente: ${this.cliente}`);
  console.log("Itens:");
  this.itens.forEach((item) => {
    console.log(`- ${item.nome} | qtd: ${item.quantidade} | preço: R$ ${item.preco.toFixed(2)}`);
  });
  console.log(`Total: R$ ${this.total.toFixed(2)}`);
  console.log(`Cupom aplicado: ${this.descontoAplicado ? this.cupomUtilizado : "nenhum"}`);
};

carrinho.adicionarProduto("Notebook", 3500, 1);
carrinho.adicionarProduto("Smartphone", 2200, 1);
carrinho.calcularTotal();
carrinho.aplicarDesconto("PROMO10");
carrinho.exibirCupom();
