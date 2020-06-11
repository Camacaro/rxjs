 

/**
 * distinctUntilKeyChanged
 * 
 * Solo emite valores distintos al emitido anteriormente
 * solamente si el anterior es distinto, pero si es despues
 * lodeja pasar, pero esto es con los indice del objeto
 * 
 * {k:1} {k:2} {k:2} {k:1} {k:3}
 * distinctUntilKeyChanged()
 * {k:1} {k:2}       {k:1} {k:3}
 */

import { of, from } from "rxjs";
import {  distinctUntilKeyChanged } from "rxjs/operators";

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
    distinctUntilKeyChanged( 'nombre' )
)
.subscribe( console.log )