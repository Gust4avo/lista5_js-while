var contadora = 0;
var soma=0;
var media = 0;
while (contadora < 10) {
    var numero = parseInt(prompt("Digite um numero: "));
    var soma = soma + numero;
    var contadora = contadora + 1;
}
var media = soma / 10
document.write("A somatoria dos numeros é: " + soma + " e a media é: " + media)
1