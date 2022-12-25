//Lista de la cuadrilla de juego
let tablaJuego = (function() {
    const pLista = document.querySelectorAll('p');

    return { pLista };
})();

//Modulo para mostrar jugadas en pantalla
let mostrarTabla = (function() {
    const pLista = tablaJuego.pLista;

    function cambiarCasilla(casilla, jugada) {
        return pLista[casilla].innerHTML = jugada;
    }

    return { cambiarCasilla };
})();

//Factory function para crear los jugadores
const jugador = (nombre, numero, tipoJugada) => {
    return { nombre, numero, tipoJugada };
}

//Modulo que controla el flujo del juego
let juego = (function() {
    const jugadas = tablaJuego.pLista;
    let turno = 1;

    const jugando = (jugador1, jugador2) => {

        for (let i = 0; i < jugadas.length; i++) {

            jugadas[i].addEventListener('click', () => {

                switch (turno) {
                    case 1:
                        if (jugadas[i].innerHTML === 'X' || jugadas[i].innerHTML === 'O') {
                            console.log('Selecciona otro');
                        }else {
                            mostrarTabla.cambiarCasilla(i, jugador1.tipoJugada);
                            turno = 2;
                        }
                    break;
                        
                    case 2:
                        if (jugadas[i].innerHTML === 'X' || jugadas[i].innerHTML === 'O') {
                            console.log('Selecciona otro');
                        }else {
                            mostrarTabla.cambiarCasilla(i, jugador2.tipoJugada);
                            turno = 1;
                        }
                    break;

                    default:
                        console.log('Fin')
                    break;
                }

            })

        }

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