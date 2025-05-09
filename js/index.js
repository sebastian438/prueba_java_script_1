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



//EJERCICIO 02: Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.

//Explicación del ejercicio: Mi función almacena cada palabra de nombre en un array, luego devuelve como resultado la longitud de ese array.


function devolverNumeroPalbarasNombre(nombre) {
    let arrayNombre = nombre.split(" ");
    let numeroPalabrasNombre = arrayNombre.length;
    return numeroPalabrasNombre;
}

// console.log(devolverNumeroPalbarasNombre("sebas correa rodriguez gato perro"));




