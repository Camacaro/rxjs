 

/**
 * distinctUntilChanged
 * 
 * Solo emite valores distintos al emitido anteriormente
 * solamente si el anterior es distinto, pero si es despues
 * lodeja pasar
 * 
 * 1 2 2 1 3 2
 * distinctUntilChanged()
 * 1 2  1 3 2
 */

import { of, from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const numeros$ = of <number|string> (1,'1',1,3,3,2,2,4,4,5,3,1,'1')

numeros$
.pipe(
    /**
     * La comparacion que hace es con un TRIPLE IGUAL
     * Operador Equidad
     */
    distinctUntilChanged () // ===
)
.subscribe( console.log )

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Wily'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
]

from( personajes )
.pipe(
    /**
     * Especificar que propiedad quiero que sea distinto
     * 
     * si los objetos son iguales por concecuencia NO los 
     * dejara pasar
     */
    distinctUntilChanged( (anterior, actual) => anterior.nombre === actual.nombre )
)
.subscribe( console.log )