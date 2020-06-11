import { from } from 'rxjs';
import { reduce, map, filter } from 'rxjs/operators';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{


  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

    const totalReducer = ( acumulador: number, valorActual: any  ) => {
        return acumulador + valorActual;
    }

    const validNumber = (dato: any): number => {
        if( !isNaN(dato)  ) {
            return dato;
        } else {
            return 0
        }
    }

  from(datos).pipe(

    // YO
    //map( validNumber ),

    // Fernando
    filter <any> ( val => !isNaN(val) ),

    reduce( totalReducer )

  ).subscribe( console.log ) // La salida debe de ser 32



})();

		