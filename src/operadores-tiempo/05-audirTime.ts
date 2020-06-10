/**
 * auditTime(2000)
 * 
 * 
 */

import { fromEvent } from "rxjs";
import { auditTime, tap, map } from 'rxjs/operators';

const click$ = fromEvent <MouseEvent> ( document, 'click' )

click$
.pipe(
    map( ({ x }) => x ),
    tap( val => console.log('tap', val)),
    /**
     * Funciona es emitir luego de los 2s
     */
    auditTime(2000)
)
.subscribe( console.log )