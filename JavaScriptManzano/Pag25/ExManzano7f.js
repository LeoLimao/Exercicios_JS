// Manzano 7f
/*  Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
variável A. Apresentar os valores trocados
*/

alert("Digite 2 valores, eles serão trocados")
valor1=(prompt("Digite um valor"))
valor2=(prompt("Digite outro valor"))

tranferencia=valor1
valor1=valor2
valor2=tranferencia

alert(valor1)
alert(valor2)