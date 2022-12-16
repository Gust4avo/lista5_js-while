var contadora = 50;
var soma = 0;
var media = 0;

while (contadora <= 70) {
    if (contadora  % 2 == 0){
    var soma = soma + contadora;
    }
    var contadora = contadora + 1;
}
var media = soma / 11;
document.write("A soma dos numeros pares de 50 a 70 é: " + soma + "</br>" +" e a media é:" + media);