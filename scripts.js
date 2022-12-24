let tablaJuego = (function() {
    const divLista = document.querySelectorAll('div');
    /* function agregarJugada(jugada) {
        tabla.push(jugada);
        return tabla;
    } */

    return { divLista };
})();

let mostrarTabla = (function() {
    const divLista = tablaJuego.divLista;

    function cambiarCasilla(casilla, jugada) {
        return divLista[casilla].innerHTML = jugada;
    }

    return { cambiarCasilla };
})();

mostrarTabla.cambiarCasilla(7, 'x');