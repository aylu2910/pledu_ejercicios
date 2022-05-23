/*
En este ejercicio deberás crear una Función llamada join que reciba un Arreglo y simule el comportamiento del método Array.join().

⚠️Importante: No podés usar el método Array.join() original.

Por ejemplo:

join(["h","o","l","a"]) debe retornar el string "hola".

join(["c","h","a,"u"]) debe retornar el string "chau".
*/

const join = (arreglo, joiner) => {
    let result = `${arreglo[0]}`
    let limit = arreglo.length - 1
    for (let i = 1 ;i <= limit; i++){
        result+=`${joiner}${arreglo[i]}`
    }
    return result
}

//test
join(["c","h","a","u"],"-")
