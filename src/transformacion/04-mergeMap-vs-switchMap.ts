import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from 'rxjs/operators';


const click$ = fromEvent( document, 'click' )
const interval$ = interval(1000)

click$.pipe(
    /**
     * Por cada click que doy se genera un interval
     */
    // mergeMap( () => interval$ )

    /**
     * Solo mantine una subscripcion activa
     * mergeMap: las mantiene todas
     */
    switchMap( () => interval$ )

).subscribe( console.log )