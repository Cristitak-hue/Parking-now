const notificacionBtn = document.querySelector('.notificacion i');
const panelNotificaciones = document.querySelector('.panel-notificaciones');
const perfilBtn = document.querySelector('.perfil');
const panelsesionBtn = document.querySelector('.panel-sesion');

notificacionBtn.addEventListener('click', function(evento){
    evento.stopPropagation();
    panelNotificaciones.classList.toggle('oculto');
});

document.addEventListener('click', function(evento){
    if(!panelNotificaciones.contains(evento.target)){
        panelNotificaciones.classList.add('oculto');
    }
});

document.addEventListener('keydown', function(evento){
    if (evento.key === 'Escape'){
        panelNotificaciones.classList.add('oculto');
    }
});

perfilBtn.addEventListener('click', function(evento){
    evento.stopPropagation();
    panelsesionBtn.classList.toggle('oculto');
});

document.addEventListener('click', function(evento){
    if (!panelsesionBtn.contains(evento.target)){
        panelsesionBtn.classList.add('oculto');
    }
});

function cerrarSesion(){
    localStorage.clear();
    window.location.href = '/Inicio_sesion.html';
}
//Modal panel cambio info
const modalPerfil = document.getElementById('modalPerfil');
const abrirEditarBtn = document.getElementById('abrirEditarPerfil');
const cerrarModalPerfilBtn = document.getElementById('cerrarModalPerfil');
const formPerfil = document.getElementById('formPerfil');
const nombreInput = document.getElementById('nombreEditar');
const correoInput = document.getElementById('correoEditar');

// Elementos donde se MUESTRA la info (los que ya tienes en el HTML)
const nombreMostrado = document.querySelectorAll('.dato-valor')[0];
const correoMostrado = document.querySelectorAll('.dato-valor')[1];

// Abrir el modal, precargando los valores actuales
abrirEditarBtn.addEventListener('click', function(){
    nombreInput.value = nombreMostrado.textContent;
    correoInput.value = correoMostrado.textContent;
    modalPerfil.classList.remove('oculto');
});

function cerrarModalPerfil(){
    modalPerfil.classList.add('oculto');
}
cerrarModalPerfilBtn.addEventListener('click', cerrarModalPerfil);

// Guardar cambios
formPerfil.addEventListener('submit', function(evento){
    evento.preventDefault();

    const datosPerfil = {
        nombre: nombreInput.value,
        correo: correoInput.value
    };

    localStorage.setItem('perfilUsuario', JSON.stringify(datosPerfil));

    nombreMostrado.textContent = datosPerfil.nombre;
    correoMostrado.textContent = datosPerfil.correo;

    cerrarModalPerfil();
});

// Al cargar la página, revisar si ya hay datos guardados
const datosGuardados = JSON.parse(localStorage.getItem('perfilUsuario'));
if (datosGuardados) {
    nombreMostrado.textContent = datosGuardados.nombre;
    correoMostrado.textContent = datosGuardados.correo;
}