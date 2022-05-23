let arrayInput =
    [{ "nombre": "Alba", "edad": 15 },
    { "nombre": "Estrella", "edad": 30 },
    { "nombre": "Belen", "edad": 20 },
    { "nombre": "Santiago", "edad": 4 },
    { "nombre": "Katherine", "edad": 55 }]


const posicionAdecuada = (arrayPersonas) => {
    //variables auxiliares para poder obtener un valor de inicio y
    //empezar a comparar los valores dentro del arreglo
    let menorPersonaAuxiliar = arrayPersonas[0]
    let menorEdadAuxiliar = arrayPersonas[0].edad

    //ordenamiento
    for (let i = 0; i < arrayPersonas.length; i++) {
        for (let j = 0; j < arrayPersonas.length; j++) {
            if (arrayPersonas[i].edad < arrayPersonas[j].edad) {
                menorEdadAuxiliar = arrayPersonas[j].edad
                menorPersonaAuxiliar = arrayPersonas[j]
                let personaAux = arrayPersonas[j]
                arrayPersonas[j] = arrayPersonas[i]
                arrayPersonas[i] = personaAux
            }
        }
    }
    //como ya se encuentra ordenado, solo agrego la propiedad posicion de acuerdo a i.
    for (let i = 0; i < arrayPersonas.length; i++) {
        arrayPersonas[i].posicion = i

    }

    return arrayPersonas
}

posicionAdecuada(arrayInput)