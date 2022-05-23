/* ¿Me puedo jubilar?

Parte 1

En este ejercicio, crearás un programa que le indique a las mujeres si están en edad o no de jubilarse. Por lo tanto, les pedirás que ingresen su edad y guardarás este valor en una variable. A partir de ese input le informarás si está en edad de jubilarse o no, con un mensaje amigable. */

let edad_mujer = parseInt(prompt("¡Buenos dias Sra.! Cuantos años tiene?"));
if (edad_mujer < 61) {
  alert("Tenes edad para jubilarte!");
} else {
  alert("Perdon, como tu edad es menor a los 60 años, no podes jubilarte.");
}
/* Parte 2

En este ejercicio, modificarás tu programa para informar, tanto a las mujeres como a los hombres, si están en edad de jubilarse. Para esto, además de pedirle la edad de la persona, deberás confirmar si es hombre o mujer. */

let genero = prompt("Hola! Eres hombre o mujer?").toLowerCase();
let edad = parseInt(prompt("Cuantos años tenes?"));
if (genero === "mujer") {
  edad > 59
    ? alert("Buenisimo Sra! Te podes jubilar")
    : alert("Perdon Sra, no te puedes jubilar ");
}
if (genero === "hombre") {
  edad > 64
    ? alert("Buenisimo Sr! Te podes jubilar ")
    : alert("Perdon Sr , no te puedes jubilar ");
}