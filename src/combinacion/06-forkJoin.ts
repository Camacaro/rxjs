
/**
 * 
 * forkJoin( obs1$, obs2$, obs3$ )
 * 
 * emite valor cuando ya todos los observable han sido completado
 * es ahi cuando son enviados como un arrglo los ultimos valores
 * de los observables
 * 
 */

import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

const numeros$ = of(1,2,3,4)
const interval$ = interval(1000).pipe( take(3) )
const letras$ = of('a', 'b', 'c').pipe( delay(3500) )

/**
 * Obtengo el ultimo valor emitdo en los tres observables
 * cuando estan terminado
 */

// Respuesta en Arreglo
forkJoin(
    numeros$,
    interval$,
    letras$,
).subscribe( resp => {

    console.log('numeros:', resp[0]);
    console.log('intervalo:', resp[1]);
    console.log('letras:', resp[2]);
})

// Respuesta en objecto
forkJoin({
    numeros$,
    interval$,
    letras$,
}).subscribe( resp => {
    console.log(resp)
})

// Respuesta en objecto personalizado
forkJoin({
    num: numeros$,
    int: interval$,
    let: letras$,
}).subscribe( resp => {
    console.log(resp)
})

