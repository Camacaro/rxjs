/**
 * debounceTime
 * 
 * Este funciona con retraso en la emicion de datos
 * si llegna datos antes del segundo se emitira el siguiente valor
 * al cabo de ese segundo sino es que llega uno antes
 * 
 * a         b c          d
 * debounceTime(1000) 1s
 * -> 1s a     -> 1s c    -> 1s d
 */

import { fromEvent } from "rxjs";
import { debounceTime, map, tap, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent ( document, 'click')

// Ejemplo 1
click$
.pipe(
    /**
     * Controlar la emision de datos 
     * 
     * emitira al cabo de 3s sino llega datos
     */
    debounceTime(3000)
)
//.subscribe( console.log )

const input = document.createElement('input')
document.querySelector('body').append( input )


/**
 * Con este ejemplo lo que se hizo fue detener el 
 * envio de dato un segundo, filtrar el valor del input
 * y verificar que no se haya escrito lo mismo anteriormente
 */
const input$ = fromEvent <KeyboardEvent> ( input, 'keyup')
input$
.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
    // tap( event => console.log(event.target.) ),
    // map( event => { value: event.target.value } )
)
.subscribe( console.log )