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
    let jugador1 = form.elements[0].value;
    let jugador2 = form.elements[1].value;
    
    e.preventDefault();
    cerrarIngreso();
})

mostrarTabla.cambiarCasilla(8, 'x');