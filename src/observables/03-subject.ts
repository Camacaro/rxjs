import { Observable, Observer, Subject } from 'rxjs';


const observer: Observer <any> = {
    next: value => console.log('[next][observer]: ', value),
    error: error => console.warn('[error][observer]: ', error),
    complete: () => console.log('[Completado][observer]')
}


const intervalo$ = new Observable<number>( subs => {

    // Cold Observable
    const intervalID = setInterval( () => subs.next( Math.random() ), 1000 )

    return () => {
        clearInterval ( intervalID )
        console.log('Intervalo destruido')
    }
} )

/**
 * 1- Casteo múltiple: es un sujeto que emitira el mismo valor a todos
 * 2- Támbien es un observer
 * 3- Next, error y complete
 */
const subject$ = new Subject()

const subscription = intervalo$.subscribe( subject$ )

// const subs1 = intervalo$.subscribe( rnd => console.log('subs1 ', rnd) )
// const subs2 = intervalo$.subscribe( rnd => console.log('subs2 ', rnd) )

const subs1 = subject$.subscribe( observer )
const subs2 = subject$.subscribe( observer )

/**
 * Cuando la data es producida por el observable en sí mismo, 
 * es considerado un "Cold Observable". Pero cuando la data es
 * producida FUERA del observable es llamada "Hot Observable",
 * en este caso la que produce el subject.next
 */
setTimeout( () => {
    // Hot Observable
    subject$.next(10)

    subject$.complete()

    subscription.unsubscribe()

}, 3500 )