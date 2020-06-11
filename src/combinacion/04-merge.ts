import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

/**
 * 
 * merge(obs1$, obs2$)
 * 
 * Combina los observes emitiendo ambos valores
 * y se completa cuando ambos observables se han completado
 * 
 */


const keyup$ = fromEvent( document, 'keyup' )
const click$ = fromEvent( document, 'click' )

/**
 * Si se emiten valores al mismo tiempo
 * saldria primero keyup por ser el que esta
 * primero
 * 
 * Esto retorna un observable
 */
merge( 
    
    keyup$.pipe( pluck('type') ), 
    
    click$.pipe( pluck('type') )
    
).subscribe( console.log )