/*exercicio 7 MANZANO
Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula
VOLUME <= COMPRIMENTO * LARGURA * ALTURA.*/

function exercicio07() {
    let altura;
    let volume;
    let comprimento;
    let largura;

    altura = parseInt(prompt("Digite a altura da caixa retangular:"));

    largura = parseInt(prompt("Digite a largura da caixa retangular:"));

    comprimento = parseInt(prompt("Digite o comprimento da caixa retangular:"));

    volume = comprimento * largura * altura;

    alert("O volume da caixa retangular é: " + volume);

}