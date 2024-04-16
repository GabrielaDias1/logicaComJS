/*Exercicio 01 MANZANO 
 Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de
conversão é F  (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/
function exercicio01() {
    let celsius = parseInt(prompt('Digite o valor da temperatura em graus celsius'))
    fahrenheit = (9 * celsius + 160) / 5

    alert("temperatura em Fahrenhei é ") + fahrenheit
}
