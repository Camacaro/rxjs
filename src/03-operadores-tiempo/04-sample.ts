/**
 * sample(click$)
 * 
 * Depende de un observer
 */

import { interval, fromEvent } from "rxjs";
import { sample } from "rxjs/operators";


const interval$ = interval(500)

const click$ = fromEvent( document, 'click')

interval$
.pipe(
    /**
     * El valor se emitira cuando 
     * se genere un evento en el click
     */
    sample( click$ )
)
.subscribe( console.log )

