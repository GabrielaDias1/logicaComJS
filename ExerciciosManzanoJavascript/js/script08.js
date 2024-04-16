/*Exercicio 8 MANZANO
Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo
segundo.*/
function exercicio08() {
    let valor_a;
    let valor_b;
    let diferenca;
    let resultadoDoQuadrado;

    valor_a = parseInt(prompt("Digite o valor de A:"));

    valor_b = parseInt(prompt("Digite o valor de B:"));

    diferenca = valor_a - valor_b;
    resultadoDoQuadrado = diferenca * diferenca;

    alert("Resultado do quadrado da diferença do valor A e B: " + resultadoDoQuadrado);

}