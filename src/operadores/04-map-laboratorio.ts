import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";


const text = document.createElement('div')

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id urna vel lorem interdum volutpat a eget sapien. Maecenas lobortis vel purus non ultricies. Proin eget nunc tincidunt metus efficitur tincidunt sit amet in massa. Maecenas nulla neque, feugiat vitae egestas non, tempor a ipsum. Fusce quis turpis urna. Sed eget dolor aliquet, luctus lorem non, volutpat lorem. Morbi et tempus quam. Curabitur id dolor eu ex consectetur bibendum. Nam tincidunt ante vitae est posuere, ut viverra urna varius.
<br/><br/>

Cras convallis dignissim ornare. Proin pellentesque venenatis enim, vel accumsan mauris placerat et. Sed vel lacus at lorem lacinia lobortis. Phasellus malesuada ultricies efficitur. In vitae enim ante. Duis sodales, lorem nec fringilla lacinia, eros nunc lobortis nibh, a efficitur urna enim vel risus. Aliquam sit amet viverra dolor, et semper leo. Nunc hendrerit interdum tellus, eget tristique nulla consectetur id. Donec et est lorem. Proin vitae mi quis sapien suscipit commodo.
<br/><br/>

Fusce odio sem, vulputate at varius eu, viverra vitae massa. Proin in lectus molestie, dapibus orci quis, dapibus lectus. Maecenas est ex, volutpat nec interdum id, interdum sit amet ipsum. Praesent nibh urna, efficitur vitae risus vitae, auctor elementum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sodales ipsum a libero aliquam, ac feugiat erat convallis. Vivamus ut rhoncus ligula, id lobortis felis. Cras consequat erat tortor, ut molestie ex aliquet sit amet. Nam sit amet orci vitae risus sodales rutrum ac quis velit. Nullam gravida, lectus vitae gravida porttitor, velit felis dictum nunc, eu pellentesque mauris risus sed elit. Duis scelerisque diam eget eros ultrices, a eleifend odio pulvinar.
<br/><br/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer suscipit ligula dui, eget tincidunt nunc porta suscipit. Integer eu elit purus. Integer eget est est. Mauris sit amet rhoncus leo. Etiam vestibulum pharetra tellus, eget sagittis ante gravida at. Proin sit amet tempor tellus.
<br/><br/>

Integer pulvinar lacus non ante iaculis, eget fringilla velit feugiat. In hac habitasse platea dictumst. Ut eget placerat diam. Nam ligula orci, commodo nec sapien vitae, malesuada mattis lacus. Nam eget orci ultrices odio laoreet fringilla. Donec posuere ac dui mattis efficitur. Cras luctus cursus elit sed gravida. Nunc gravida mollis ex vel fringilla. In sagittis pellentesque sapien ac dictum. Duis hendrerit finibus augue, vitae pretium augue posuere rhoncus. Mauris hendrerit velit et placerat vestibulum. Mauris aliquet pulvinar elementum.
`

const body = document.querySelector('body');
body.append( text )

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar')
body.append( progressBar )


// Function que haga el calculo
const calcularPorcentajeScroll = ( event ) => {    

    const { 
        scrollTop, 
        scrollHeight,
        clientHeight
    } = event.target.documentElement

    // console.log(scrollTop, scrollHeight, clientHeight);

    return ( scrollTop / (scrollHeight - clientHeight) ) * 100
}

// Streams
const scroll$ = fromEvent( document, 'scroll' );
// scroll$.subscribe(console.log)


const progress$ = scroll$.pipe(

    // map( event => calcularPorcentajeScroll(event) )
    map( calcularPorcentajeScroll ),

    tap( console.log )

);

progress$.subscribe( porcentaje => {

    progressBar.style.width = `${ porcentaje }%`

} )