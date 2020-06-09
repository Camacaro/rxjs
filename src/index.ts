import { Observable, Observer, Subject } from 'rxjs';


const observer: Observer <any> = {
    next: value => console.log('[next][observer]: ', value),
    error: error => console.warn('[error][observer]: ', error),
    complete: () => console.log('[Completado][observer]')
}

