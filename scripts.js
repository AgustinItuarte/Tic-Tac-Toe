//Lista de la cuadrilla de juego
let tablaJuego = (function() {
    const pLista = document.querySelectorAll('p');

    return { pLista };
})();

//Modulo para mostrar jugadas en pantalla
let mostrarTabla = (function() {
    let contador = 1;
    const pLista = tablaJuego.pLista;

    function cambiarCasilla(casilla, jugada) {
        return pLista[casilla].innerHTML = jugada;
    }

    function cambiarRandom(casilla, jugada) {
        while (pLista[casilla].innerHTML === 'X' || pLista[casilla].innerHTML === 'O') {
            contador++
            casilla = Math.floor(Math.random() * 9)

            if (contador === 1000) {
                contador = 0;
                return pLista[casilla].innerHTML = jugada;
            }
        }
        
        return pLista[casilla].innerHTML = jugada;
    }

    return { cambiarCasilla, cambiarRandom };
})();

//Factory function para crear los jugadores
const jugador = (nombre, puntuacion, tipoJugada) => {
    return { nombre, puntuacion, tipoJugada };
}

//Modulo que controla el flujo del juego
let juego = (function() {
    const jugadas = tablaJuego.pLista;
    let turno = 1;

    const jugando = (jugador1, jugador2) => {

        mostrarJugadores.mostrar(jugador1, jugador2, 2);

        for (let i = 0; i < jugadas.length; i++) {

            jugadas[i].addEventListener('click', () => {

                mostrarJugadores.mostrar(jugador1, jugador2, turno);
                
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
                            jugador1.puntuacion += 1;
                            mostrarPuntaje.mostrar(jugador1, jugador2)
                            mostrarJugadores.mostrar(jugador1, jugador2, 3);
                        } else {
                            alert(`Ha ganado: ${jugador2.nombre}!!`)
                            turno = 1;
                            reiniciarTabla.reiniciar();
                            jugador2.puntuacion += 1;
                            mostrarPuntaje.mostrar(jugador1, jugador2)
                            mostrarJugadores.mostrar(jugador1, jugador2, 3);
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

//Modulo que controla flujo del juego contra la AI
let juegoAI = (function() {
    const jugadas = tablaJuego.pLista;
    let turno = 1;

    const jugando = (jugador1, cpu) => {

        mostrarJugadores.mostrar(jugador1, cpu, 2);

        for (let i = 0; i < jugadas.length; i++) {
            
            mostrarJugadores.mostrar(jugador1, cpu, 2);

            jugadas[i].addEventListener('click', () => {
                
                let valor = comprobarJugadas.comprobar()
                if(valor === 'X') {
                    turno = 'X';
                } else if(valor === 'O') {
                    turno = 'O';
                }

                mostrarJugadores.mostrar(jugador1, cpu, 2);
                
                switch (turno) {
                    case 1:
                        if (jugadas[i].innerHTML === 'X' || jugadas[i].innerHTML === 'O') {
                            console.log('Selecciona otro');
                        }
                        else {
                            mostrarTabla.cambiarCasilla(i, jugador1.tipoJugada);
                            mostrarTabla.cambiarRandom(i, cpu.tipoJugada);
                        }
                        break;

                    default:
                        if (turno === 'X') {

                            alert(`Ha ganado: ${jugador1.nombre}!!`)
                            turno = 1;
                            reiniciarTabla.reiniciar();
                            jugador1.puntuacion += 1;
                            mostrarPuntaje.mostrar(jugador1, cpu)
                            mostrarJugadores.mostrar(jugador1, cpu, 3);
                        } else {

                            alert(`Ha ganado: ${cpu.nombre}!!`)
                            turno = 1;
                            reiniciarTabla.reiniciar();
                            cpu.puntuacion += 1;
                            mostrarPuntaje.mostrar(jugador1, cpu)
                            mostrarJugadores.mostrar(jugador1, cpu, 3);
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

let mostrarJugadores = (function() {

    function mostrar(jugador1, jugador2, turno){

        const nom_jugador1 = document.querySelector('.jugador-1');
        const nom_jugador2 = document.querySelector('.jugador-2');

        nom_jugador1.innerHTML = jugador1.nombre;
        nom_jugador2.innerHTML = jugador2.nombre;

        if (turno === 1) {
            nom_jugador1.style = 'background-color:none'
            nom_jugador2.style = 'background-color:rgb(206, 59, 59)';
            
        } else if (turno === 2) {
            nom_jugador1.style = 'background-color:rgb(206, 59, 59)';
            nom_jugador2.style = 'background-color:none'
        } else {
            nom_jugador1.style = 'background-color:none'
            nom_jugador2.style = 'background-color:none'
        }

    }

    return { mostrar };
})();

let mostrarPuntaje = (function() {

    function mostrar(jugador1, jugador2){

        const partidas1 = document.querySelector('.partidas-1')
        const partidas2 = document.querySelector('.partidas-2')

        partidas1.innerHTML = `Partidas Ganadas:${jugador1.puntuacion}`;
        partidas2.innerHTML = `Partidas Ganadas:${jugador2.puntuacion}`;

    }

    return { mostrar };
})();

const btnIngreso = document.querySelector('.btn-ingreso');
const btnJugar = document.querySelector('.btn-jugar');
const btn_ai = document.querySelector('.btn-ai');
const btnReiniciar = document.querySelector('.btn-reiniciar');
const divIngreso = document.querySelector('.overlay');


const abrirIngreso = () => {
    divIngreso.style.display = 'flex';
}

const cerrarIngreso = () => {
    divIngreso.style.display = 'none';
}

const cerrarBtnIngreso = () => {
    btnIngreso.style.display = 'none';
}

const cerrarBtnAI = () => {
    btn_ai.style.display = 'none';
}

btnIngreso.addEventListener('click', () => {
    abrirIngreso();
    btnIngreso.style.display = 'none';
    btn_ai.style.display = 'none';
})

btnJugar.addEventListener('click', function(e) {
    const form = document.querySelector('.form-jugadores')
    let nomJugador1 = form.elements[0].value;
    let nomJugador2 = form.elements[1].value;

    e.preventDefault();
    cerrarIngreso();

    const jugador1 = jugador(nomJugador1, 0, 'X')
    const jugador2 = jugador(nomJugador2, 0, 'O')

    juego.jugando(jugador1, jugador2);
})

btn_ai.addEventListener('click', () => {
    cerrarBtnAI();
    cerrarBtnIngreso();
    const jugador1 = jugador('Jugador1', 0, 'X')
    const cpu = jugador('CPU', 0, 'O')

    juegoAI.jugando(jugador1, cpu);
})

btnReiniciar.addEventListener('click', () => {
    reiniciarTabla.reiniciar();
})