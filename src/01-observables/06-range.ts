import { of, range, asyncScheduler } from 'rxjs';

//const src$ = of(1,2,3,4,5)
/**
 * Empieza con un valor y respuesta a la cantidad
 * de secuecia subsiguiente
 * range(-5, 10)
 * -5, -4, -3, -2, -1, 0, 1, 2, 3, 4
 * 
 * range(5)
 * 0, 1, 2, 3, 4
 */

// Esto es sincrono
console.log('SINCRONO');
const src$ = range(1, 5)

console.log('Inicio');
src$.subscribe( console.log )
console.log('Fin');


// Esto es Asyncrono
console.log('ASINCRONO');
const src2$ = range(1, 5, asyncScheduler)

console.log('Inicio');
src2$.subscribe( console.log )
console.log('Fin');