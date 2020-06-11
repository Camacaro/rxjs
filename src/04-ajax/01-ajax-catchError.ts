
import { ajax, AjaxError } from 'rxjs/ajax'
import { map, pluck, catchError } from 'rxjs/operators'
import { of } from 'rxjs'


const url = 'https://api.github.com/users?per_page=5'

const handleErrors = ( response: Response) => {
    
    if( !response.ok ) {
        throw new Error( response.statusText )
    }

    return response
}

/**
 * Esto es para manejar los catch Error de mi observable
 * @param err 
 */
const handleCatchError = (err: AjaxError) => {
    console.warn('Error en: ', err.message)
    return of( [] ) 
}

const fetchPromesas = fetch( url );

// fetchPromesas
//     .then( resp => resp.json())
//     .then( console.log )
//     .catch()

// fetchPromesas
//     .then( handleErrors )
//     .then( resp => resp.json())
//     .then( console.log )
//     .catch( err => console.warn('Error usuario', err))


ajax( url )
.pipe(
    pluck('response'),
    // map( resp => resp.response )
    catchError( handleCatchError )
)
.subscribe( usuarios => console.log('Usuarios', usuarios) )
