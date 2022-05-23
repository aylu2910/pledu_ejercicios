let actoresVocales = [];
let actoresPrincipales = ['Tom Hanks', 'Johnny Depp', 'Elizabeth Taylor', 'Morgan Freeman', 'Jennifer Aniston', 'Meryl Streep', 'Natalie Portman', 'Ashton Kutcher'];
//PUNTO 1
let vocales = ["A", "E", "I", "O", "U"];
actoresPrincipales.forEach(actor => {
    let palabras = actor.split(" ");
    let nombre = palabras[0];
    let apellido = palabras[1];
    if(vocales.includes(nombre[0]) || vocales.includes(apellido[0])){
        actoresVocales.push(actor);
    }
})
let peliculas = []
let actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo DiCaprio",
    "El Padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt"
}
//PUNTO 2 Y 3
for(let propiedad in actoresPrincipalesPorPelicula){
    peliculas.push(propiedad);
    actoresPrincipales.push(actoresPrincipalesPorPelicula[propiedad]);
}
//PUNTO 4
let peliculaPorActor = {};
//PUNTO 5
for(let propiedad in actoresPrincipalesPorPelicula){
    let pelicula = propiedad;
    let actor = actoresPrincipalesPorPelicula[propiedad];
    peliculaPorActor[actor] = pelicula;
    //Para el punto 6 seria
    //peliculaPorActor[actor] = [pelicula];
}