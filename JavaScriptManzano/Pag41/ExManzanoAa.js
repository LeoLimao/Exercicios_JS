// Manzano Aa
/*   Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor. */

a=parseFloat(prompt("Digite o valor de A"))
b=parseFloat(prompt("Digite o valor de B"))

if (a>b){
    diferenca=a-b
    alert("A diferença do valor de A - B é de: "+diferenca+".")
} else {
    diferenca=b-a
    alert("A diferença do valor de B - A é de: "+diferenca+".")
}