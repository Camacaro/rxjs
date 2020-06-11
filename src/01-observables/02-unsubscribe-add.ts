import { Observable, Observer } from 'rxjs';


const observer: Observer <any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('[error]: ', error),
    complete: () => console.log('[Completado]')
}

const intervalo$ = new Observable <number> ( subscriber => {

    let num = 0
    // Contador, 1, 2, 3, 4, 5.....
    const interval = setInterval( () => {
        num++
        subscriber.next( num )
        console.log(num);
    }, 1000)


    /**
     * Al ejecutar el complete, luego de eso
     * es qeu se ejecuta el return de mi Observable
     */
    setTimeout( () => {
        subscriber.complete()
    }, 2500) // 10000

    /**
     * el return se ejecuta al utilizar el subscribe() 
     * resolver la fuga de datos
     */
    return () => {
        clearInterval( interval );
        console.log('Intervalo destruido'); 
    }
})

// const subscription1 = intervalo$.subscribe( num => console.log('Num: ', num))
const subscription1 = intervalo$.subscribe( observer )
const subscription2 = intervalo$.subscribe( observer )
const subscription3 = intervalo$.subscribe( observer )

/**
 * Con add podemos encadenar las subscripciones 
 * para asi poder unsubscribe una vez
 */
subscription1
.add( subscription2 )
.add( subscription3 )
 
/**
 * La diferencia entre el complete() y el unsubscribe()
 * Es que desde la clase [new Observable <number>] detemos el proceso
 * y desde el unsubscribe detemos el proceso de la [subscription1]
 */
setTimeout( () => {
    // subscription1.unsubscribe()
    // subscription2.unsubscribe()
    // subscription3.unsubscribe()

    subscription1.unsubscribe()

    console.log('¿completado');
}, 6000)