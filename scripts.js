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
    let jugadas = tablaJuego.pLista;

    const jugando = (jugador1, jugador2) => {
        if (condition) {
            
        }
    }

    return { jugando }
})();

mostrarTabla.cambiarCasilla(2, 'x');