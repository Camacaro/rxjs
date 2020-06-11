/**
 * throttleTime(1000)
 * 
 * es lo contratio del debounceTime, la diferencia 
 * esta en que el emite el valor y luego de enviarlo
 * espera un tiempo antes de vovler a enviar el proximo
 * dato, cuando haya pasado ese tiempo el volvera a enviar 
 * ese dato
 */


import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent ( document, 'click')

// Ejemplo 1
click$
.pipe(
    /**
     * Controlar la emision de datos 
     * 
     * emitira el valor y esperar 3s antes de 
     * emitir otro
     */
    throttleTime(3000)
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
    /**
     * leading: es para ver si quiero el primer valor de emision
     * trailing: si quiero el ultimo emitido, toda la palabra
     */
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe( console.log )