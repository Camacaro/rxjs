import { ajax } from "rxjs/ajax";


const url = 'https://httpbin.org/delay/1'

/**
 * Parametros
 * URL
 * Headers
 */
const obs$ = ajax.getJSON( url, {
    'Content-Type': 'appplication/json',
    'mi-token': 'ABC123'
} )


obs$.subscribe( data => console.log('Data:', data))