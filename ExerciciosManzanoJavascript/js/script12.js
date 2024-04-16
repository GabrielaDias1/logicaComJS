/*Exercicio 12 MANZANO
Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o
quadrado da soma dos três valores lidos.*/
function exercicio12(){
    let valorA = parseInt(prompt("Digite o valor de A: "));
    let valorB = parseInt(prompt("Digite o valor de B: "));
    let valorC = parseInt(prompt("Digite o valor de C: "));
    let soma = valorA + valorB + valorC
    let quadradoFinal = soma * soma

    alert("O valor do quadrado da soma dos três valor lidos é: "+ quadradoFinal)
}