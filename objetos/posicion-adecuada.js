let arrayInput =
    [{ "nombre": "Alba", "edad": 15 },
    { "nombre": "Estrella", "edad": 30 },
    { "nombre": "Belen", "edad": 20 },
    { "nombre": "Santiago", "edad": 4 },
    { "nombre": "Katherine", "edad": 55 }]


const posicionAdecuada = (personas) => {
    let personasConIndice = [];

    let i = 0
    while (personas.length) {
      let menorPersona = personas[i];
      for (let j = 0; j < personas.length; j++) {
        if (menorPersona.edad > personas[j].edad) {
          menorPersona = personas[j];
        }
      }
      // elimino el elemento de personas, obteniendo su indice en el arreglo
      personas.splice(personas.indexOf(menorPersona), 1);
      menorPersona.posicion = personasConIndice.length;
      personasConIndice.push(menorPersona);
    }

    return personasConIndice
}

//test
posicionAdecuada(arrayInput)