// Manzano Ac
/*   Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não
foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o
valor da média do aluno para qualquer condição.  */

a=parseFloat(prompt("Digite o valor da primeira nota"))
b=parseFloat(prompt("Digite o valor da segunda nota"))
c=parseFloat(prompt("Digite o valor da terceira nota"))
d=parseFloat(prompt("Digite o valor da quarta nota"))
media=(a+b+c+d)/4

if (media>=5){
    alert("Parabéns, você teve uma média de: "+media+" e foi aprovado!")
} else {
    alert("Infelizmente, você teve uma média de: "+media+" e foi reprovado!")
}