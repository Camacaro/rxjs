import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, mergeMap, switchMap } from 'rxjs/operators';
import { ajax } from "rxjs/ajax"
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';

/**
 * 
 * switchMap ( () => interval() )
 * 
 * Funciona como callback de observables 
 * cuando llega un valor este emite un nuevo observable
 * y se subscribe, empezando a emitir valores y si se llega
 * a entrar otro valor este emite un nuevo observable pero
 * cancela el anterior y solo se emite valores del nuevo observable
 * 
 */

// Referencias
const body = document.querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')

body.append( textInput, orderList )

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {

    console.log(usuarios);
    orderList.innerHTML = ''

    for ( const usuario of usuarios ) {

        const li = document.createElement('li')
        const img = document.createElement('img')
        img.src = usuario.avatar_url

        const anchor = document.createElement('a')
        anchor.href = usuario.html_url
        anchor.text = 'Ver pagina'
        anchor.target = '_blank'

        li.append( img )
        li.append( usuario.login + ' ' )
        li.append( anchor )

        orderList.append(li)
    }
}

// Streams
/**
 * Lo esencial de los tipos es de aquie
 * importa es el inicio y el final
 * 
 * En este caso: 
 * Inicio -> fromEvent <KeyboardEvent> 
 * Final ->  pluck <GithubUsersResp, GithubUser[]> ('items')
 */
const input$ = fromEvent <KeyboardEvent> ( textInput, 'keyup' )


input$.pipe(

    debounceTime <KeyboardEvent> (500),

    pluck <KeyboardEvent, string> ('target', 'value'),

    // GithubUsersResp -> obtuve la respuesta de la api y la converti en una interfaces 
    // https://app.quicktype.io/
    mergeMap <string, Observable <GithubUsersResp> > ( 
        texto =>  ajax.getJSON  (`https://api.github.com/search/users?q=${texto}`) 
    ),


    // GithubUser -> obtuve la respuesta de la api y la converti en una interfaces https://app.quicktype.io/
    pluck <GithubUsersResp, GithubUser[]> ('items')

)// .subscribe( mostrarUsuarios )


// Ejemplo 2
const url = 'https://httpbin.org/delay/1?arg=' // + camacaro

input$.pipe(

    pluck('target', 'value'),

    /**
     * Este no es muy optimo, por cada letra qeu entra
     * se esta emitiendo una peticion ajax
     */
    // mergeMap( texto => ajax.getJSON(url + texto) )

    /**
     * Con esto ahora por cada letra qeu se emita
     * cancela la peticion anterior y genera una nueva 
     * hasta dejar de activar el evento y se efectura la peticion
     */
    switchMap( texto => ajax.getJSON(url + texto) )



).subscribe( console.log )
