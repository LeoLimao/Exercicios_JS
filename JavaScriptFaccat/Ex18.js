// Faccat ex 18
/* Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).    */

nasc=parseInt(prompt("Qual o ano de seu nascimento?"))
ano=parseInt(prompt("Qual o ano atual?"))
idade=(ano-nasc)

if (idade<16) {
    alert("Você não pode votar.")
} else if (idade>18){
    alert("Seu voto é obrigatório.")
} else{
    alert("Você pode votar, tire seu título de eleitor(a) caso deseja votar.")
}