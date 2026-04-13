/* ==========================================================================
   EJERCICIOS PRÁCTICOS DE JAVASCRIPT - FUNDAMENTOS
   ==========================================================================
   Cada sección corresponde a un tema de practice.js.
   
   INSTRUCCIONES:
   • Completa el código donde dice "TU CÓDIGO AQUÍ".
   • Ejecuta con Node.js: node ejercicios.js
   • Las SOLUCIONES están al final de cada sección, ¡intenta primero sin mirar!
   ========================================================================== */


/* --------------------------------------------------------------------------
   EJERCICIO 1: VARIABLES Y TIPOS DE DATOS
   -------------------------------------------------------------------------- */

// 1.1 — Declara una variable "ciudad" con let y asígnale el nombre de tu ciudad.
//       Luego reasígnala a otra ciudad. Imprime ambas.
// TU CÓDIGO AQUÍ

let ciudad = "Medellín";
console.log(ciudad);
ciudad = "Bogotá";
console.log(ciudad);

// 1.2 — Declara una constante "PI" con el valor 3.14159.
//       Intenta reasignarla a otro valor. ¿Qué ocurre?
// TU CÓDIGO AQUÍ

const PI = 3.14159;
console.log(PI);
PI = 47;
console.log(PI);

// 1.3 — Crea variables para tu nombre, tu edad y si eres estudiante (boolean).
//       Usa un Template Literal para imprimir:
//       "Me llamo [nombre], tengo [edad] años y [sí/no] soy estudiante."
//       Pista: usa el operador ternario dentro del template literal para sí/no.
// TU CÓDIGO AQUÍ

const nombre = "Manuel"
const edad = 22
const esEstudiante = true
console.log(`Me llamo ${nombre}, tengo ${edad} años de edad y ${esEstudiante ? "si" : "no"} soy estudiante`)

// 1.4 — ¿Cuál es el tipo de dato de cada una de estas variables?
//       Usa typeof para averiguarlo e imprímelo.
const misterio1 = 42;
const misterio2 = "Hola";
const misterio3 = true;
const misterio4 = null;       // ¡Este te va a sorprender!
let misterio5;

console.log(typeof misterio1)
console.log(typeof misterio2)
console.log(typeof misterio3)
console.log(typeof misterio4)
console.log(typeof misterio5)
// TU CÓDIGO AQUÍ



/* --------------------------------------------------------------------------
   EJERCICIO 2: OPERADORES Y COMPARACIONES
   -------------------------------------------------------------------------- */

// 2.1 — Calcula el resto de dividir 27 entre 4. Imprime el resultado.
// TU CÓDIGO AQUÍ
const num1 = 27
const num2 = 4
console.log(num1 % num2)

// 2.2 — Sin ejecutar el código, predice qué devuelven estas comparaciones.
//       Luego descomenta los console.log para verificar tus respuestas.
// console.log(5 == "5");     // Tu predicción: true
// console.log(5 === "5");    // Tu predicción: false
// console.log(0 == false);   // Tu predicción: true
// console.log(0 === false);  // Tu predicción: false
// console.log(null == undefined);   // Tu predicción: true
// console.log(null === undefined);  // Tu predicción: false


// 2.3 — Un parque de diversiones permite entrar si:
//       - Tienes al menos 12 años O
//       - Vienes acompañado de un adulto (boolean)
//       Crea las variables y evalúa si "puedeEntrar". Imprime el resultado.
// TU CÓDIGO AQUÍ

// 2.4 — Una tienda online ofrece envío gratis si:
//       - El total de la compra es mayor a $100 Y
//       - El usuario es miembro premium (boolean)
//       O si el total supera $250 (sin importar si es premium).
//       Evalúa si "envioGratis" es true o false. Imprime el resultado.
// TU CÓDIGO AQUÍ



/* --------------------------------------------------------------------------
   EJERCICIO 3: CONDICIONALES
   -------------------------------------------------------------------------- */

// 3.1 — Escribe un condicional if/else if/else que clasifique una temperatura:
//       - Menor a 10:  "Hace frío 🥶"
//       - Entre 10 y 25: "Clima agradable 😊"
//       - Mayor a 25:  "Hace calor 🔥"
const temperatura = 18;
// TU CÓDIGO AQUÍ


// 3.2 — Usa un OPERADOR TERNARIO para asignar a una variable "acceso" el valor
//       "Permitido" si la edad es >= 18, o "Denegado" si no lo es.
const edadUsuario = 16;
// TU CÓDIGO AQUÍ


// 3.3 — Usa un SWITCH para imprimir un mensaje según el mes del año (número 1-12).
//       Agrupa los meses por estación (ej: 12, 1, 2 → "Invierno").
//       No olvides el 'break' ni el 'default'.
const mesActual = 7;
// TU CÓDIGO AQUÍ


// 3.4 — (DESAFÍO) Escribe una función que reciba un número y devuelva:
//       "FizzBuzz" si es divisible por 3 Y por 5,
//       "Fizz" si solo es divisible por 3,
//       "Buzz" si solo es divisible por 5,
//       El número en texto si no es divisible por ninguno.
//       Pista: usa el operador módulo (%)
// TU CÓDIGO AQUÍ



/* --------------------------------------------------------------------------
   EJERCICIO 4: BUCLES (LOOPS)
   -------------------------------------------------------------------------- */

// 4.1 — Usa un bucle FOR para imprimir los números del 1 al 10.
// TU CÓDIGO AQUÍ


// 4.2 — Usa un bucle FOR para imprimir los números pares del 2 al 20.
// TU CÓDIGO AQUÍ


// 4.3 — Usa un bucle WHILE para hacer una "cuenta regresiva" del 5 al 1,
//       y al final imprime "¡Despegue! 🚀"
// TU CÓDIGO AQUÍ


// 4.4 — (DESAFÍO) Usa un bucle FOR para calcular el factorial de 6 (6!).
//       Recuerda: 6! = 6 × 5 × 4 × 3 × 2 × 1 = 720
// TU CÓDIGO AQUÍ



/* --------------------------------------------------------------------------
   EJERCICIO 5: FUNCIONES
   -------------------------------------------------------------------------- */

// 5.1 — Crea una FUNCIÓN CLÁSICA "saludar" que reciba un nombre
//       y devuelva "¡Hola, [nombre]! Bienvenido/a."
// TU CÓDIGO AQUÍ


// 5.2 — Crea una FUNCIÓN EXPRESADA (const) "calcularPromedio" que reciba
//       tres calificaciones y devuelva el promedio.
// TU CÓDIGO AQUÍ


// 5.3 — Crea una ARROW FUNCTION "esMayorDeEdad" que reciba una edad
//       y devuelva true o false (con retorno implícito en una línea).
// TU CÓDIGO AQUÍ


// 5.4 — Crea una ARROW FUNCTION "calcularPrecioFinal" que reciba un precio
//       y un porcentaje de descuento, y devuelva el precio con descuento aplicado.
//       Ejemplo: calcularPrecioFinal(200, 15) → 170
// TU CÓDIGO AQUÍ


// 5.5 — (DESAFÍO) Crea una función "contarVocales" que reciba un string
//       y devuelva cuántas vocales tiene (a, e, i, o, u).
//       Pista: convierte a minúsculas con .toLowerCase() e itera cada carácter.
// TU CÓDIGO AQUÍ



/* --------------------------------------------------------------------------
   EJERCICIO 6: ARRAYS Y MÉTODOS MODERNOS
   -------------------------------------------------------------------------- */

const productos = [
    { nombre: "Laptop", precio: 1200, enStock: true },
    { nombre: "Mouse", precio: 25, enStock: false },
    { nombre: "Teclado", precio: 75, enStock: true },
    { nombre: "Monitor", precio: 400, enStock: true },
    { nombre: "Webcam", precio: 60, enStock: false },
    { nombre: "Audífonos", precio: 150, enStock: true },
];

// 6.1 — Usa .forEach() para imprimir el nombre y precio de cada producto.
//       Formato: "Laptop - $1200"
// TU CÓDIGO AQUÍ


// 6.2 — Usa .map() para crear un nuevo array con solo los NOMBRES de los productos.
//       Imprime el resultado.
// TU CÓDIGO AQUÍ


// 6.3 — Usa .filter() para obtener solo los productos que ESTÁN EN STOCK.
//       Imprime el resultado.
// TU CÓDIGO AQUÍ


// 6.4 — Usa .find() para encontrar el PRIMER producto cuyo precio sea mayor a 100.
//       Imprime el resultado.
// TU CÓDIGO AQUÍ


// 6.5 — Usa .reduce() para calcular el PRECIO TOTAL de todos los productos.
//       Imprime el resultado.
// TU CÓDIGO AQUÍ


// 6.6 — (DESAFÍO) ENCADENA métodos: filtra los productos en stock, luego
//       aplica un 10% de descuento con .map(), y finalmente suma el total
//       con .reduce(). Imprime el total con descuento.
// TU CÓDIGO AQUÍ



/* --------------------------------------------------------------------------
   EJERCICIO 7: OBJETOS, DESESTRUCTURACIÓN Y SPREAD
   -------------------------------------------------------------------------- */

const estudiante = {
    nombre: "María",
    carrera: "Ingeniería de Software",
    semestre: 6,
    materias: ["Algoritmos", "Bases de Datos", "Redes"],
    universidad: "UNAM",
};

// 7.1 — Accede a las propiedades del objeto usando notación de punto
//       e imprime: "María estudia Ingeniería de Software en la UNAM"
// TU CÓDIGO AQUÍ


// 7.2 — Usa DESESTRUCTURACIÓN para extraer "nombre", "carrera" y "semestre"
//       en variables. Renombra "nombre" a "nombreEstudiante".
//       Imprime las tres variables.
// TU CÓDIGO AQUÍ


// 7.3 — Usa el SPREAD OPERATOR para crear un nuevo objeto "estudianteActualizado"
//       que sea copia de "estudiante" pero con semestre = 7 y una nueva propiedad
//       "promedio" con valor 9.2. Imprime el nuevo objeto.
//       ¿El objeto original cambió?
// TU CÓDIGO AQUÍ


// 7.4 — Tienes dos arrays. Usa SPREAD para fusionarlos en uno solo
//       y agrega un elemento extra al final.
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];
// TU CÓDIGO AQUÍ


// 7.5 — (DESAFÍO) Crea una función "crearPerfil" que reciba un objeto con
//       { nombre, edad } y devuelva un NUEVO objeto con esas propiedades más:
//       "id" (un número aleatorio), "creadoEn" (la fecha actual como string).
//       Usa spread para combinar.
// TU CÓDIGO AQUÍ



/* --------------------------------------------------------------------------
   EJERCICIO 8: ASINCRONISMO (PROMESAS Y ASYNC/AWAIT)
   -------------------------------------------------------------------------- */

// 8.1 — Crea una función "esperarSegundos" que reciba un número de segundos
//       y devuelva una Promesa que se resuelva después de ese tiempo
//       con el mensaje: "¡Han pasado [n] segundos!"
//       Luego consúmela con .then()
// TU CÓDIGO AQUÍ


// 8.2 — Crea una función "lanzarMoneda" que devuelva una Promesa.
//       Después de 1 segundo, genera un número aleatorio.
//       Si es >= 0.5, resuelve con "Cara 🪙".
//       Si es < 0.5, rechaza con "Cruz ❌".
//       Consúmela con .then() y .catch()
// TU CÓDIGO AQUÍ


// 8.3 — Reescribe el consumo de "lanzarMoneda" usando ASYNC/AWAIT con try/catch.
// TU CÓDIGO AQUÍ


// 8.4 — Simula obtener datos de un usuario. Crea "obtenerUsuario" que devuelva
//       una Promesa que tras 1.5s resuelva con { id: 1, nombre: "Carlos", rol: "admin" }.
//       Crea otra función "obtenerPermisos" que reciba un rol y tras 1s resuelva
//       con un array de permisos (ej: ["leer", "escribir", "eliminar"] para "admin").
//       Usa ASYNC/AWAIT para llamar primero a obtenerUsuario, luego con su rol
//       llama a obtenerPermisos, e imprime todo el resultado.
// TU CÓDIGO AQUÍ


// 8.5 — (DESAFÍO) Usa Promise.all() para ejecutar tres promesas en PARALELO:
//       - Una que resuelva "Datos del servidor A" tras 1s
//       - Una que resuelva "Datos del servidor B" tras 2s
//       - Una que resuelva "Datos del servidor C" tras 1.5s
//       Imprime todos los resultados cuando TODAS se hayan resuelto.
//       ¿Cuánto tiempo tardó en total? (Pista: no es 4.5 segundos)
// TU CÓDIGO AQUÍ



/* ==========================================================================
   ========================= SOLUCIONES ====================================
   ==========================================================================
   ¡INTENTA resolver los ejercicios antes de ver las soluciones!
   Descomenta cada bloque de solución solo después de intentarlo.
   ========================================================================== */

/*
// ---- SOLUCIÓN 1.1 ----
let ciudad = "Bogotá";
console.log("Ciudad original:", ciudad);
ciudad = "Medellín";
console.log("Ciudad reasignada:", ciudad);

// ---- SOLUCIÓN 1.2 ----
const PI = 3.14159;
// PI = 3.14; // ❌ TypeError: Assignment to constant variable.
console.log("PI:", PI);

// ---- SOLUCIÓN 1.3 ----
const miNombre = "Jacev";
const miEdad = 22;
const soyEstudiante = true;
console.log(`Me llamo ${miNombre}, tengo ${miEdad} años y ${soyEstudiante ? "sí" : "no"} soy estudiante.`);

// ---- SOLUCIÓN 1.4 ----
console.log(typeof misterio1); // "number"
console.log(typeof misterio2); // "string"
console.log(typeof misterio3); // "boolean"
console.log(typeof misterio4); // "object" ← ¡es un bug histórico de JS! null debería ser "null"
console.log(typeof misterio5); // "undefined"

// ---- SOLUCIÓN 2.1 ----
console.log("Resto de 27 / 4:", 27 % 4); // 3

// ---- SOLUCIÓN 2.2 ----
// 5 == "5"            → true   (conversión implícita)
// 5 === "5"           → false  (tipos distintos)
// 0 == false          → true   (ambos "falsy")
// 0 === false         → false  (number vs boolean)
// null == undefined   → true   (caso especial de JS)
// null === undefined  → false  (tipos distintos)

// ---- SOLUCIÓN 2.3 ----
const edadVisitante = 10;
const acompanado = true;
const puedeEntrar = edadVisitante >= 12 || acompanado;
console.log("¿Puede entrar al parque?:", puedeEntrar); // true

// ---- SOLUCIÓN 2.4 ----
const totalCompra = 120;
const esPremium = true;
const envioGratis = (totalCompra > 100 && esPremium) || totalCompra > 250;
console.log("¿Envío gratis?:", envioGratis); // true

// ---- SOLUCIÓN 3.1 ----
if (temperatura < 10) {
    console.log("Hace frío 🥶");
} else if (temperatura <= 25) {
    console.log("Clima agradable 😊");
} else {
    console.log("Hace calor 🔥");
}

// ---- SOLUCIÓN 3.2 ----
const acceso = edadUsuario >= 18 ? "Permitido" : "Denegado";
console.log("Acceso:", acceso);

// ---- SOLUCIÓN 3.3 ----
switch (mesActual) {
    case 12: case 1: case 2:
        console.log("Invierno ❄️");
        break;
    case 3: case 4: case 5:
        console.log("Primavera 🌸");
        break;
    case 6: case 7: case 8:
        console.log("Verano ☀️");
        break;
    case 9: case 10: case 11:
        console.log("Otoño 🍂");
        break;
    default:
        console.log("Mes no válido");
}

// ---- SOLUCIÓN 3.4 ----
function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return String(n);
}
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(9));  // "Fizz"
console.log(fizzBuzz(10)); // "Buzz"
console.log(fizzBuzz(7));  // "7"

// ---- SOLUCIÓN 4.1 ----
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// ---- SOLUCIÓN 4.2 ----
for (let i = 2; i <= 20; i += 2) {
    console.log("Par:", i);
}

// ---- SOLUCIÓN 4.3 ----
let cuenta = 5;
while (cuenta > 0) {
    console.log(`${cuenta}...`);
    cuenta--;
}
console.log("¡Despegue! 🚀");

// ---- SOLUCIÓN 4.4 ----
let factorial = 1;
for (let i = 1; i <= 6; i++) {
    factorial *= i;
}
console.log("6! =", factorial); // 720

// ---- SOLUCIÓN 5.1 ----
function saludar(nombre) {
    return `¡Hola, ${nombre}! Bienvenido/a.`;
}
console.log(saludar("Carlos"));

// ---- SOLUCIÓN 5.2 ----
const calcularPromedio = function(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
};
console.log("Promedio:", calcularPromedio(90, 85, 92));

// ---- SOLUCIÓN 5.3 ----
const esMayorDeEdad = (edad) => edad >= 18;
console.log("¿Mayor de edad (20)?", esMayorDeEdad(20)); // true
console.log("¿Mayor de edad (15)?", esMayorDeEdad(15)); // false

// ---- SOLUCIÓN 5.4 ----
const calcularPrecioFinal = (precio, descuento) => precio - (precio * descuento / 100);
console.log("Precio final:", calcularPrecioFinal(200, 15)); // 170

// ---- SOLUCIÓN 5.5 ----
function contarVocales(texto) {
    const vocales = "aeiouáéíóú";
    let contador = 0;
    for (const letra of texto.toLowerCase()) {
        if (vocales.includes(letra)) contador++;
    }
    return contador;
}
console.log("Vocales en 'Murciélago':", contarVocales("Murciélago")); // 5

// ---- SOLUCIÓN 6.1 ----
productos.forEach(p => console.log(`${p.nombre} - $${p.precio}`));

// ---- SOLUCIÓN 6.2 ----
const nombresProductos = productos.map(p => p.nombre);
console.log("Nombres:", nombresProductos);

// ---- SOLUCIÓN 6.3 ----
const enStock = productos.filter(p => p.enStock);
console.log("En stock:", enStock);

// ---- SOLUCIÓN 6.4 ----
const primerCaro = productos.find(p => p.precio > 100);
console.log("Primer producto > $100:", primerCaro);

// ---- SOLUCIÓN 6.5 ----
const precioTotal = productos.reduce((acc, p) => acc + p.precio, 0);
console.log("Precio total:", precioTotal);

// ---- SOLUCIÓN 6.6 ----
const totalConDescuento = productos
    .filter(p => p.enStock)
    .map(p => ({ ...p, precio: p.precio * 0.9 }))
    .reduce((acc, p) => acc + p.precio, 0);
console.log("Total en stock con 10% descuento:", totalConDescuento);

// ---- SOLUCIÓN 7.1 ----
console.log(`${estudiante.nombre} estudia ${estudiante.carrera} en la ${estudiante.universidad}`);

// ---- SOLUCIÓN 7.2 ----
const { nombre: nombreEstudiante, carrera, semestre } = estudiante;
console.log(nombreEstudiante, carrera, semestre);

// ---- SOLUCIÓN 7.3 ----
const estudianteActualizado = { ...estudiante, semestre: 7, promedio: 9.2 };
console.log("Actualizado:", estudianteActualizado);
console.log("Original:", estudiante); // No cambió

// ---- SOLUCIÓN 7.4 ----
const fullStack = [...frontend, ...backend, "DevOps"];
console.log("Full stack:", fullStack);

// ---- SOLUCIÓN 7.5 ----
const crearPerfil = ({ nombre, edad }) => ({
    ...{ nombre, edad },
    id: Math.floor(Math.random() * 10000),
    creadoEn: new Date().toISOString(),
});
console.log(crearPerfil({ nombre: "Luis", edad: 30 }));

// ---- SOLUCIÓN 8.1 ----
const esperarSegundos = (segundos) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`¡Han pasado ${segundos} segundos!`);
        }, segundos * 1000);
    });
};
esperarSegundos(2).then(msg => console.log(msg));

// ---- SOLUCIÓN 8.2 ----
const lanzarMoneda = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() >= 0.5 ? resolve("Cara 🪙") : reject("Cruz ❌");
        }, 1000);
    });
};
lanzarMoneda()
    .then(res => console.log("Resultado:", res))
    .catch(err => console.log("Resultado:", err));

// ---- SOLUCIÓN 8.3 ----
const jugarMoneda = async () => {
    try {
        const resultado = await lanzarMoneda();
        console.log("Async/Await - Resultado:", resultado);
    } catch (error) {
        console.log("Async/Await - Resultado:", error);
    }
};
// jugarMoneda();

// ---- SOLUCIÓN 8.4 ----
const obtenerUsuario = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, nombre: "Carlos", rol: "admin" });
        }, 1500);
    });
};

const obtenerPermisos = (rol) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const permisos = {
                admin: ["leer", "escribir", "eliminar"],
                editor: ["leer", "escribir"],
                viewer: ["leer"],
            };
            resolve(permisos[rol] || []);
        }, 1000);
    });
};

const cargarDashboard = async () => {
    const usuario = await obtenerUsuario();
    console.log("Usuario:", usuario);
    const permisos = await obtenerPermisos(usuario.rol);
    console.log("Permisos:", permisos);
};
// cargarDashboard();

// ---- SOLUCIÓN 8.5 ----
const cargarServidores = async () => {
    const inicio = Date.now();
    const resultados = await Promise.all([
        new Promise(res => setTimeout(() => res("Datos del servidor A"), 1000)),
        new Promise(res => setTimeout(() => res("Datos del servidor B"), 2000)),
        new Promise(res => setTimeout(() => res("Datos del servidor C"), 1500)),
    ]);
    const duracion = ((Date.now() - inicio) / 1000).toFixed(1);
    console.log("Resultados:", resultados);
    console.log(`Tiempo total: ${duracion}s (¡aprox 2s, no 4.5s, porque corrieron en paralelo!)`);
};
// cargarServidores();
*/
