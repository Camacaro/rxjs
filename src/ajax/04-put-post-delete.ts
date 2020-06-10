import { ajax } from "rxjs/ajax";


const url = 'https://httpbin.org/delay/1'

/**
 * Parametros DELETE
 * URL
 * HEADERS
 */

/**
 * Parametros POST - PUT
 * URL
 * BODY
 * HEADERS
 */
// ajax.put( url, {
//     id: 1,
//     nombre: 'Jesus'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe( console.log )

/**
 * Dinamico la pericion
 * method: POST, GET, DELETE, PUT
 */
ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Fernando'
    }
}).subscribe( console.log )