import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";





 /**
  * REDUCE EN JS 
  * 
  * lo que hace es reducir mi arreglo teniendo en cuenta
  * un valor actual posicion del arrglo donde vaya y un
  * acumulador valor que se ira retornando y podemos tenerlo
  */
const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador: number, valorActual: number ) => {

    return acumulador + valorActual;
}

/**
 * Parametros
 * Funcion a ejecuar
 * valor inicial
 */
const total = numbers.reduce( totalReducer, 0 )
console.log('Total Arr', total);

/******************************************************************************* 
 * REDUCE EN RXJS
 * 
 * 
*/

interval(1000)
.pipe(
    /**
     * Esto sirve para tomar valores
     * del array como cuantas posiciones 
     * voy a tomar
     */
    take(4),

    tap( console.log ),

    /**
     * Con el Reduce no se tiene ninguna 
     * emision hasta que no se complete
     * el observable, o sea el complete
     * 
     * con el pipe take anterior generamos
     * ese complete tomando 4 valores
     * ahi aplicamos el reduce
     * 
     * parametro inicial funcion
     * parametro secundario valor inicial
     */
    reduce( totalReducer )
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete')
})