/*Exercicio 9 MANZANO
Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares
disponível com o usuário, para que seja apresentado o valor em moeda brasileira.*/
function exercicio09() {
    let valor_cotacao;
    let quantidade_dolares;
    let moeda_real;

    valor_cotacao = parseFloat(prompt("Digite o valor da cotação do dólar:"))

    quantidade_dolares = parseFloat(prompt("Digite a quantidade de dólares:"));

    moeda_real = quantidade_dolares * valor_cotacao;

    alert("O valor convertido em real é: " + moeda_real);

}


