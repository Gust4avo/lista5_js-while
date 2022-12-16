var celsius  = 0;
var Fahrenheit  = 0;

document.write("C°----- F°"  +"</br>")
document.write("</br>")
while (celsius < 100) {
    var celsius = celsius + 10;
    var Fahrenheit = (9 * celsius + 160)/5
    var contadora = contadora + 1;

    document.write(celsius + "°" +  " = " + Fahrenheit  + "°" + "</br>");
}