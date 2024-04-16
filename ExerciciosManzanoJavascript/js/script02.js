/*Exercicio 2 MANZANO
Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
variável A. Apresentar os valores trocados*/
function exercicio02(){
    let valor_a = parseInt(prompt("Digite o valor de A: "));
    let valor_b = parseInt(prompt('Digite o valor de b: '));
    
    let temp = valor_a
    valor_a = valor_b
    valor_b = temp
    
    alert('Os valores trocado de A e B são:\n A: ' + valor_a + '\nB: ' + valor_b)
   
}