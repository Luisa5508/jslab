// ===== for: de 1 até 10 =====
// let i = 1 (início) | i <= 10 (continua) | i++ (atualiza)
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// ===== for: só os pares de 2 até 10 =====
for (let i = 2; i <= 10; i += 2) { // pula de 2 em 2
    console.log(i);
}

// ===== for com cálculo (soma de 1 a 5) =====
let soma = 0;
for (let i = 1; i <= 5; i++) {
    soma = soma + i; // acumula o valor
}
console.log(soma); // 15

// ===== for + if: pares de 1 até 20 =====
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) { // resto 0 = par
        console.log(i);
    }
}

// ===== while =====
let contador = 1;
while (contador <= 5) {
    console.log(contador);
    contador++; // sem isso, a repetição seria infinita!
}

// ===== Exercício: processando pedidos =====
const quantidadePedidos = 8;
for (let pedido = 1; pedido <= quantidadePedidos; pedido++) {
    console.log(`Processando pedido ${pedido}`);
}

// ===== Exercício: contagem regressiva =====
let regressivo = 10;
while (regressivo >= 1) {
    console.log(regressivo);
    regressivo--; // diminui 1 a cada volta
}
console.log("Fim");
// ===== Arrays =====
const categorias = ["Infraestrutura", "Software", "Hardware", "Rede"];
console.log(categorias);

// Índices começam em 0
console.log(categorias[0]); // Infraestrutura
console.log(categorias[1]); // Software

// length = quantidade de elementos
console.log(categorias.length); // 4

// Último elemento: length - 1
const ultimaCategoria = categorias[categorias.length - 1];
console.log(ultimaCategoria);

// push adiciona no final / pop remove o último
categorias.push("Segurança");
console.log(categorias);
const removida = categorias.pop();
console.log(removida); // Segurança

// Percorrendo com for
for (let i = 0; i < categorias.length; i++) {
    console.log(categorias[i]);
}

// Percorrendo com forEach (executa a função para cada elemento)
categorias.forEach(categoria => {
    console.log(categoria);
});

// ===== Objeto: agrupa dados de uma mesma entidade =====
const pedido = {
    id: 1042,
    cliente: "Clínica Central",
    prioridade: "alta",
    status: "aberto"
};
console.log(pedido.id);
console.log(pedido.cliente);

// const não impede alterar o conteúdo do objeto
pedido.status = "atendimento";
console.log(pedido);
// pedido = { id: 2000 }; // ERRO: const não aceita reatribuição

// ===== Array de objetos (estrutura muito comum) =====
const pedidos = [
    { id: 1042, cliente: "Clínica Central", prioridade: "alta", status: "atendimento", valor: 850 },
    { id: 1043, cliente: "Loja Horizonte", prioridade: "normal", status: "aberto", valor: 420 },
    { id: 1044, cliente: "Escritório Almeida", prioridade: "urgente", status: "aberto", valor: 1200 }
];

// O id distingue cada registro
pedidos.forEach(pedido => {
    console.log(`${pedido.id} - ${pedido.cliente}`);
});

// ===== Desestruturação: extrai propriedades =====
const { id, cliente } = pedidos[0];
console.log(id, cliente);

pedidos.forEach(pedido => {
    const { id, cliente, status } = pedido;
    console.log(`${id} - ${cliente} - ${status}`);
});
// ===== find: primeiro elemento que atende à condição =====
const pedidoEncontrado = pedidos.find(pedido => pedido.id === 1043);
console.log(pedidoEncontrado);
console.log(pedidos.find(pedido => pedido.id === 9999)); // undefined

function buscarPedidoPorId(id) {
    return pedidos.find(pedido => pedido.id === id);
}
console.log(buscarPedidoPorId(1042));
console.log(buscarPedidoPorId(9999));

// ===== findIndex: posição (ou -1 se não achar) =====
console.log(pedidos.findIndex(pedido => pedido.id === 1043)); // 1
console.log(pedidos.findIndex(pedido => pedido.id === 9999)); // -1

// ===== filter: TODOS que atendem (devolve um array) =====
const pedidosAbertos = pedidos.filter(pedido => pedido.status === "aberto");
console.log(pedidosAbertos);

function filtrarPorPrioridade(prioridade) {
    return pedidos.filter(pedido => pedido.prioridade === prioridade);
}
console.log(filtrarPorPrioridade("alta"));
console.log(filtrarPorPrioridade("urgente"));

// ===== map: transforma uma coleção em outra =====
const nomesClientes = pedidos.map(pedido => pedido.cliente);
console.log(nomesClientes);

const resumos = pedidos.map(pedido => `${pedido.id} - ${pedido.cliente}`);
console.log(resumos);

// ===== includes: texto contém outro texto? (diferencia maiúsculas) =====
const texto = "Clínica Central";
console.log(texto.includes("Central")); // true
console.log(texto.includes("central")); // false

// Sem diferenciar maiúsculas: normaliza com toLowerCase
console.log(texto.toLowerCase().includes("central")); // true

// ===== Pesquisa em cliente, status e prioridade =====
function pesquisarPedidos(termo) {
    const termoNormalizado = termo.toLowerCase();

    return pedidos.filter(pedido =>
        pedido.cliente.toLowerCase().includes(termoNormalizado) ||
        pedido.status.toLowerCase().includes(termoNormalizado) ||
        pedido.prioridade.toLowerCase().includes(termoNormalizado)
    );
}
console.log(pesquisarPedidos("central"));
console.log(pesquisarPedidos("aberto"));
console.log(pesquisarPedidos("xyz")); // []
// ===== sort MODIFICA o array original =====
// (a, b) => a.valor - b.valor  → crescente

// ===== Spread: copia o array antes de ordenar =====
const pedidosOrdenados = [...pedidos];
pedidosOrdenados.sort((a, b) => a.valor - b.valor);

// ===== Funções de ordenação (não alteram o original) =====
function ordenarPorValorCrescente() {
    return [...pedidos].sort((a, b) => a.valor - b.valor);
}

function ordenarPorValorDecrescente() {
    return [...pedidos].sort((a, b) => b.valor - a.valor);
}

function ordenarPorCliente() {
    // localeCompare compara textos (respeita acentos)
    return [...pedidos].sort((a, b) => a.cliente.localeCompare(b.cliente));
}

console.log(ordenarPorValorCrescente());
console.log(ordenarPorValorDecrescente());
console.log(ordenarPorCliente());

// ===== Combinando operações =====
const resultado = pedidos
    .filter(pedido => pedido.status === "aberto")
    .filter(pedido => pedido.valor >= 500);
console.log(resultado);

// ===== Exercício: prioridade + valor mínimo, ordenado =====
function filtrarPorPrioridadeEValor(prioridade, valorMinimo) {
    return pedidos
        .filter(pedido =>
            pedido.prioridade === prioridade && pedido.valor >= valorMinimo
        )
        .sort((a, b) => a.valor - b.valor); // sort aqui é seguro: filter já criou um array novo
}
console.log(filtrarPorPrioridadeEValor("urgente", 500));

// ===== Intl: formatação só na apresentação =====
const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});
console.log(formatadorMoeda.format(850)); // R$ 850,00

// O objeto continua guardando número; formata só ao exibir
pedidos.forEach(pedido => {
    const valorFormatado = formatadorMoeda.format(pedido.valor);
    console.log(`${pedido.cliente} - ${valorFormatado}`);
});
// ===== Catálogo: 6 pedidos, com categoria e valores variados =====
const catalogo = [
    { id: 1, cliente: "Clínica Central", categoria: "Software", prioridade: "alta", status: "atendimento", valor: 850 },
    { id: 2, cliente: "Loja Horizonte", categoria: "Hardware", prioridade: "normal", status: "aberto", valor: 420 },
    { id: 3, cliente: "Escritório Almeida", categoria: "Rede", prioridade: "urgente", status: "aberto", valor: 1200 },
    { id: 4, cliente: "Padaria Estrela", categoria: "Software", prioridade: "normal", status: "concluido", valor: 420 }, // valor repetido de propósito
    { id: 5, cliente: "Colégio Aurora", categoria: "Infraestrutura", prioridade: "alta", status: "aberto", valor: 2300 },
    { id: 6, cliente: "Mercado Bom Preço", categoria: "Segurança", prioridade: "urgente", status: "atendimento", valor: 975 }
];

// Localizar por id
function localizarPorId(id) {
    return catalogo.find(p => p.id === id);
}

// Pesquisar por texto (cliente, categoria, status, prioridade)
function pesquisarCatalogo(termo) {
    const t = termo.toLowerCase();
    return catalogo.filter(p =>
        p.cliente.toLowerCase().includes(t) ||
        p.categoria.toLowerCase().includes(t) ||
        p.status.toLowerCase().includes(t) ||
        p.prioridade.toLowerCase().includes(t)
    );
}

// Filtros
function filtrarPorStatus(status) {
    return catalogo.filter(p => p.status === status);
}
function filtrarPorPrioridadeCatalogo(prioridade) {
    return catalogo.filter(p => p.prioridade === prioridade);
}

// Ordenações (copiam antes de ordenar)
function ordenarCatalogoPorValor() {
    return [...catalogo].sort((a, b) => a.valor - b.valor);
}
function ordenarCatalogoPorCliente() {
    return [...catalogo].sort((a, b) => a.cliente.localeCompare(b.cliente));
}

// Resumo formatado
const moeda = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
function gerarResumo(lista) {
    return lista.map(p => `#${p.id} | ${p.cliente} | ${p.status} | ${moeda.format(p.valor)}`);
}

// ===== Testes (inclui casos SEM resultado) =====
console.log(localizarPorId(3));
console.log(localizarPorId(999));                 // undefined
console.log(pesquisarCatalogo("CENTRAL"));        // maiúsculas
console.log(pesquisarCatalogo("nada"));           // []
console.log(filtrarPorStatus("cancelado"));       // []
console.log(filtrarPorPrioridadeCatalogo("alta"));
console.log(ordenarCatalogoPorValor());           // ids 2 e 4 têm o mesmo valor
console.log(ordenarCatalogoPorCliente());
console.log(gerarResumo(catalogo));