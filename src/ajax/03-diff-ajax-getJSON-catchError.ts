import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const url = 'https://httpbinXX.org/delay/1'

const handleError = ( resp: AjaxError ) => {
    console.warn('Error:', resp.message);
    return of({
        ok: false,
        usuarios: []
    })
}

/**
 * Parametros
 * URL
 * Headers
 */
// const obs$ = ajax.getJSON( url).pipe(
//     catchError( handleError )
// )

// const obs2$ = ajax( url).pipe(
//     catchError( handleError )
// )

// obs$.subscribe( data => console.log('getJSON:', data))
// obs2$.subscribe( data => console.log('ajax:', data))

const obs2$ = ajax( url)

const obs$ = ajax.getJSON( url).pipe(
    catchError( handleError )
)

obs$.subscribe({
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.log('Completado [obs]')
})


// obs2$.subscribe( data => console.log('ajax:', data))