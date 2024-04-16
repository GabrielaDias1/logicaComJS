/*Exercicio 5 MANZANO
Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
PRESTACAO <= VALOR + (VALOR * TAXA/100) * TEMPO).*/
function exercicio05() {
    let valor;
    let taxa;
    let tempo_atraso;
    let prestacao;

    valor = parseFloat(prompt("Digite o valor da prestação:"));
    taxa = parseFloat(prompt("Digite o valor da taxa da prestação:"));
    tempo_atraso = parseInt(prompt("Digite quanto tempo está em atraso:"));

    prestacao = valor + (valor * taxa / 100) * tempo_atraso;

    alert("O valor de uma prestação em atraso é: " + prestacao);

}