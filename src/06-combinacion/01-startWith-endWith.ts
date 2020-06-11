
/** 
 * 
 * startWith('a')
 * 
 * Empieza emitiendo un valor
 * 
 * endWith('s')
 * 
 * Termina emitiendo un valor
*/

import { of } from "rxjs";
import { startWith, endWith } from "rxjs/operators";

const numeros$ = of(1,2,3).pipe(
    /**
     * Se emite primero, comienza con ello
     */
    startWith('a', 'b', 'c'),

    /**
     * Se emite de ultimo
     */
    endWith('x', 'y', 'z')
)

numeros$.subscribe( console.log )