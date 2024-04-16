/*Exercicio 3 MANZANO
Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de
multiplicação e apresentar doze resultados de saída.*/
function exercicio03(){
    let resultadoadicao1, resultadoadicao2, resultadoadicao3, resultadoadicao4, resultadoadicao5, resultadoadicao6;
    let resultadomultiplicacao1, resultadomultiplicacao2, resultadomultiplicacao3, resultadomultiplicacao4, resultadomultiplicacao5, resultadomultiplicacao6;

    let numero_a = parseInt(prompt('Digite um numero A:'));
    let numero_b = parseInt(prompt('Digite um numero B:'));
    let numero_c = parseInt(prompt('Digite um numero C:'));
    let numero_d = parseInt(prompt('Digite um numero D:'));

    resultadoadicao1 = numero_a + numero_b;
    resultadoadicao2 = numero_a + numero_c;
    resultadoadicao3 = numero_a + numero_d;
    resultadoadicao4 = numero_b + numero_c;
    resultadoadicao5 = numero_b + numero_d;
    resultadoadicao6 = numero_c + numero_d;

    resultadomultiplicacao1 = numero_a * numero_b;
    resultadomultiplicacao2 = numero_a * numero_c;
    resultadomultiplicacao3 = numero_a * numero_d;
    resultadomultiplicacao4 = numero_b * numero_c;
    resultadomultiplicacao5 = numero_b * numero_d;
    resultadomultiplicacao6 = numero_c * numero_d;


    alert("Resultado da adição de A+B é " + resultadoadicao1);
    alert("Resultado da adição de A+C é " + resultadoadicao2);
    alert("Resultado da adição de A+D é " + resultadoadicao3);
    alert("Resultado da adição de B+C é " + resultadoadicao4);
    alert("Resultado da adição de B+D é " + resultadoadicao5);
    alert("Resultado da adição de C+D é " + resultadoadicao6);
    alert("Resultado da multiplicação de A*B é " + resultadomultiplicacao1);
    alert("Resultado da multiplicação de A*C é " + resultadomultiplicacao2);
    alert("Resultado da multiplicação de A*D é " + resultadomultiplicacao3);
    alert("Resultado da multiplicação de B*C é " + resultadomultiplicacao4);
    alert("Resultado da multiplicação de B*D é " + resultadomultiplicacao5);
    alert("Resultado da multiplicação de C*D é " + resultadomultiplicacao6);
}
