function abrirInvitacion() {
  document.getElementById("sobre").style.display = "none";
}

// FECHA DEL EVENTO
const fechaEvento = new Date("2026-07-20T18:00:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("contador").innerHTML =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}, 1000);

// ASISTENCIA
function enviarAsistencia(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const asistencia = document.getElementById("asistencia").value;
  const razon = document.getElementById("razon").value;

  fetch("https://script.google.com/macros/s/AKfycby4EQcxdhKWVCT6Uf8EI8YeJLjeChiCoIujBmjXvm4Ve4o_WnX3Q7qU9QVAgZDgAklGRw/exec", {
    method: "POST",
    body: JSON.stringify({ nombre, asistencia, razon }),
    headers: { "Content-Type": "application/json" }
  })
  .then(response => response.json())
  .then(data => {
    alert("¡Gracias por confirmar tu asistencia!");
    document.getElementById("nombre").value = "";
    document.getElementById("asistencia").value = "";
    document.getElementById("razon").value = "";
  })
  .catch(err => console.error(err));
}
