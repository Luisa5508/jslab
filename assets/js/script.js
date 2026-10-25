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