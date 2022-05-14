// Faccat ex 16
/* As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra.  */

maças=parseInt(prompt("Quantas maças você comprou?"))

if (maças>12) {
    alert("Você comprou "+maças+(" maças e deve pagar "+maças+" reais"))
} else {
    alert("Você comprou "+maças+" maças e deve pagar "+(maças*1.30)+" reais")
}