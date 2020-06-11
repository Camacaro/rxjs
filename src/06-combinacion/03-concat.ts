/**
 * 
 * concat( obs1$, obs2$, obs3$, ...)
 * 
 * lo que hace es concatenar observables 
 * al terminar uno (complete) es que puede 
 * empezar a emitir el otro
 * 
 */

import { interval, concat } from "rxjs";
import { take } from 'rxjs/operators';


const interval$ = interval(1000)

/**
 * Esto regresa un observable
 */
concat( 
    interval$.pipe( take(3) ) ,
    interval$.pipe( take(2) ) ,
    [1,2,3,4]
).subscribe( console.log  )