// arreglos
// no se recomienda crear arreglos de esta forma
//const arreglo = new Array();

// forma corrercta
const arreglo = [1, 2, 3, 4];

// el mismo concepto de asignacion por referencia
// no se lo debe de hacer, ya que modificaria el
// objeto original
// let arreglo2 = arreglo; // NO SE DEBE HACER DE ESTA FORMA

// del mismo modo para modificar la informacion hago uso del
// operador SPREAD
let arreglo2 = [...arreglo, 5]; // FORMA CORRECTA

let arreglo3 = arreglo2.map((numero) => {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
