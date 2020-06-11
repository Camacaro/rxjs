
/**
 * 
 * exhaustMap ( () => interval$.pipe( take(3) ) )
 * 
 * Este solo mantiene un observable emitiendo cuando se complete
 * puede emitir otro observable, si le llegan valores mientras
 * se esta emitiendo un observable, éste lo va a ignorar
 * 
 */


import { interval, fromEvent } from 'rxjs';
import { take, concatMap, exhaustMap } from 'rxjs/operators';

const interval$ = interval(500).pipe( take(3) )
const click$ = fromEvent( document, 'click' )

click$.pipe(
    
    /**
     * Concatena los interval$,
     * al terminar uno emite el siguiente
     */
    // concatMap( () => interval$ )

    /**
     * Emite el primer interval$
     * si se hace click ignorara esos observables
     * 
     * cuando se haya completado se podra emitri un 
     * nuevo observable al hacer click
     */
    exhaustMap ( () => interval$ )

).subscribe( console.log )