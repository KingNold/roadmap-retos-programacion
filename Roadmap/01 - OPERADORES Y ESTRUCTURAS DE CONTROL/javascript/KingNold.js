/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

let number1 = 15;
let number2 = 10;
let a = 2;
let b = 3;

//operadores aritmeticos
//suma
let suma = number1 + number2;

//resta
let resta = number1 - number2;

//multiplicacion
let multiplicar = number1 * number2;

//division
let division = number1 / number2;

//modulo
let devolucionResto = number1 % number2;

//exponensiacion
let elevadoA = number1 ** number2

//----------------------------------------------
//operadores de asignacion

//asignacion 
let c = number1 + suma; // asigna el valor de la suma a "c"

//suma y asignacion
suma += 1; // le sumamos y asignamos 1 a "suma"

//resta y asignacion
suma -= 1;

//multiplicacion y asignacion
suma *= 2;

//division y asignacion
suma /= 2;

//modulo y asignacion
suma %= 5;

//exponenciacion y asignacion
suma **= 2;

//-------------------------------------------
//operadores unarios
number2 ++;
number2 --;
++number2;
--number2;
-number2;

//-------------------------------------------
//operadores de igualdad
//igualdad
a == b;
//desigualdad
a != b;
//mayor que
a > b;
//mayor o igual que
a >= b;
//menor que
a < b;
//menor o igual que
a <= b;

//---------------------------------------------
//operadores de identidad
//identidad
a === b; //Comprueba si el valor y el tipo de dato de a es igual al de b.
//no identico
a !== b;

//--------------------------------------------
//operadores logicos
//and &&
true && true 
// or ||
true || false
// not !
!true
// xor or exclusivo
//a ^ b;
// not unuario: ~a
// double not: ~~a

//---------------------------------------------
//operadores nullish Coalescing
a ?? b;

//-------------------------------------------
//operador bit a bit
// operador left shift: <<
// operador rigth shift: >>
// operador rigth shift sin signo: >>>
a <<= b;
a >>= b;
a >>>= b;
a &= b;
a |= b;
a ^= b;

//-------------------------------------------
//optional chaining
/*
user.attrs.power     // TypeError: Cannot read properties of undefined (reading 'power')
user.attrs.life      // TypeError: Cannot read properties of undefined (reading 'life')

user.attrs && console.log(user.attrs.life);   // Comprobamos si existe attrs antes
*/

//--------------------------------------------
//Ejemplos con estructuras de control: