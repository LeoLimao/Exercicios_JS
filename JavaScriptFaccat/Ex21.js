// Faccat ex 21
/* Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. */

valor1=parseInt(prompt("Qual o horário de início da partida? (modelo 24h)"))
valor2=parseInt(prompt("Qual o horário final da partida? (modelo 24h)"))


if (valor1>valor2) {
    dia1=(valor2+24)-valor1
    alert(dia1)
} else {
    dia2=(24-valor1)-(24-valor2)
    alert(dia2)
}