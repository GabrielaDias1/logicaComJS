/*Exercicio 11 MANZANO
Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à
soma dos quadrados dos três valores lidos.*/
function exercicio11() {
    let valorA = parseInt(prompt("Digite o valor de A: "));
    let valorB = parseInt(prompt("Digite o valor de b: "));
    let valorC = parseInt(prompt("Digite o valor de c: "));
    let valorquadrado1 = valorA * valorA
    let valorquadrado2 = valorB * valorB
    let valorquadrado3 = valorC * valorC
    let somaTotal = valorquadrado1 + valorquadrado2 + valorquadrado3

    alert("O valor da soma dos quadrados dos três valores lidos é " + somaTotal)
}