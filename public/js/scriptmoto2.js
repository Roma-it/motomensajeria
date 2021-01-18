document.addEventListener("DOMContentLoaded", crearFunction);

const motosDisponibles = {
    "8:00": 8,
    "8:30": 8,
    "9:00": 8,
    "9:30": 8,
    "10:00": 8,
    "10:30": 8,
    "11:00": 8,
    "11:30": 8,
    "12:00": 8,
    "12:30": 8,
    "13:00": 8,
    "13:30": 8,
    "14:00": 8,
    "14:30": 8,
    "15:00": 8,
    "15:30": 8,
    "16:00": 8,
    "16:30": 8,
    "17:00": 8,
    "17:30": 8,
    "18:00": 8,
    "18:30": 8,
    "19:00": 8,
    "19:30": 8
}

document.querySelector(".enviar").addEventListener("click", function () {

    const nombreUsuario = document.querySelector(".nombre").value;
    document.querySelector(".nombre").style.display = "none";
    this.style.display = "none";
    document.getElementById("nombre").innerHTML = `Hola <strong>${nombreUsuario}</strong>! 
    Gracias por confiar en RAPID!`;
    document.querySelector(".titulo-motos-reservadas").innerHTML = `Motos reservadas por 
    <strong>${nombreUsuario}</strong>`
});

const date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getUTCFullYear();
const fechaActual = `${year}-0${month}-${day}`;
const fechaLimite = `${year}-0${month+1}-${day}`

document.getElementById("calendario").value=fechaActual;
document.getElementById("calendario").min=fechaActual;
document.getElementById("calendario").max=fechaLimite;

function crearFunction(){
    const fecha = document.getElementById("calendario");
    const hora = document.getElementById("horario");
    fecha.addEventListener("input",function(){ingresaFechaYHora(fecha.value,hora.value)});
    hora.addEventListener("input", function (){ingresaFechaYHora(fecha.value,hora.value)});
    document.getElementById("confirmar").addEventListener("click", function() 
    {confirmar(fecha.value,hora.value)});
    document.getElementById("cancelar").addEventListener("click", cancelar);
}

function ingresaFechaYHora(fecha, hora){
    const texto = document.querySelector(".texto-resultado");
    let fecha1 = fecha.split("-").reverse().join("/");
    texto.innerHTML = `Ud. ha seleccionado una moto 
    para el dia ${fecha1} a las ${hora}`;
    document.getElementById("confirmar").style.display = "block";
}

let motosReservadas = "";
let horaMotoReservada = "";
let poseeMotos = 0;

function confirmar (fecha, hora){
    let fecha1 = fecha.split("-").reverse().join("/");
    const texto = document.querySelector(".texto-resultado");
    let disponibilidadActual = document.getElementById("8:00d");
    if (poseeMotos == 0){
        texto.innerHTML = `Se ha confirmado el servicio de una moto 
        para el dia ${fecha1} a las ${hora}. Muchas gracias por confiar en RAPID.`;
        document.getElementById("confirmar").style.display = "none";
        motosDisponibles [hora] -=1;
        const nuevaDisponibilidad = motosDisponibles [hora]
        disponibilidadActual.innerHTML = nuevaDisponibilidad;
        motosReservadas = `Una moto para el dia ${fecha1} a las ${hora}`;
        document.querySelector(".motos-reservadas").innerHTML = motosReservadas;
        poseeMotos = 1;
        horaMotoReservada = hora;
    } else {
        texto.innerHTML = `Ya tiene una moto reservada para el dia
     ${fecha1} a las ${hora}. Podra contratar otra cuando ese viaje haya concluido`;
    }
}

function cancelar(){
    motosDisponibles [horaMotoReservada] += 1;
    let nuevasMotosDisponibles = motosDisponibles [horaMotoReservada];
    let disponibilidadActual = document.getElementById("8:00d");
    disponibilidadActual.innerHTML = nuevasMotosDisponibles;
    console.log(motosDisponibles [horaMotoReservada])
    horaMotoReservada = "";
    poseeMotos = 0;
    const texto = document.querySelector(".texto-resultado");
    texto.innerHTML = `Su reserva ha sido cancelada. Puede reservar para nuevo dia y horario.`;
    motosReservadas = `No se encuentran motos reservadas`;
    document.querySelector(".motos-reservadas").innerHTML = motosReservadas;
    document.getElementById("confirmar").style.display = "block";
}
