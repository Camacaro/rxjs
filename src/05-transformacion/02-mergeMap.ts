/**
 * mergeMap
 * 
 * Al ingresar un valor el mergeMap retornara un nuevo
 * opbservable y se subscribira al momento, esto quiere
 * decir que ese nuevo observable estara emitiendo valores
 * si entra un nuevo valor se creara otro observable por lo 
 * cual se estaran emitiando ambos valor al mismo tiempo
 * como se comporte el observable y se completta cuando todos 
 * los observables esten completados
 * 
 * 
 */

import { of, interval, fromEvent } from "rxjs";
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';

 const letras$ = of('a', 'b', 'c')

letras$.pipe(

    /**
     * a,b y c entran tan rapido que hace que se ejecute el otro observable
     * (interval), y emita su valor la respuesta seria 
     * a0, b0, c0 -> por cada uno se emite tres veces (take(3))
     * a1, b1, c1
     * a2, b2, c2
     */

    mergeMap( (letra) => interval(1000).pipe(
        
        map( i => letra + i),

        take(3),
    )),

)
// .subscribe({
//     next: val => console.log('nect:', val),
//     complete: () => console.log('Completado')
// })

const mousedown$ = fromEvent( document, 'mousedown')
const mouseup$ = fromEvent( document, 'mouseup')
const interval$ = interval()

mousedown$.pipe(

    mergeMap( () => interval$.pipe(
        /**
         * Te voy a dejar pasar hasta que el
         * mouseup emita un valor
         */
        takeUntil( mouseup$ )
    ) )
)
.subscribe( console.log )