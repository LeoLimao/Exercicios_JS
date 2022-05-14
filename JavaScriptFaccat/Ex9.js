// Faccat ex 9
/*   Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. */

salario=parseInt(prompt("Quanto você ganha?"))
reajuste=parseInt(prompt("Qual será o reajuste?"))

ValorReajuste=(salario/reajuste)
Nsalario=(salario+ValorReajuste)

alert("Seu novo salário é "+Nsalario+" reais")