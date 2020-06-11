
import { Observable, Observer } from 'rxjs';

const observer: Observer <any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.log('Completado [obs]')
}

/** 
 * Crear un Observable
 * 
 * para identificar que es un observable se le añade $
 */

// const obs$ = Observable.create()
// subs: subscriber
const obs$: Observable<string> = new Observable <string> ( subs => {

    subs.next('Hola 1')
    subs.next('Mundo 1')

    subs.next('Hola 2')
    subs.next('Mundo 2')

    /**
     * Forzar un error
     */
    // const a = undefined
    // a.nombre = 'Jesus'


    /** 
     * Hasta Aqui se completaria la emision de datos
    */
    subs.complete()

    subs.next('Hola 3')
    subs.next('Mundo 3')
} );

/**
 * Como llamar el subscriber
 */

// console.log(valor uqe devuelve la subscripcion);
// obs$.subscribe( console.log )

// obs$.subscribe( resp => {
//     console.log(resp);
// } )

// obs$.subscribe( 
//     resp => console.log('next: ', resp),
//     error => console.warn('error :', error),
//     () => console.log('Completado')
// )

obs$.subscribe( observer )

