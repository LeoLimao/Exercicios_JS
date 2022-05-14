// Manzano Af
/*   Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.   */

a = parseFloat(prompt("Digite o valor de A"))
b = parseFloat(prompt("Digite o valor de B"))
c = parseFloat(prompt("Digite o valor de C"))

// abc acb bac bca cab cba


if (a < b && b < c) {
    alert(`Os números na ordem crescente ficarão ${a},${b},${c}.`)
} else if (a < c && c < b) {
    alert("Os números na ordem crescente ficarão: " + c + "," + b + "," + a + ".")
} else if (b < a && a < c) {
    alert("Os números na ordem crescente ficarão: " + b + "," + a + "," + c + ".")
} else if (b < c && c < a) {
    alert("Os números na ordem crescente ficarão: " + b + "," + c + "," + a + ".")
} else if (c < a && a < b) {
    alert("Os números na ordem crescente ficarão: " + c + "," + a + "," + b + ".")
} else if (c < b && b < a) {
    alert("Os números na ordem crescente ficarão: " + c + "," + b + "," + a + ".")
} else 
    alert("Não foi possível entender a entrada de dados.")