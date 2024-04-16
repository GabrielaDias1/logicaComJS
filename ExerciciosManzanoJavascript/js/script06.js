/*Exercicio 6 MANZANO
Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
Volume<= *Raio * Altura*/
function exercicio06() {
    let volume;
    let raio;
    let altura;

    altura = parseFloat(prompt("Digite a altura:"));

    raio = parseFloat(prompt("Digite o valor do raio:"));

    volume = Math.PI * Math.pow(raio, 2) * altura;

    alert("O valor do volume é: " + volume);


} 