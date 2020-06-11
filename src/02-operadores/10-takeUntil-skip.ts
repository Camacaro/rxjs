
/**
 * takeUntil
 * 
 * Se emiten valores hasta que el segundo 
 * observable emita un valor es cuando se 
 * completa el takeUntil
 */

import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';


const boton = document.createElement('button')
boton.innerHTML = `Detener Timer`

document.querySelector('body').append( boton )

const counter$ = interval(1000)
// const clickBtn$ = fromEvent( boton, 'click')

const clickBtn$ = fromEvent( boton, 'click')
.pipe(

    /**
     * Encadenamiendo de pipe
     */
    tap( () => console.log('tap antes del skip')),
    /**
     * Cuantas emisiones yo quiero saltarme 
     * para luego de ello se ejecute
     * el complete. Que es lo que se pasa
     * al takeUntil
     * 
     * skip(1) -> Se saltara solo uno, en el
     * 2 se emitira el valor
     */
    skip(1),

    /**
     * Este tap se ejecuta en el 2 proceso del skip
     */
    tap( () => console.log('tap despues del skip'))
)

counter$
.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('Complete')
})