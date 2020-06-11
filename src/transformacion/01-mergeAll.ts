import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll } from 'rxjs/operators';
import { ajax } from "rxjs/ajax"
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';


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


/**
 * Cadena de observables y operadores
 */
// input$.pipe(

//     debounceTime(500),

//     map( event => {
//         const texto = event.target['value']

//         return ajax.getJSON(
//             `https://api.github.com/users/${texto}`
//         )
//     })
// ).subscribe( resp => {
//     resp.pipe(
//         pluck('url')
//     ).subscribe( console.log )
// })

input$.pipe(

    debounceTime <KeyboardEvent> (500),

    pluck <KeyboardEvent, string> ('target', 'value'),

    // GithubUsersResp -> obtuve la respuesta de la api y la converti en una interfaces https://app.quicktype.io/
    map <string, Observable <GithubUsersResp> > ( texto =>  ajax.getJSON  (`https://api.github.com/search/users?q=${texto}`) ),

    /**
     * Con esto hacemos todas las subscripciones pendiente
     */
    mergeAll <GithubUsersResp> (),

    // GithubUser -> obtuve la respuesta de la api y la converti en una interfaces https://app.quicktype.io/
    pluck <GithubUsersResp, GithubUser[]> ('items')

).subscribe( mostrarUsuarios )