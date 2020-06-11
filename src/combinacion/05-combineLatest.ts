
/**
 * 
 * combineLast( obs1$, obs2$ )
 * 
 * combina la emision de los observables en un arreglo
 * y se emite cuando ambos emisiones ya han emitido
 * 
 * si emite el primero se combina con el segundo
 * si se emite el segundo se combina otra vex con 
 * el primero que emitio 
 * 
 * Se completa cuando todos se hayan terminado, complete 
 */


import { fromEvent, merge, combineLatest } from 'rxjs';
import { pluck } from 'rxjs/operators';


const keyup$ = fromEvent( document, 'keyup' )
const click$ = fromEvent( document, 'click' )


combineLatest( 
    
    keyup$.pipe( pluck('type') ), 
    
    click$.pipe( pluck('type') )
    
)// .subscribe( console.log )


// Ejemplo 2

const input1 = document.createElement('input')
const input2 = document.createElement('input')

input1.placeholder = 'Email@gmail.com'
input2.placeholder = 'password'

document.querySelector('body').append(input1, input2)

// Helper
const getInputStream = ( elem: HTMLElement ) => {
    return fromEvent <KeyboardEvent> (elem, 'keyup').pipe(
        pluck <KeyboardEvent, string> ('target', 'value')
    )
}

combineLatest(
    
    getInputStream( input1 ),
    getInputStream( input2 )

).subscribe( console.log )