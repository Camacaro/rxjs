import { range } from "rxjs";
import { tap, map } from "rxjs/operators";


const numeros$ = range(1,5)

numeros$.pipe(

    /**
     * Tap no retorna valor, no altera el flujo de datos
     * Sirver para depurar
     */
    tap( x => {
        console.log('antes', x) 
    }),

    map( val => val * 10),

    tap( x => {
        console.log('despues', x) 
    }),

    /**
     * Depurar
     */
    tap({
        next: valor => console.log('next despues: ', valor),
        complete: () => console.log('Se termino todo')
    }),

).subscribe( val => console.log('subs', val ))