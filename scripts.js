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
                
                let valor = comprobarJugadas.comprobar()
                if(valor === 'X') {
                    turno = 'X';
                } else if(valor === 'O') {
                    turno = 'O';
                }

                switch (turno) {
                    case 1:
                        if (jugadas[i].innerHTML === 'X' || jugadas[i].innerHTML === 'O') {
                            console.log('Selecciona otro');
                        }
                        else {
                            mostrarTabla.cambiarCasilla(i, jugador1.tipoJugada);
                            turno = 2;
                        }
                    break;
                        
                    case 2:
                        if (jugadas[i].innerHTML === 'X' || jugadas[i].innerHTML === 'O') {
                            console.log('Selecciona otro');
                        }
                        else {
                            mostrarTabla.cambiarCasilla(i, jugador2.tipoJugada);
                            turno = 1;
                        }
                    break;

                    default:
                        if (turno === 'X') {
                            alert(`Ha ganado: ${jugador1.nombre}!!`)
                            turno = 1;
                            reiniciarTabla.reiniciar();
                        } else {
                            alert(`Ha ganado: ${jugador2.nombre}!!`)
                            turno = 1;
                            reiniciarTabla.reiniciar();
                        }
                    break;
                }

            })

        }

    }

    return { jugando };

})();

//Comprueba las jugadas del tablero
let comprobarJugadas = (function() {

    function comprobar() {

        const jugadas = tablaJuego.pLista;
        const casilla1 = jugadas[0].innerHTML;
        const casilla2 = jugadas[1].innerHTML;
        const casilla3 = jugadas[2].innerHTML;
        const casilla4 = jugadas[3].innerHTML;
        const casilla5 = jugadas[4].innerHTML;
        const casilla6 = jugadas[5].innerHTML;
        const casilla7 = jugadas[6].innerHTML;
        const casilla8 = jugadas[7].innerHTML;
        const casilla9 = jugadas[8].innerHTML;

        if(casilla1 === 'X' && casilla2 === 'X' && casilla3 === 'X'){
            return 'X'
        }else if(casilla4 === 'X' && casilla5 === 'X' && casilla6 == 'X'){
            return 'X'
        }else if(casilla7 === 'X' && casilla8 === 'X' && casilla9 === 'X'){
            return 'X'
        }else if(casilla1 === 'X' && casilla4 === 'X' && casilla7 === 'X'){
            return 'X'
        }else if(casilla2 === 'X' && casilla5 === 'X' && casilla8 === 'X'){
            return 'X'
        }else if(casilla3 === 'X' && casilla6 === 'X' && casilla9 === 'X'){
            return 'X'
        }else if(casilla1 === 'O' && casilla2 === 'O' && casilla3 === 'O'){
            return 'O'
        }else if(casilla4 === 'O' && casilla5 === 'O' && casilla6 === 'O'){
            return 'O'
        }else if(casilla7 === 'O' && casilla8 === 'O' && casilla9 === 'O'){
            return 'O'
        }else if(casilla1 === 'O' && casilla4 === 'O' && casilla7 === 'O'){
            return 'O'
        }else if(casilla2 === 'O' && casilla5 === 'O' && casilla8 === 'O'){
            return 'O'
        }else if(casilla3 === 'O' && casilla6 === 'O' && casilla9 === 'O'){
            return 'O'
        }else if(casilla3 === 'O' && casilla5 === 'O' && casilla7 === 'O'){
            return 'O'
        }else if(casilla3 === 'X' && casilla5 === 'X' && casilla7 === 'X'){
            return 'X'
        }else if(casilla1 === 'O' && casilla5 === 'O' && casilla9 === 'O'){
            return 'O'
        }else if(casilla1 === 'X' && casilla5 === 'X' && casilla9 === 'X'){
            return 'X'
        }
    }
    return { comprobar };
})();

let juegoAI = (function() {
    const jugadas = tablaJuego.pLista;
    let turno = 1;

    const jugando = (jugador1, cpu) => {

        for (let i = 0; i < jugadas.length; i++) {

            jugadas[i].addEventListener('click', () => {
                
                let valor = comprobarJugadas.comprobar()
                if(valor === 'X') {
                    turno = 'X';
                } else if(valor === 'O') {
                    turno = 'O';
                }

                switch (turno) {
                    case 1:
                        if (jugadas[i].innerHTML === 'X' || jugadas[i].innerHTML === 'O') {
                            console.log('Selecciona otro');
                        }
                        else {
                            mostrarTabla.cambiarCasilla(i, jugador1.tipoJugada);
                            turno = 2;
                        }
                    break;
                        
                    case 2:
                        if (jugadas[i].innerHTML === 'X' || jugadas[i].innerHTML === 'O') {
                            console.log('Selecciona otro');
                        }
                        else {
                            let random = Math.floor((Math.random() * 8) + 1)
                            mostrarTabla.cambiarCasilla(random, cpu.tipoJugada);
                            turno = 1;
                        }
                    break;

                    default:
                        if (turno === 'X') {
                            alert(`Ha ganado: ${jugador1.nombre}!!`)
                            turno = 1;
                            reiniciarTabla.reiniciar();
                        } else {
                            alert(`Ha ganado: ${cpu.nombre}!!`)
                            turno = 1;
                            reiniciarTabla.reiniciar();
                        }
                    break;
                }

            })

        }

    }

    return { jugando };

})();

//Reinicia el tablero
let reiniciarTabla = (function() {
    const jugadas = tablaJuego.pLista;
    
    function reiniciar(){
        jugadas.forEach(p => {
            p.innerHTML = '';
        });
    }
    
    return { reiniciar };
})();

const btnIngreso = document.querySelector('.btn-ingreso');
const btnJugar = document.querySelector('.btn-jugar');
const btn_ai = document.querySelector('.btn-ai')
const btnReiniciar = document.querySelector('.btn-reiniciar')
const divIngreso = document.querySelector('.overlay');


const abrirIngreso = () => {
    divIngreso.style.display = 'flex';
}

const cerrarIngreso = () => {
    divIngreso.style.display = 'none';
}

btnIngreso.addEventListener('click', () => {
    abrirIngreso();
    btnIngreso.style.display = 'none';
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

btn_ai.addEventListener('click', () => {
    const jugador1 = jugador('Jugador1', 1, 'X')
    const cpu = jugador('CPU', 2, 'O')

    juegoAI.jugando(jugador1, cpu);
})

btnReiniciar.addEventListener('click', () => {
    reiniciarTabla.reiniciar();
})