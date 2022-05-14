// Faccat ex 10
/*   O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
calcular e escrever o custo final ao consumidor. */

carro=parseInt(prompt("Qual o custo de fábrica de carro?"))

impostos=(carro/100)*73 // 73 já que o valor de impostos (45%) + percentual do distribuidor (28%) dão um total de 73%
Vcarro= carro+impostos

alert("O valor total do carro é de: "+Vcarro+" reais")
