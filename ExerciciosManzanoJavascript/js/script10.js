/*Exercicio 10 MANZANO
Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível
com o usuário, para que seja apresentado o valor em moeda americana.*/
function exercicio10() {
    let dolar = parseInt(prompt("Digite o valor da cotação do dólar: "));
    let real = parseInt(prompt("Digite o valor da quantidade em reais: "));
    let moedaAmericana = real * dolar

    alert("O valor em moeda americana é: " + moedaAmericana.toFixed(2))
}