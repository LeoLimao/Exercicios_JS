// Manzano 7e
/*  Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
PRESTACAO ← VALOR + (VALOR * TAXA/100) * TEMPO).*/


valor=parseFloat(prompt("Qual o valor desta prestação (sem multa)?"))
taxa=parseFloat(prompt("Qual o valor da taxa?"))
tempo=parseFloat(prompt("Quanto tempo de atraso?"))
prestacao= valor + ((valor*taxa/100)*tempo)

alert("O valor total de sua prestação será de: "+prestacao+" reais.")