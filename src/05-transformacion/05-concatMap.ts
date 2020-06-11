

/**
 * concatMap( () => interval$.pipe( take(3) ) )
 * 
 * Lo que hace es concatenar los observables
 * cuando llega un source este crea un nuevo observable el
 * cual se subscribe y empieza a emitir, llega otro source
 * y ese nuevo observable se pone en cola hasta que se complete
 * el primer observable y luego de alli empieza a emitir el 2 observable
 * 
 */

import { interval, fromEvent } from 'rxjs';
import { take, switchMap, concatMap } from 'rxjs/operators';

const interval$ = interval(500).pipe( take(3) )
const click$ = fromEvent( document, 'click' )

click$.pipe(
    
    // Mantiene el ultimo observable emitido
    // switchMap( () => interval$ ),

    /**
     * Concatena los interval$,
     * al terminar uno emite el siguiente
     */
    concatMap( () => interval$ )

).subscribe( console.log )