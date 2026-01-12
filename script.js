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

  // Inicializar EmailJS (reemplaza con tu clave pública)
  emailjs.init("TU_CLAVE_PUBLICA_AQUI");

  // Parámetros para el template de email
  const templateParams = {
    from_name: nombre,
    asistencia: asistencia,
    razon: razon
  };

  // Enviar email (reemplaza con tu service ID y template ID)
  emailjs.send("TU_SERVICE_ID_AQUI", "TU_TEMPLATE_ID_AQUI", templateParams)
    .then(function(response) {
      alert("¡Gracias por confirmar tu asistencia! Se ha enviado un email al administrador.");
      document.getElementById("nombre").value = "";
      document.getElementById("asistencia").value = "";
      document.getElementById("razon").value = "";
    }, function(error) {
      alert("Error al enviar: " + error.text);
    });
}
