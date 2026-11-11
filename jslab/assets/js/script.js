/*const resumo = document.querySelector('#resumo');
console.log(resumo);
resumo.textContent = 
`${pedidos.length} pedidos encontrados`;*/
/*const titulo = document.querySelector("h1");
titulo.textContent =
"JSlab - Gestão de Pedidos";*/

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

const paragrafo = document.querySelector("p");
paragrafo.textContent = "Elemento criado com JavaScript";
console.log(paragrafo);

const lista = document.querySelector("#lista-pedidos");
lista.append(paragrafo);
