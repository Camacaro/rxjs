/**
 * sampleTime(1000)
 * 
 * Emite informacion en un periodo de tiempo, referente 
 * al ultimo dato recibido
 */

import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

const click$ = fromEvent <MouseEvent> ( document, 'click')

click$
.pipe(
    sampleTime(2000),
    map( ({x, y}) => ({x, y}) ),
)
.subscribe( console.log )