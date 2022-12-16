var contador = 0;
var soma = 0;

while (contador <= 500) {
    var contador = contador + 1;
    if (contador % 2 == 0) {
        var soma = soma + contador;

    }
}
document.write("a somatoria dos 500 primeiro numeros pares é: " + soma);