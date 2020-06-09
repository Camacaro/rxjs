import { asyncScheduler } from 'rxjs';

/**
 * Con el asyncScheduler es la combinacion de 
 * setTimeout( () => {}, 3000 ) y 
 * setInterval( () => {}, 3000 )
 */


// setTimeout( () => {}, 3000 )
// setInterval( () => {}, 3000 )

const saludar = () => console.log('Hola Mundo')
const saludar2 = nombre => console.log(`Hola ${nombre}`)

// Ejemplo setTimeout
// Despues de 2s se ejecutara saludar
// asyncScheduler.schedule( saludar, 2000 )
// asyncScheduler.schedule( saludar2, 2000, 'Jesus' )

// Ejemplo setInterval
// No puede ser una arrow Function
const subs = asyncScheduler.schedule( function(state) {

    console.log('state', state);

    /**
     * Se volvera a llamar cada segundo
     * sumandole 1 al state
     */
    this.schedule( state + 1, 1000 );

}, 3000, 0 )


// Esto puede ser igual al  asyncScheduler
// setTimeout( () => {
//     subs.unsubscribe()
// }, 6000)

// cuando se mande un objeto de funcion se debe usar asi
asyncScheduler.schedule( () => subs.unsubscribe() , 6000 )