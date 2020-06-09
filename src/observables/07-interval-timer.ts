import { interval, Observer, timer } from "rxjs";

const observer: Observer <any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.log('Completado [obs]')
}

/**
 * Se empieza a ejeuctar la funcion
 * interval cada 1s (1000)
 * hasta el infinito y es async por 
 * naturaleza (ASINCRONO)
 */
const interval$ = interval(1000)

// (ASINCRONO), no cumple esta secuencia
// console.log('Inicio');
// interval$.subscribe( observer )
// console.log('Final');


const hoyEn5 = new Date() // ahora
// le sumo 5 segundos
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 )

/**
 * Luego de 2s ejecutara
 * el complete del objecto
 * observer. El valor a emitir 
 * es 0, es el por defecto
 * 
 * timer(2000, 1000)
 * con esto se ejecutara en 2s y
 * luego periodicamente cada 1s
 */
// const timer$ = timer(2000)
// const timer$ = timer(2000, 1000)
const timer$ = timer(hoyEn5)

// (ASINCRONO), no cumple esta secuencia
console.log('Inicio');
timer$.subscribe( observer )
console.log('Final');