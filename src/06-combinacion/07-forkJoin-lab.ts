import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const GITHUB_API = 'https://api.github.com/users'
const GITHUB_USER = 'Camacaro'

/**
 * Controlar el error independiente
 * asi no llega hasta el genetal
 */
forkJoin(
    {
        usuario: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}`),
        repos: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}/repos123`).pipe(
            catchError( err => of([]) )
        ),
        gists: ajax.getJSON(`${GITHUB_API}/${GITHUB_USER}/gists`),

    }
)
.pipe(
    catchError( err => of(err.message) )
)
.subscribe( console.log )