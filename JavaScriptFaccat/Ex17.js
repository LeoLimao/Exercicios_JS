// Faccat ex 17
/* Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada.   */

nota1 = parseInt(prompt("Digite a 1ª nota"))
nota2 = parseInt(prompt("Digite a 2ª nota"))
media = (nota1 + nota2) / 2

if (media>6) {
    alert("Você tirou "+media+" e foi aprovado!")
} else {
    alert ("Você tirou "+media+" infelizmente, foi reprovado")
}