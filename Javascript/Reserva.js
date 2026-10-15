const datosGuardados = JSON.parse(localStorage.getItem('busquedaActual'));
if (datosGuardados) {
    document.getElementById('fecha').value = datosGuardados.fecha;
    document.getElementById('hora').value = datosGuardados.hora;
}
