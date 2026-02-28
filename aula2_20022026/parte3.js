// Parte 3 – Array de Objetos 

let papelaria = [
    {nome: 'Fichário', preco: 56, estoque: 20},
    {nome: 'Tesoura', preco: 9.99, estoque: 2},
    {nome: 'Marca texto', preco: 4, estoque: 15},
    {nome: 'Régua', preco: 3.50, estoque: 6},
    {nome: 'Grampeador', preco: 8, estoque: 9},
    {nome: 'Bloco de notas', preco: 3, estoque: 8},
    {nome: 'Cartela de adesivos', preco: 2.25, estoque: 10},
    {nome: 'Borracha', preco: 1, estoque: 14},
    {nome: 'Caneta esferográfica', preco: 2.26, estoque: 9},
    {nome: 'Estojo', preco: 34, estoque: 50},
]

// Perguntas

console.log("A. Qual é o preço do segundo objeto?");
console.log(papelaria[1].preco);

console.log("\nB. Qual é o nome do terceiro objeto?");
console.log(papelaria[2].nome);

console.log("\nC. Quantos itens existem no array?");
console.log(papelaria.length);

console.log("\nD. Imprima o nome de todos os objetos.");
for (const nomeItemPapelaria of papelaria) {
  console.log(nomeItemPapelaria.nome);
}

console.log("\nE. Some o total de estoque de todos os objetos.");
const totalPreco = papelaria.reduce((acumulador, produto) => {  return acumulador + produto.estoque;}, 0);
console.log(totalPreco)

console.log("\nF. Qual objeto possui maior estoque?");
const maiorEstoque = Math.max(...papelaria.map(p => p.estoque));
console.log(maiorEstoque); 