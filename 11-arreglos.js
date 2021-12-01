/*
En este ejercicio, deberás crear una Función sumArray que acepte un Arreglo de números y devuelva la suma de todos ellos. Usá este código para testear tu Función:
sumArray([1,2,3]) // 6
sumArray([10, 3, 10, 4]) // 27
sumArray([-5,100]) // 95
*/
const sumArray =(arr)=>{
    let acumuladorSuma = 0
    for (numero of arr){
        acumuladorSuma +=numero
    }
    console.log(acumuladorSuma)
}

sumArray([1,2,3]) // 6
sumArray([10, 3, 10, 4]) // 27
sumArray([-5,100]) // 95


/*
En este ejercicio deberás crear una Función llamada join que reciba un Arreglo y simule el comportamiento del método Array.join().

⚠️Importante: No podés usar el método Array.join() original.

Por ejemplo:

join(["h","o","l","a"]) debe retornar el string "hola".

join(["c","h","a,"u"]) debe retornar el string "chau".
*/

const join =(arreglo,string)=>{
    let result = `${arreglo[0]}`
    let limit = arreglo.length -1
    for (let i =1;i<=limit;i++){
        result+=`${string}${arreglo[i]}`
    }
    return result
}

console.log(join(["c","h","a","u"],"-"))


//similar split
/*
Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la función original Si no sabés cómo funciona, Google puede ayudarte..

Importante: No podés usar el String.split()

Ejemplo: 
-	split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
-	split(“chau”) debe retornar [“c”,”h”,”a”,”u”]
*/
const split = (string,separador)=>{
    let arrayFinal = []
    for (let i=0;i<string.length;i++){
        let acumulador =""
        if(string[i]!=separador){
            acumulador+=string[i]
        }
        else{
            arrayFinal.push(string[i])
        }
        arrayFinal.push(acumulador)
  
    }
    return arrayFinal
}
console.log("hola","")