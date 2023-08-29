const idHoras = document.querySelector("#horas");
const idMinutos = document.querySelector("#minutos");
const idSegundos = document.querySelector("#segundos");
const h1Temporizador = document.querySelector("#temporizador");
const boton = document.querySelector("#botonEmpezar");

function temporizador() {
    let horas = parseInt(idHoras.value);
    let minutos = parseInt(idMinutos.value);
    let segundos = parseInt(idSegundos.value);

    h1Temporizador.innerHTML = `${horas}:${minutos}:${segundos}`;

    setInterval(() => {
        
        if (horas > 0 && minutos === 0 && segundos === 0) {
            horas--
            minutos = 60
        }

        if (minutos > 0 && segundos === 0) {
            minutos--
            segundos = 60
        }

        if (segundos > 0) {
            segundos--
        }

        h1Temporizador.innerHTML = `${horas}:${minutos}:${segundos}`;
        if (horas===0 && minutos===0 && segundos===0) {
            boton.disabled=false;
           }
    }, 1000);

  boton.disabled=true;
}