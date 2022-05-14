// Faccat ex 7
/* Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. */

anos=parseInt(prompt("Digite quantos anos você tem"))
meses=parseInt(prompt("Digite quantos meses se passaram desde seu último aniversário"))
dias=parseInt(prompt("Digite qual o dia do seu aniversário"))
idade=(anos*365)+(meses*30)+dias
alert("A sua idade é aproximadamente: "+idade)