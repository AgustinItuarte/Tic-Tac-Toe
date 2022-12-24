let tablaJuego = (function() {
    const pLista = document.querySelectorAll('p');
    /* function agregarJugada(jugada) {
        tabla.push(jugada);
        return tabla;
    } */

    return { pLista };
})();

let mostrarTabla = (function() {
    const pLista = tablaJuego.pLista;

    function cambiarCasilla(casilla, jugada) {
        return pLista[casilla].innerHTML = jugada;
    }

    return { cambiarCasilla };
})();

mostrarTabla.cambiarCasilla(2, 'x');
mostrarTabla.cambiarCasilla(5, 'x');
mostrarTabla.cambiarCasilla(0, 'o');
mostrarTabla.cambiarCasilla(1, 'o');


