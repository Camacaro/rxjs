import { of, from, Observer } from 'rxjs';

/**
 * Ambos son observables
 * of = toma argumentos y tgenera una secuencia
 * from = array, object. promesa, iterable, observable
 */

const observer: Observer <any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.log('Completado [obs]')
}

/**
 * Esto es una funcion Generadora
 * con el * lo indica 
 * 
 * Un generador es una function que puede
 * pausarse y reanudarse en cualquier momento
 */
const miGenerador = function*() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

const miIterable = miGenerador()

// for ( let id of miIterable ) {
//     console.log(id)
// }
from( miIterable ).subscribe( observer )

// const source$ = from([1,2,3,4,5])
// const source$ = of(...[1,2,3,4,5])

// Lo convierte a un array por cada letra
// const source$ = from('Jesus')


const source$ = from( fetch('https://api.github.com/users/Camacaro') )
// source$.subscribe( observer )
// source$.subscribe( async (resp) => {
    
//     console.log(resp.url);

//     const data = await resp.json()
//     console.log(data);
// } )
