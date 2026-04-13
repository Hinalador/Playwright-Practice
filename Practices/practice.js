/* ==========================================================================
   PRÁCTICA INTENSIVA DE JAVASCRIPT - FUNDAMENTOS
   ==========================================================================
   Este archivo contiene ejemplos estructurados de las bases de JavaScript.
   Están organizados por temas. Puedes descomentar los `console.log()`
   para ver qué devuelve cada función en tu terminal (usando Node.js).
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. VARIABLES Y TIPOS DE DATOS
   -------------------------------------------------------------------------- */
// 'let' permite reasignación. 'const' es un valor fijo en memoria.
let nombre = "Juan";
nombre = "Carlos"; // Válido con let

const edad = 25;
// edad = 26; // Error: Assignment to constant variable

// Tipos de datos primitivos comunes
const esEstudiante = true;    // Boolean
const precio = 99.99;         // Number
const valorNulo = null;       // Null (Ausencia intencional de valor)
let valorIndefinido;          // Undefined (No se le ha asignado valor)

// Template Literals (Cadenas de texto con variables incrustadas usando backticks `)
const presentacion = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
// console.log("1. Tipos de Datos y Variables:", presentacion);


/* --------------------------------------------------------------------------
   2. OPERADORES Y COMPARACIONES
   -------------------------------------------------------------------------- */
const a = 10;
const b = "10";

// Operadores Aritméticos: +, -, *, /, % (módulo o resto)
const resto = 10 % 3; // 1

// Comparaciones (IMPORTANTE: siempre es preferible usar === sobre ==)
// == solo compara valor, hace conversión de tipos implícita
// === compara valor y tipo de dato exacto
// console.log("¿10 == '10'?:", a == b);   // true
// console.log("¿10 === '10'?:", a === b); // false

// Operadores Lógicos: && (AND - Y), || (OR - O), ! (NOT - NEGACIÓN)
const mayorDeEdad = edad >= 18;
const tieneLicencia = true;
const puedeConducir = mayorDeEdad && tieneLicencia;
// console.log("¿Puede conducir?:", puedeConducir);


/* --------------------------------------------------------------------------
   3. CONDICIONALES
   -------------------------------------------------------------------------- */
let nota = 85;

// Condicional if / else if / else
if (nota >= 90) {
    // console.log("Excelente");
} else if (nota >= 80) {
    // console.log("Muy bien");
} else {
    // console.log("Necesita mejorar");
}

// Operador Ternario: sintaxis abreviada para if/else de una sola línea
// Estructura: (Condición) ? "si es true" : "si es false"
const estadoNota = nota >= 60 ? "Aprobado" : "Reprobado";
// console.log("Estado:", estadoNota);

// Switch para múltiples casos comprobando igualdad estricta
const dia = "Viernes";
switch (dia) {
    case "Lunes":
        // console.log("A empezar la semana");
        break;
    case "Viernes":
        // console.log("Casi fin de semana");
        break;
    default:
        // console.log("Día normal");
}


/* --------------------------------------------------------------------------
   4. BUCLES (LOOPS) CÓMO ITERAR
   -------------------------------------------------------------------------- */
// Bucle FOR (Clásico, especificando inicio, límite y saltos)
// for (let i = 1; i <= 3; i++) {
//     console.log(`Iteración con For: ${i}`);
// }

// Bucle WHILE
let contador = 3;
// while (contador > 0) {
//     console.log(`Contador con While: ${contador}`);
//     contador--;
// }


/* --------------------------------------------------------------------------
   5. FUNCIONES: DECLARACIONES Y FUNCIONES FLECHA (ES6)
   -------------------------------------------------------------------------- */
// Función Clásica
function calcularAreaRectangulo(ancho, alto) {
    return ancho * alto;
}

// Función Expresada (guardada dentro de una constante)
const despedir = function(nombre) {
    return `Adiós, ${nombre}!`;
}

// ARROW FUNCTIONS (Funciones Flecha) - Sintaxis moderna más limpia
// Si hay varias líneas o código complejo, requiere corchetes {} y un "return" explícito
const sumarTodo = (x, y, z) => {
    const total = x + y + z;
    return total;
};

// Función Flecha con RETORNO IMPLÍCITO (Ideal para funciones de una sola línea)
// Omitimos los corchetes {} y la palabra "return"
const duplicarValor = numero => numero * 2;
const restar = (a, b) => a - b;

// console.log("Area (Clásica):", calcularAreaRectangulo(5, 10));
// console.log("Doble de 8:", duplicarValor(8));


/* --------------------------------------------------------------------------
   6. ARRAYS (ARREGLOS) Y MÉTODOS DE ARRAYS MODERNOS
   -------------------------------------------------------------------------- */
const frutas = ["Manzana", "Banana"];

// Modificación básica
frutas.push("Cereza");    // Añade al final
frutas.unshift("Mango");  // Añade al principio
frutas.pop();             // Elimina el último ('Cereza')
// console.log("Arreglo Frutas:", frutas);

// ITERADORES MODERNOS DE ARRAYS (Muy importantes y usados en React/Angular/Vue)
const numeros = [1, 2, 3, 4, 5];

// 1. .forEach() -> Ejecuta una acción por cada elemento, no devuelve un nuevo array
// numeros.forEach((num, index) => console.log(`Índice ${index}: Muestra el ${num}`));

// 2. .map() -> [IMPORTANTE] Transforma los elementos y CREA UN NUEVO ARRAY
const numerosDuplicados = numeros.map(num => num * 2);
// console.log("Array original:", numeros, "Nuevo array (.map):", numerosDuplicados);

// 3. .filter() -> Filtra según una condición para crear un NUEVO ARRAY
const numerosImpares = numeros.filter(num => num % 2 !== 0);
// console.log("Filtrados (Impares):", numerosImpares);

// 4. .find() -> Devuelve el PRIMER elemento que cumpla con la condición
const primerMayorQueDos = numeros.find(num => num > 2);
// console.log("El primero mayor que 2 es:", primerMayorQueDos);

// 5. .reduce() -> Reduce todo el array a un único valor (ej. sumar todos los números)
const sumaTotal = numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0); // El 0 es el valor inicial del acumulador
// console.log("La suma total tras el reduce (.reduce) es:", sumaTotal);


/* --------------------------------------------------------------------------
   7. OBJETOS, DESESTRUCTURACIÓN Y SPREAD OPERATOR
   -------------------------------------------------------------------------- */
const persona = {
    nombre: "Ana",
    edad: 28,
    profesion: "Desarrolladora Web",
    hobbies: ["Programar", "Leer"],
    saludar() { // Método dentro de un objeto
        return `Hola equipo, me llamo ${this.nombre}.`;
    }
};

// Acceso clásico a propiedades
// console.log("Profesión clásica:", persona.profesion);
// console.log(persona.saludar());

// DESESTRUCTURACIÓN (Destructuring) - Sacar propiedades y guardarlas en variables
const { profesion, edad: chicaEdad, hobbies } = persona;
// console.log(`${profesion} de ${chicaEdad} años. Le gusta: ${hobbies[0]}`);

// SPREAD OPERATOR (Operador de propagación ...)
// Sirve para hacer copias de objetos y arreglos o fusionarlos sutilmente sin mutar el original
const personaExtendida = { ...persona, esRemoto: true, ciudad: "Madrid" };
const masNumeros = [...numeros, 6, 7, 8];
// console.log("Spread Objects:", personaExtendida);
// console.log("Spread Arrays:", masNumeros);


/* --------------------------------------------------------------------------
   8. ASINCRONISMO (PROMESAS Y ASYNC/AWAIT)
   -------------------------------------------------------------------------- */
// Las Promesas son para simular código que "tomará cierto tiempo"
// como pedir datos a una base de datos o API.
const pedirDatosAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const peticionExitosa = true;
            if (peticionExitosa) {
                resolve({ id: 101, username: "dev_ana" });
            } else {
                reject("Tuvimos un problema del servidor. Inténtalo más tarde.");
            }
        }, 1500); // Demora simulada de 1.5 segundos
    });
};

// FORMA CLÁSICA CON .then() y .catch()
// console.log("--- Cargando con then/catch... ---");
// pedirDatosAPI()
//     .then(respuesta => console.log("Respuesta con .then():", respuesta))
//     .catch(error => console.error("Error .catch():", error));

// FORMA MODERNA CON "async" y "await" + "try/catch" -> (El código es más legible, parece sincrónico)
const iniciarApp = async () => {
    try {
        console.log("--- Cargando con async/await... ---");
        const datos = await pedirDatosAPI();
        console.log("Respuesta Exitosa (Async/Await):", datos);
    } catch (error) {
        console.error("Error en la app (Catch):", error);
    }
};

// Descomenta la siguiente línea para ejecutar el llamado asíncrono
// iniciarApp();