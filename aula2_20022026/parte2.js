// Parte 2 - Objeto camera

let camera ={
    nome: 'Câmera Instantânea Instax Mini 12',
    cor: 'Branca Marfim',
    preco:'506',
    estoque: '63'
}

//Perguntas

console.log("A. Como acessar o nome do objeto?");
console.log(camera.nome);

console.log("\nB. Como acessar o preço usando colchetes?");
console.log(camera['preco'])

console.log("\nC. Atualize o estoque para 80.");
camera.estoque = 80;

console.log("\nD. Imprima todas as propriedades no console.");
console.log(camera)