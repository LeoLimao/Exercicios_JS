// Faccat ex 8
/*  Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. */

votos=parseFloat(prompt("Digite o número total de votos"))
brancos=parseFloat(prompt("Digite o número de votos brancos"))
nulos=parseFloat(prompt("Digite o número de votos nulos"))
validos=votos-brancos-nulos

porBrancos=(brancos/votos)*100
porNulos=(nulos/votos)*100
porValidos=(validos/votos)*100

alert("Porcentagem de votos em branco é de: "+porBrancos+"%")
alert("Porcentagem de votos nulos é de: "+porNulos+"%")
alert("Porcentagem de votos validos é de: "+porValidos+"%")