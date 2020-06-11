/**
 * First 
 * 
 * se ejecutara hasta que se cumpla la condicion
 * que tenga o solo emite el primer valor si no
 * se especifica 
 */

import { fromEvent } from "rxjs";
import { take, first, tap, map } from "rxjs/operators";

const click$ = fromEvent <MouseEvent> ( document, 'click')

click$
.pipe(

    tap <MouseEvent> ( () => console.log('tap') ),

    // map ( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // })),

    map ( ({ clientX, clientY }) => ({clientX, clientY })),

    first ( event => event.clientY >= 150 )
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})