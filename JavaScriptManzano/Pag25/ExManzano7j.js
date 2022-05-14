// Manzano 7j
/*   Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares
disponível com o usuário, para que seja apresentado o valor em moeda brasileira. */

dolar=parseFloat(prompt("Qual o valor que você quer transformar em real?"))
cotacao=parseFloat(prompt("Qual o valor da cotação?"))

real=dolar*cotacao

alert("O valor de "+dolar+" dólares em real é de: "+real+" reais.")
