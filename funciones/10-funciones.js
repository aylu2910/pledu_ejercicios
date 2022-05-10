// MODULO 10 - Funciones

// function contarDeA_n(contar_de_a, contar_hasta) {
//     let my_array = Array.from({ length: contar_hasta + 1 }, (x, i) => i + 1);
//     for (let i = 0; i < my_array.length; i + contar_de_a) {
//         console.log(i)
//     }
// }

// contarDeA_n(2, 10)

// ---------------------- FizzBuzz II: La Venganza de FizzBuzz ----------------------

// En este ejercicio, deberás escribir una nueva versión de FizzBuzz ( fizzBuzz2) que tome dos Strings como Argumento y reimplemente el FizzBuzz original. Elegí una palabra para cada String ( palabra1 y palabra2) que reemplace a Fizz y a Buzz.

// Pista ¿Cuáles Eran las Instrucciones de Fizzbuzz?
// Ver Pista
// En ese ejercicio escribiste un programa que imprimía en la consola los números del 1 al 100, teniendo en cuenta estos criterios:

// Si el número era múltiplo de 3, imprimía "Fizz" en vez del número.
// Si era múltiplo de 5, imprimía "Buzz".
// Si era, a la vez, múltiplo de 3 y de 5, imprimía "FizzBuzz".
// Para completar este ejercicio, deberás:

// Lograr que fizzBuzz2 devuelva un String con los números separados por comas.
// Mejorar la Función para que el usuario pueda decidir hasta qué número tiene que contar fizzBuzz2.
// Mejorar la Función para que el usuario pueda ingresar fizz_num y buzz_num para que la sustitución de palabras ocurra en los números múltiplos de los nuevos argumentos de entrada (en vez de solo 3 y 5).
// ⚠️Importante: Intentá no ayudarte con tu código anterior de Fizzbuzz.

let fizzBuzz2 = (palabra1, palabra2, contar_hasta, fizz_num, buzz_num) => {
  let string_acumulado = "";

  for (let i = 1; i <= contar_hasta; i++) {
    let mensaje = "";
    if (i % fizz_num === 0 && i % buzz_num === 0) {
      mensaje = palabra1 + palabra2;
    } else {
      if (i % fizz_num === 0) {
        mensaje = palabra1;
      }
      if (i % buzz_num === 0) {
        mensaje = palabra2;
      }
    }
    if (i < contar_hasta) {
      string_acumulado += `${mensaje || i},`;
    } else {
      string_acumulado += `${mensaje || i}`;
    }
  }
  return string_acumulado;
};

console.log(fizzBuzz2("hola", "adios", 30, 2, 3));

// ---------------------- factorial() ----------------------
let factorial = (numero) => {
  let contador = 1;
  let resultado = 1;
  if (numero === 0 || numero === 1) {
    return resultado;
  } else {
    while (contador <= numero) {
      resultado *= contador;
      contador++;
    }
    return resultado;
  }
};

console.log(factorial(5));
