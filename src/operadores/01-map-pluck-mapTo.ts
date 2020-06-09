import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';

// Ejemplo 1
// range(1,5)
// .pipe(
//     /**
//      * <Entrada, Salida>
//      */
//     map <number, string> ( val =>  (val * 10).toString() )
// )
// .subscribe( console.log )



// Ejemplo 2
const keyup$ = fromEvent <KeyboardEvent> ( document, 'keyup' )

/**
 * Filtrar
 */
const keyupCode$ = keyup$.pipe(
    map( event => event.code)
)

/**
 * Filtrar en objectos
 */
const keyupPluck$ = keyup$.pipe(
    
    // pluck('key')

    // objecto dentro un objecto
    pluck('target', 'baseURI')
)

/**
 * Retornar siempre un valor
 */
const keyupMapTo$ = keyup$.pipe(
    // se ejecuta por secuencia 
    mapTo(1),
    mapTo('tecla presionada'),
)

keyup$.subscribe( console.log )
keyupCode$.subscribe( code => console.log('map', code) )
keyupPluck$.subscribe( code => console.log('pluck', code) )
keyupMapTo$.subscribe( code => console.log('mapTo', code) )