

import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


// Helper
const peticionHttpLogin = (userPass) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe( 
        pluck('response', 'token'),
        catchError( err => of('xxx') )
    )



// Creando un formulariois
const form = document.createElement('form')
const inputEmail = document.createElement('input')
const inputPass = document.createElement('input')
const submitBtn = document.createElement('button')


// Configuraciones - API https://reqres.in/
inputEmail.type = 'email'
inputEmail.placeholder = 'Email'
inputEmail.value = 'eve.holt@reqres.in'

inputPass.type = 'password'
inputPass.placeholder = 'Password'
inputPass.value = 'cityslicka'

submitBtn.innerHTML = 'Ingresar'

form.append( inputEmail, inputPass, submitBtn );
document.querySelector('body').append( form )


// Streams 
const submitForm$ = fromEvent <Event> ( form, 'submit' )
.pipe( 

    /**
     * No retorna nada
     */
    tap( eve => eve.preventDefault() ),

    /**
     * Regrega un nuevo valor
     */
    map( ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value,
    }) ),

    /**
     * Resuelve un observable
     * 
     * y puede resolver observables simultaneamente 
     * cada vez que se dispara este evento
     */
    // mergeMap( peticionHttpLogin ),

    /**
     * Se van cancelando los observables a midida
     * qeu se vaya disparando el evento, si no lo
     * disparan el switchMap terminara la peticion
     * emitiendo el valor esperado
     */
    // switchMap( peticionHttpLogin ),

    /**
     * Ejecuta el primer evento qeu le llega 
     * los siguientes eventos que llegan los va 
     * a ignorar hasta que lo resulva y luego
     * podra escuchar otro observanle
     */
    exhaustMap( peticionHttpLogin ),
)


submitForm$.subscribe( token => {
    console.log(token);
})