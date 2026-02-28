// Parte 1 – Array Simples

let coisasFavoritas = ['rosa', 
  'Hambúrguer', 
  '07', 
  '2002', 
  'eternal sunshine', 
  'Pêonia', 
  'Dudu', 
  'false', 
  'Francês', 
  'colagem',
  '1825',
  'Chocolate', 
  'Andromeda', 
  'programação', 
  'Lucas', 
  'outono', 
  '19', 
  '03.8', 
  'stardew Valley', 
'2023'];

// Perguntas

console.log("A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?");
console.log(coisasFavoritas[0], coisasFavoritas[7], coisasFavoritas[11], coisasFavoritas[15], coisasFavoritas[18], coisasFavoritas[20]);

console.log("\nB. Qual elemento está na penúltima e última posição?");
let penultima = coisasFavoritas[coisasFavoritas.length - 2];
let ultima = coisasFavoritas[coisasFavoritas.length - 1];
console.log(penultima, ultima );

console.log("\nC. Quantos elementos existem no array?");
console.log(coisasFavoritas.length);

console.log("\nD. Adicione um novo elemento ao final do array: 'Coca-cola' adicionado");
coisasFavoritas.push('Coca-cola');

console.log("\nD. Imprima todos os elementos usando um for:");
for (const elementos of coisasFavoritas) {
  console.log(elementos);};