
import { from } from "rxjs"
import { reduce, scan, map } from 'rxjs/operators';

const numeros = [1,2,3,4,5]

const totalAcumulador = (acumulador: number, actual: number) => acumulador + actual


/**
 * Scan se parece al reduce
 * la diferencia esta qeu el reduce no emite el acumulado
 * en cambio el scan va retornando el cumulado 
 */

// REDUCE
from(numeros)
.pipe(
    reduce( totalAcumulador, 0 )
)
.subscribe( console.log )

// SCAN
from(numeros)
.pipe(
    scan( totalAcumulador, 0 )
)
.subscribe( console.log )



// Redux
interface Usuario {
    id?: String;
    autenticado?: boolean;
    token?: string;
    edad?: number
}

const user: Usuario[] = [
    {id: 'Fher', autenticado: false, token: null},
    {id: 'Fher', autenticado: true, token: 'ABC'},
    {id: 'Fher', autenticado: true, token: 'ABC123'},
]

const state$ = from( user ).pipe(

    scan <Usuario> ( (acumulador, actual) => {

        return { ...acumulador, ...actual }

    }, { edad: 33 } )
)


const id$ = state$.pipe(
    map( state => state.id )
)

id$.subscribe( console.log )