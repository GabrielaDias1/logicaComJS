/*Exercicio 1 MANZANO
Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer. */
function 01(){
    let numero = parseInt(prompt("Digite um número para ver a tabuada de multiplicação: "));
    console.log(`Tabuada de multiplicação do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);

    }




    function 02(){
        for (let contadora = 1; contadora <=100; contadora++){
            let soma = soma + contadora
        }
        alert("Total da soma: "+ soma)
        alert("Resultado da soma:"+soma)
    }
somaDosCemPrimeirosNumeros();