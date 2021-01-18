const date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getUTCFullYear();
const fecha = `${year}-${month}-${day}`
console.log (fecha)
