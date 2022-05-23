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

//test
split("hola","")