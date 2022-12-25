let tablaJuego = (function() {
    const pLista = document.querySelectorAll('p');

    return { pLista };
})();

let mostrarTabla = (function() {
    const pLista = tablaJuego.pLista;

    function cambiarCasilla(casilla, jugada) {
        return pLista[casilla].innerHTML = jugada;
    }

    return { cambiarCasilla };
})();

const jugador = (nombre, numero, tipoJugada) => {
    return { nombre, numero, tipoJugada };
}

let juego = (function() {

    const jugadas = tablaJuego.pLista;

    const jugando = (jugador1, jugador2) => {

        for (let i = 0; i < jugadas.length; i++) {

            jugadas[i].addEventListener('click', () => {

                mostrarTabla.cambiarCasilla(i, jugador1.tipoJugada);

            })

        }

        /* jugadas.forEach(p => {

            p.addEventListener('click', () => {
                p.innerHTML = jugador1.tipoJugada;
                console.log(p)
        })

        }); */

    }

    return { jugando };

})();

const btnIngreso = document.querySelector('.btn-ingreso');
const btnJugar = document.querySelector('.btn-jugar');
const divIngreso = document.querySelector('.overlay');


const abrirIngreso = () => {
    divIngreso.style.display = 'flex';
}

const cerrarIngreso = () => {
    divIngreso.style.display = 'none';
}

btnIngreso.addEventListener('click', () => {
    abrirIngreso();
})

btnJugar.addEventListener('click', function(e) {
    const form = document.querySelector('.form-jugadores')
    let nomJugador1 = form.elements[0].value;
    let nomJugador2 = form.elements[1].value;

    e.preventDefault();
    cerrarIngreso();

    const jugador1 = jugador(nomJugador1, 1, 'X')
    const jugador2 = jugador(nomJugador2, 2, 'O')

    juego.jugando(jugador1, jugador2);
})