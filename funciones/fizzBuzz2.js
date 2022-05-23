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

//test
console.log(fizzBuzz2("hola", "adios", 30, 2, 3));



