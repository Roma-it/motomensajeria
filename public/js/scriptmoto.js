//alert("Estoy vinculado")
document.addEventListener("DOMContentLoaded", crearFunction);

function crearFunction(){
    const horario8 = document.getElementById("hora8:00");
    horario8.addEventListener("click", function () {organizar("8:00")},false);
    const horario8_2 = document.getElementById("hora8:30");
    horario8_2.addEventListener("click", function () {organizar("8:30")},false);
    const horario9 = document.getElementById("hora9:00");
    horario9.addEventListener("click", function () {organizar("9:00")},false);
    const horario9_2 = document.getElementById("hora9:30");
    horario9_2.addEventListener("click", function () {organizar("9:30")},false);
    const horario10 = document.getElementById("hora10:00");
    horario10.addEventListener("click", function () {organizar("10:00")},false);
    const horario10_2 = document.getElementById("hora10:30");
    horario10_2.addEventListener("click", function () {organizar("10:30")},false);
    const horario11 = document.getElementById("hora11:00");
    horario11.addEventListener("click", function () {organizar("11:00")},false);
    const horario11_2 = document.getElementById("hora11:30");
    horario11_2.addEventListener("click", function () {organizar("11:30")},false);
    const horario12 = document.getElementById("hora12:00");
    horario12.addEventListener("click", function () {organizar("12:00")},false);
    const horario12_2 = document.getElementById("hora12:30");
    horario12_2.addEventListener("click", function () {organizar("12:30")},false);
    const horario13 = document.getElementById("hora13:00");
    horario13.addEventListener("click", function () {organizar("13:00")},false);
    const horario13_2 = document.getElementById("hora13:30");
    horario13_2.addEventListener("click", function () {organizar("13:30")},false);
    const horario14 = document.getElementById("hora14:00");
    horario14.addEventListener("click", function () {organizar("14:00")},false);
    const horario14_2 = document.getElementById("hora14:30");
    horario14_2.addEventListener("click", function () {organizar("14:30")},false);
    const horario15 = document.getElementById("hora15:00");
    horario15.addEventListener("click", function () {organizar("15:00")},false);
    const horario15_2 = document.getElementById("hora15:30");
    horario15_2.addEventListener("click", function () {organizar("15:30")},false);
    const horario16 = document.getElementById("hora16:00");
    horario16.addEventListener("click", function () {organizar("16:00")},false);
    const horario16_2 = document.getElementById("hora16:30");
    horario16_2.addEventListener("click", function () {organizar("16:30")},false);
    const horario17 = document.getElementById("hora17:00");
    horario17.addEventListener("click", function () {organizar("17:00")},false);
    const horario17_2 = document.getElementById("hora17:30");
    horario17_2.addEventListener("click", function () {organizar("17:30")},false);
    const horario18 = document.getElementById("hora18:00");
    horario18.addEventListener("click", function () {organizar("18:00")},false);
    const horario18_2 = document.getElementById("hora18:30");
    horario18_2.addEventListener("click", function () {organizar("18:30")},false);
    const horario19 = document.getElementById("hora19:00");
    horario19.addEventListener("click", function () {organizar("19:00")},false);
    const horario19_2 = document.getElementById("hora19:30");
    horario19_2.addEventListener("click", function () {organizar("19:30")},false);
    const cancel8 = document.getElementById("cancel8:00");
    cancel8.addEventListener("click", function () {cancelar("8:00")},false);
    const cancel8_2 = document.getElementById("cancel8:30");
    cancel8_2.addEventListener("click", function () {cancelar("8:30")},false);
    const cancel9 = document.getElementById("cancel9:00");
    cancel9.addEventListener("click", function () {cancelar("9:00")},false);
    const cancel9_2 = document.getElementById("cancel9:30");
    cancel9_2.addEventListener("click", function () {cancelar("9:30")},false);
    const cancel10 = document.getElementById("cancel10:00");
    cancel10.addEventListener("click", function () {cancelar("10:00")},false);
    const cancel10_2 = document.getElementById("cancel10:30");
    cancel10_2.addEventListener("click", function () {cancelar("10:30")},false);
    const cancel11 = document.getElementById("cancel11:00");
    cancel11.addEventListener("click", function () {cancelar("11:00")},false);
    const cancel11_2 = document.getElementById("cancel11:30");
    cancel11_2.addEventListener("click", function () {cancelar("11:30")},false);
    const cancel12 = document.getElementById("cancel12:00");
    cancel12.addEventListener("click", function () {cancelar("12:00")},false);
    const cancel12_2 = document.getElementById("cancel12:30");
    cancel12_2.addEventListener("click", function () {cancelar("12:30")},false);
    const cancel13 = document.getElementById("cancel13:00");
    cancel13.addEventListener("click", function () {cancelar("13:00")},false);
    const cancel13_2 = document.getElementById("cancel13:30");
    cancel13_2.addEventListener("click", function () {cancelar("13:30")},false);
    const cancel14 = document.getElementById("cancel14:00");
    cancel14.addEventListener("click", function () {cancelar("14:00")},false);
    const cancel14_2 = document.getElementById("cancel14:30");
    cancel14_2.addEventListener("click", function () {cancelar("14:30")},false);
    const cancel15 = document.getElementById("cancel15:00");
    cancel15.addEventListener("click", function () {cancelar("15:00")},false);
    const cancel15_2 = document.getElementById("cancel15:30");
    cancel15_2.addEventListener("click", function () {cancelar("15:30")},false);
    const cancel16 = document.getElementById("cancel16:00");
    cancel16.addEventListener("click", function () {cancelar("16:00")},false);
    const cancel16_2 = document.getElementById("cancel16:30");
    cancel16_2.addEventListener("click", function () {cancelar("16:30")},false);
    const cancel17 = document.getElementById("cancel17:00");
    cancel17.addEventListener("click", function () {cancelar("17:00")},false);
    const cancel17_2 = document.getElementById("cancel17:30");
    cancel17_2.addEventListener("click", function () {cancelar("17:30")},false);
    const cancel18 = document.getElementById("cancel18:00");
    cancel18.addEventListener("click", function () {cancelar("18:00")},false);
    const cancel18_2 = document.getElementById("cancel18:30");
    cancel18_2.addEventListener("click", function () {cancelar("18:30")},false);
    const cancel19 = document.getElementById("cancel19:00");
    cancel19.addEventListener("click", function () {cancelar("19:00")},false);
    const cancel19_2 = document.getElementById("cancel19:30");
    cancel19_2.addEventListener("click", function () {cancelar("19:30")},false);
}

function organizar(num){
    let disponibilidadActual = parseInt(document.getElementById(num+"d").textContent);
    let disponibilidad = document.getElementById(num+"d");
    let hora = document.getElementById("hora"+num);
    let ventana = document.getElementById("ventana");
    if (disponibilidadActual > 1){
        disponibilidadActual = disponibilidadActual  - 1;
        ventana.innerHTML=`Has contratado una moto para las ${num}`;
        ventana.style.display = "flex";
        ventana.style.border = "solid 2px white"
        console.log(disponibilidadActual)
    } else if (disponibilidadActual == 1){
        disponibilidadActual = disponibilidadActual  - 1;
        ventana.innerHTML=`Has contratado la ultima moto para las ${num}`;
        ventana.style.border = "solid 2px red"
        disponibilidad.style.backgroundColor = "#ff0000";
        hora.style.backgroundColor = "#ff0000";
    }   else{
        ventana.innerHTML=`No hay mas motos para las ${num}`;
        ventana.style.border = "solid 2px red"
    }
    disponibilidad.innerHTML = disponibilidadActual;
}
function cancelar(num){
    let disponibilidadActual = parseInt(document.getElementById(num+"d").textContent);
    let disponibilidad = document.getElementById(num+"d");
    let hora = document.getElementById("hora"+num);
    let ventana = document.getElementById("ventana");
    if (disponibilidadActual < 8 && disponibilidadActual > 0){
        disponibilidadActual = disponibilidadActual  + 1;
        ventana.innerHTML=`Has cancelado una moto para las ${num}`;
        ventana.style.display = "flex";
        ventana.style.border = "solid 2px white"
        console.log(disponibilidadActual)
    } else if (disponibilidadActual == 0){
        disponibilidadActual = disponibilidadActual  + 1;
        ventana.innerHTML=`Queda solo una moto para las ${num}`;
        ventana.style.border = "solid 2px white"
        disponibilidad.style.backgroundColor = "teal";
        hora.style.backgroundColor = "green";
    } else{
        ventana.innerHTML=`No hay motos para cancelar a las ${num}`;
        ventana.style.border = "solid 2px red"
    }

    disponibilidad.innerHTML = disponibilidadActual;
}