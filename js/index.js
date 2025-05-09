//EJERCICIO 01: Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".

//Explicación del ejercicio: Mi funcion recorre la "palabra" dada para poder letra a letra almacenarla en un array vacío que he creado. Luego he recorrido este array para que en cada letra de cada posición del array pasarla a mayúsculas. Por último he convertido ese array en un string separado por un espacio.

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

//Explicación del ejercicio: Mi función almacena cada palabra de "nombre" en un array, luego devuelve como resultado la longitud de ese array.


function devolverNumeroPalbarasNombre(nombre) {
    let arrayNombre = nombre.split(" ");
    let numeroPalabrasNombre = arrayNombre.length;
    return numeroPalabrasNombre;
}

// console.log(devolverNumeroPalbarasNombre("sebas correa rodriguez gato perro"));



//EJERCICIO 03: Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

//Explicación del ejercicio: Mi funcion recibe una frase y letra como argumento. Presupongo que el usuario quiere saber el número de veces que se repite una palabra sin importarle si está escrita en mayúculas o minúsculas. Por lo que tanto la frase como la letra la convierto a minúsculas. Procedo a recorrer mi frase y comparo cada letra de la frase con la letra que recibe mi función. Si la letra de la frase es igual a la letra objetivo, sumo uno a mi "contador" que representa el número de veces que se cumple esta concición, que en este caso se traduce a el número de veces que la letra objetivo se encuentra en la frase. Por lo que la función de mi algoritmo es devolver ese contador.

function contadorVecesAparicionLetra(frase, letra) {
    let letraMinuscula = letra.toLowerCase();
    let fraseMinuscula = frase.toLowerCase();

    let contador = 0;

    for (let i = 0; i < fraseMinuscula.length; i++) {
        if (letraMinuscula == fraseMinuscula[i]) {
            contador += 1;
        }
    }
    return `La letra ${letraMinuscula} se repite ${contador} veces.`
}

numeroDeVecesAparicionLetra = contadorVecesAparicionLetra("hoolaaamundoa", "o");
// console.log(numeroDeVecesAparicionLetra);





