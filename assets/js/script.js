console.log("JavaScript carregado com sucesso!")
// ===== Teste inicial =====
console.log("JavaScript carregado com sucesso!");

// ===== let: valor pode mudar =====
let quantidade = 3;
console.log(quantidade);
quantidade = 5; // reatribuição permitida com let
console.log(quantidade);

// ===== const: valor não muda =====
const nomeCurso = "Desenvolvimento de Interfaces Web";
console.log(nomeCurso);
// const instituicao = "PUC Minas";
// instituicao = "Outra"; // dá erro! (teste e depois apague/comente)

// ===== Tipos de dados =====
const nome = "Carlos";        // string
const idade = 24;             // number
const aprovado = true;        // boolean
const endereco = undefined;   // valor não definido
const observacao = null;      // ausência intencional

console.log(typeof nome);     // "string"
console.log(typeof idade);    // "number"
console.log(typeof aprovado); // "boolean"

// ===== Template literal (usa crases e ${}) =====
const mensagem = `Nome: ${nome} | Idade: ${idade}`;
console.log(mensagem);

// ===== Operações aritméticas =====
const a = 10;
const b = 3;
console.log(a + b); // soma
console.log(a - b); // subtração
console.log(a * b); // multiplicação
console.log(a / b); // divisão
console.log(a % b); // resto da divisão

// ===== Ordem das operações =====
console.log(10 + 5 * 2);   // 20 (multiplica primeiro)
console.log((10 + 5) * 2); // 30 (parênteses primeiro)

// ===== Operadores relacionais (resultam em true/false) =====
const idadeUsuario = 18;
console.log(idadeUsuario > 18);  // false
console.log(idadeUsuario >= 18); // true

// ===== Igualdade estrita =====
console.log(10 === 10);   // true
console.log(10 === "10"); // false (number x string)
console.log(10 !== 10);   // false

// ===== Operadores lógicos =====
const possuiIngresso = true;
console.log(idadeUsuario >= 18 && possuiIngresso); // E
const ehProfessor = false;
const ehAluno = true;
console.log(ehProfessor || ehAluno);               // OU
console.log(!false);                               // NÃO (inverte)
// Dados do produto
const produto = "Notebook";
const preco = 2500;
const qtd = 2;
const percentualDesconto = 10;
const disponivel = true;

// Cálculos
const subtotal = preco * qtd;
const desconto = subtotal * percentualDesconto / 100;
const valorFinal = subtotal - desconto;

// Resultado
console.log(`Produto: ${produto} | Disponível: ${disponivel}`);
console.log(`Subtotal: R$ ${subtotal}`);
console.log(`Desconto: R$ ${desconto}`);
console.log(`Valor final: R$ ${valorFinal}`);

// Verificando tipos
console.log(typeof produto);
console.log(typeof preco);
console.log(typeof disponivel);

// ===== if / else if / else =====
const nota = 82;
if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 75) { // a ordem das condições importa!
    console.log("Muito bom");
} else if (nota >= 60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// ===== Condição composta =====
const frequencia = 80;
if (nota >= 60 && frequencia >= 75) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno não aprovado");
}

// ===== Pedido prioritário =====
const prioridade = "alta";
const atrasado = true;
if (prioridade === "alta" && atrasado) {
    console.log("ATENÇÃO IMEDIATA");
} else {
    console.log("Acompanhamento normal");
}

// ===== Situação de acesso =====
const idadeVisitante = 20;
const possuiCadastro = true;
const bloqueado = false;
if (idadeVisitante >= 18 && possuiCadastro && !bloqueado) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

// ===== Recursos do Console =====
console.log("Informação");
console.warn("Atenção");
console.error("Erro");
