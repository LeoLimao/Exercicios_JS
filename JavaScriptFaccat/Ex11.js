// Faccat ex 11
/*   Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.  */

salario=parseInt(prompt("Digite o salário do vendedor:"))
carros=parseInt(prompt("Quantos carros foram vendidos?"))
comissao=parseInt(prompt("Qual o valor da comissão por cada carro?"))
vendas=parseInt(prompt("Quanto você vendeu em reais?"))

porcentagem=(vendas/100)*5

total=salario+(comissao*carros)+porcentagem

alert("Você receberá: "+total+" reais")

