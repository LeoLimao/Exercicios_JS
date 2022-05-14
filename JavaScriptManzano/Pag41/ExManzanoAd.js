// Manzano Ad
/*   Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da
média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média.
Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi
aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta
condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição.  */

a=parseFloat(prompt("Digite o valor da primeira nota"))
b=parseFloat(prompt("Digite o valor da segunda nota"))
c=parseFloat(prompt("Digite o valor da terceira nota"))
d=parseFloat(prompt("Digite o valor da quarta nota"))
media=(a+b+c+d)/4

if (media>=7){
    alert("Parabéns, você teve uma média de: "+media+" e foi aprovado!")
} else{
    alert("Você deverá fazer um exame")
    exame=parseFloat(prompt("Por favor digitar a nota do exame"))
    media2=(media+exame)/2
} if (media2>=5){
    alert("Parabéns, você teve uma média de: "+media2+" e foi aprovado!")
} else {
    alert("Infelizmente, você teve uma média de: "+media2+" e foi reprovado.")
}   