/*const resumo = document.querySelector('#resumo');
console.log(resumo);
resumo.textContent = 
`${pedidos.length} pedidos encontrados`;*/
/*const titulo = document.querySelector("h1");
titulo.textContent =
"JSlab - Gestão de Pedidos";*/
function formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor);
}
function criarCardPedido(pedido){
    const artigo = document.createElement("article");
    const tituloCard = document.createElement("h3");

    tituloCard.textContent = `PS-${pedido.id}`;

    artigo.append(tituloCard);

    const cliente = document.createElement("p");
    cliente.textContent = pedido.cliente;
    artigo.append(cliente);

    const categoria = document.createElement("p");
    categoria.textContent =  `Categoria: ${pedido.categoria}`;
    artigo.append(categoria);

    const prioridade = document.createElement("p");
    prioridade.textContent = `Prioridade: ${pedido.prioridade}`;
    artigo.append(prioridade);

    const status = document.createElement("p");
    status.textContent = `Status: ${pedido.status}`;
    artigo.append(status);

    const valor = document.createElement("p");
    valor.textContent = `Valor: ${formatarMoeda(pedido.valor)}`;
    artigo.append(valor);

    return artigo;
}

function renderizarPedidos(listaPedidos) {
    const lista = document.querySelector("#lista-pedidos");

    lista.textContent = "";
    if (listaPedidos.length === 0) {
        const mensagem = document.createElement("p");
        mensagem.textContent = "Nenhum pedido encontrado.";
        lista.append(mensagem);
        return;
    }

    listaPedidos.forEach(pedido => {
        const artigo = criarCardPedido(pedido);
        lista.append(artigo);
    });
}
renderizarPedidos(pedidos)
function formatarMoeda(valor) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor);
}
console.log(formatarMoeda(850));
const elementos = document.querySelectorAll(".teste");
console.log(elementos);                          

elementos.forEach(elemento => {
    console.log(elemento.textContent);
});

const titulo = document.querySelector("h1");

titulo.classList.add("destaque");

const link = document.querySelector("#link-ajuda");

link.setAttribute("href", "https://example.com");

console.log(link.getAttribute("href"));

const paragrafo = document.createElement("p");
paragrafo.textContent = "Elemento criado com JavaScript";
console.log(paragrafo);

function criarCardPedido(pedido){
    const artigo = document.createElement("article");
    const tituloCard = document.createElement("h3");

    tituloCard.textContent = `PS-${pedido.id}`;

    artigo.append(tituloCard);

    const cliente = document.createElement("p");
    cliente.textContent = pedido.cliente;
    artigo.append(cliente);

    const categoria = document.createElement("p");
    categoria.textContent =  `Categoria: ${pedido.categoria}`;
    artigo.append(categoria);

    const prioridade = document.createElement("p");
    prioridade.textContent = `Prioridade: ${pedido.prioridade}`;
    artigo.append(prioridade);

    const status = document.createElement("p");
    status.textContent = `Status: ${pedido.status}`;
    artigo.append(status);

    const valor = document.createElement("p");
    valor.textContent = `Valor: ${formatarMoeda(pedido.valor)}`;
    artigo.append(valor);

    return artigo;
}

function renderizarPedidos(listaPedidos) {
    const lista = document.querySelector("#lista-pedidos");

    lista.textContent = "";
    if (listaPedidos.length === 0) {
        const mensagem = document.createElement("p");
        mensagem.textContent = "Nenhum pedido encontrado.";
        lista.append(mensagem);
        return;
    }

    listaPedidos.forEach(pedido => {
        const artigo = criarCardPedido(pedido);
        lista.append(artigo);
    });
} 

renderizarPedidos(pedidos);