// Manzano 7k
/*   Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível
com o usuário, para que seja apresentado o valor em moeda americana. */

real=parseFloat(prompt("Qual o valor que você quer transformar em dólar?"))
cotacao=parseFloat(prompt("Qual o valor da cotação?"))

dolar=real*cotacao

alert("O valor de "+dolar+" reais em dólar é de: "+real+" dólares.")
