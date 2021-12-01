let nave = {
  tipoDeNave: "Espacial",

  pais: "Argentina",

  cantidaDeTripulantes: 4,

  tripulantes: ["Micho", "Tito", "Lucas", "Diego"],

  estado: "Usada",

  despegar: function () {
    console.log("🚀 ¡Todo listo para el despegue! 👍");
    alert("🔥 ¡BOOOOOOM! 🔥");
  },
};

/*
Ahora desde la consola seguí este paso a paso para extraer los valores del Objeto nave:

1-Extraé el país de la nave usando Dot notation.
2-Extraé el tipo de nave usando Bracket notation.
3-Extraé la cantidad de tripulantes usando Dot notation.
4-Extraé la cantidad de tripulantes usando Bracket notation y guardá ese valor en una Variable que se llame cantTrip.
5-Creá una Variable que se llame test y guardá adentro un String que diga "Estado".
6-Usá la Variable test para extraer el valor dentro de la Propiedad "Estado". Probá usando Dot notation y Bracket notation. ¿Cuál funciona?
7-Ejecutá la Función dentro de la Propiedad "Despegar".
*/

/*
// 1-Extraé el país de la nave usando Dot notation.
console.log(nave.pais)
// 2-Extraé el tipo de nave usando Bracket notation.
console.log(nave["tipoDeNave"])
// 3-Extraé la cantidad de tripulantes usando Dot notation.
console.log(nave.cantidaDeTripulantes)
// 4-Extraé la cantidad de tripulantes usando Bracket notation y guardá ese valor en una Variable que se llame cantTrip.
let cantTrip = nave["cantidaDeTripulantes"]
// 5-Creá una Variable que se llame test y guardá adentro un String que diga "Estado".
let test = "estado"
// 6-Usá la Variable test para extraer el valor dentro de la Propiedad "Estado". Probá usando Dot notation y Bracket notation. ¿Cuál funciona?
console.log(nave.test)
console.log(nave[test])
*/

/*
1-Iterá actoresPrincipales y llevá a actoresVocales aquellos cuyo nombre o apellido comience con una vocal.
2-Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá sus nombres y apellidos al Arreglo actoresPrincipales.
3-Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá los nombres de las películas en el Arreglo peliculas.
4-Creá un Objeto vacíó llamado peliculaPorActor.
5-Agregá Propiedades a este Objeto donde la clave sea el nombre del actor y el valor sea la película.
5-Adaptá tu código para que pueda haber más de una película por cada actor.

*/

let vocales = ["a", "e", "i", "o", "u"];
let actoresVocales = [];
let actoresPrincipales = [
  "Tom Hanks",
  "Johnny Depp",
  "Elizabeth Taylor",
  "Morgan Freeman",
  "Jennifer Aniston",
  "Meryl Streep",
  "Natalie Portman",
  "Ashton Kutcher",
];
let peliculas = [];
let actoresPrincipalesPorPelicula = {
  Titanic: "Leonardo DiCaprio",
  "El Padrino": "Al Pacino",
  Matrix: "Keanu Reeves",
  "Iron Man": "Robert Downey Jr",
  "Soy leyenda": "Will Smith",
  "Bastardos sin gloria": "Brad Pitt",
};
let peliculaPorActor = {};

const isInArray = (elemento, array) => {
  for (e of array) {
    if (e === elemento) {
      return true;
    }
  }
  return false;
};

for (actor of actoresPrincipales) {
  if (isInArray(actor[0].toLowerCase(), vocales)) {
    actoresVocales.push(actor);
  }
}

console.log(actoresVocales);
// console.log(isInArray("a",["e","i","a","o"]))

for (peli in actoresPrincipalesPorPelicula) {
  actoresPrincipales.push(actoresPrincipalesPorPelicula[peli]);
}

console.log(actoresPrincipales);

for (peli in actoresPrincipalesPorPelicula) {
  peliculas.push(peli);
}
console.log(peliculas);
