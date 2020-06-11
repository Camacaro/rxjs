import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(1, 10)
.pipe(
    /**
     * Esto es para poder dejar pasar o no
     * en este caso solo dejara pasar a los impares
     */
    filter( val => val % 2 === 1)
)
//.subscribe( console.log )

range(20, 30)
.pipe(
    /**
     * Retorna un boolean y recibe es un numero
     */
    filter( (val, index) => {
        console.log('index', index);
        return val % 2 === 1
    } )
)
// .subscribe( console.log )

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
]

from(personajes)
.pipe(
    /**
     * Retorna un boolean y recibe un array
     */
    filter( (personaje, index) => {
        console.log('index', index);
        return personaje.tipo === 'heroe'
    } )


)// .subscribe( console.log )

const keyup$ = fromEvent <KeyboardEvent> ( document, 'keyup' ).pipe(
    
    // Recibe keyboardEvent,
    // salida string
    map( event => event.code ),

    filter( key => key === 'Enter'  ),

    
)

keyup$.subscribe(console.log)
