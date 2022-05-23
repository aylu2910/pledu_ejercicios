class Libro {
  constructor(autor, editorial, genero) {
    this.autor = autor;
    this.editorial = editorial;
    this.genero = genero;
  }
  mostrarLibro() {
    console.log(
      `Autor: ${this.autor} - 
            Editorial: ${this.editorial} - 
            Genero: ${this.genero}`
    );
  }
}

let libro1 = new Libro("JK Rowling", "Santillan", "fantasia");
let libro2 = new Libro("James Dashner", "Penguin Random House", "Suspenso");
let libro3 = new Libro("E.A. Poe", "Manila", "gotico");
let libro4 = new Libro("James Dashner", "NY Editorial", "Suspenso");

let libros = [libro1, libro2, libro3, libro4];

//con forEach y sin arrow function
/* function filtrarPorAutor(arregloLibros,autor){
    let librosFiltrados = []
    arregloLibros.forEach(function (libro){
        if(libro.autor == autor){
            librosFiltrados.push(libro)
        }
    })
    return librosFiltrados
} */

//con for of y sin arrow function
/* function filtrarPorAutor(arregloLibros,autor){
    let librosFiltrados = []
    for (libro of arregloLibros ){
        if(libro.autor === autor){
            librosFiltrados.push(libro)
        }
    }
    return librosFiltrados
} */

//con filter y sin arrow function
/* function filtrarPorAutor(arregloLibros,autor){
    let librosFiltrados = arregloLibros.filter(function (libro){
        return libro.autor === autor
    } )
    return librosFiltrados
} */

//con filter y arrow function en una sola linea

let filtrarPorAutor = (arregloLibros, autor) =>
  arregloLibros.filter((libro) => libro.autor === autor);

filtrarPorAutor(libros, "James Dashner");
