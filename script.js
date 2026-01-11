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

  const telefono = "50488566327"; // <-- TU número con código país

  let mensaje = `Confirmación de asistencia:%0A`;
  mensaje += `Nombre: ${nombre}%0A`;
  mensaje += `Respuesta: ${asistencia}%0A`;

  if (asistencia === "No asistiré") {
    mensaje += `Motivo: ${razon}`;
  }

  const url = `https://wa.me/${telefono}?text=${mensaje}`;
  window.open(url, "_blank");
}
