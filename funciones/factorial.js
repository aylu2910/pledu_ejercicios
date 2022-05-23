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

//test
console.log(factorial(5));