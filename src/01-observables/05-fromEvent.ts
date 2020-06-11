import { fromEvent, Observer } from "rxjs";

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>( document, 'click')
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup')

const observer: Observer <any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.log('Completado [obs]')
}

// src1$.subscribe( ev => {
//     console.log( ev.x );
//     console.log( ev.y );
// } )

src1$.subscribe( ({x, y}) => {
    console.log( x, y );
} )

src2$.subscribe( evento => {
    console.log(evento.key);
} )