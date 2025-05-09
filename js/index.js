//EJERCICIO 01: Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".

//Explicación del ejercicio: Mi funcion recorre la palabra dada para poder letra a letra almacenarla en un array vacío que he creado. Luego he recorrido este array para que en cada letra de cada posición del array pasarla a mayúsculas. Por último he convertido ese array en un string separado por un espacio.

function devolverPalabraMayusculaEspaciada(palabra) {
    let arrayPalabra = [];
    for (let i = 0; i < palabra.length; i++) {
        arrayPalabra.push(palabra[i]);
    }
    
    let arrayPalabraMayusculas = [];
    for (let i = 0; i < arrayPalabra.length; i++) {
        arrayPalabraMayusculas.push((arrayPalabra[i]).toUpperCase())
    }

    let palabraMayusculaEspaciada;
    palabraMayusculaEspaciada = arrayPalabraMayusculas.join(" ");

    return palabraMayusculaEspaciada;
}

const palabraMayusculaEspaciada = devolverPalabraMayusculaEspaciada("adios");
// console.log(palabraMayusculaEspaciada);





