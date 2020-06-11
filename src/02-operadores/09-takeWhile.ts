import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';


/**
 * takeWhile 
 * 
 * Sirve como un condicional while 
 * dejara emitir valores mientras se cumpla 
 * la funcion, tambien tiene un parametro para 
 * dejar pasar el ultimo valor que hizo que se 
 * completara la emision, al no cumplir con la 
 * condicion del while este emite el complete
 */


const click$ = fromEvent <MouseEvent> ( document, 'click')

click$
.pipe(
    map( ({x, y}) => ({x, y}) ),
    /**
     * El ultimo argumento es para qeu si mande 
     * el ultimo valor que rompe la condicion
     */
    takeWhile( ({y}) => y <= 150, true )
)
.subscribe({
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.log('Completado [obs]')
})