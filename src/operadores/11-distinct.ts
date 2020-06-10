 

/**
 * Distinct
 * 
 * Solo emite valores distintos al emitido anteriormente
 * 
 * 1 1 2 3 3 4 1 5
 * distinct()
 * 1   2 3  4   5
 */

import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1)

numeros$
.pipe(
    /**
     * La comparacion que hace es con un TRIPLE IGUAL
     * Operador Equidad
     */
    distinct() // ===
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
        nombre: 'X'
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
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
]

from( personajes )
.pipe(
    /**
     * Especificar que propiedad quiero que sea distinto
     */
    distinct( personaje => personaje.nombre )
)
.subscribe( console.log )