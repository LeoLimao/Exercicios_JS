// Faccat ex 20
/* Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.    */

valor1=parseInt(prompt("Digite o 1º valor"))
valor2=parseInt(prompt("Digite o 2º valor"))


if (valor1>valor2) {
    alert("Ordem crescente dos valores: "+ valor1 +"," + valor2+ "...")
} else{
    alert("Ordem crescente dos valores: "+ valor2 +"," + valor1+ "...")
}