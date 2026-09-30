/*Definicion de clases en JS */
const notificacionBtn = document.querySelector('.notificacion i');
const panelNotificaciones = document.querySelector('.panel-notificaciones')
const panelsesionBtn = document.querySelector('.panel-sesion')
/* Evento de mostrar notificaciones al momento de oprimir la campanita */
notificacionBtn.addEventListener ('click', function(evento)   {
    evento.stopPropagation();
    panelNotificaciones.classList.toggle('oculto');
});
/*Para cuando oprima afuera del cuadro se ponga la clase oculto y se oculte */
document.addEventListener('click', function(evento){
    if(!panelNotificaciones.contains(evento.target)){
        panelNotificaciones.classList.add('oculto')
    }
});
/**Para presionar con la letra esc y se cierre el panel de notificaiones */
document.addEventListener('keydown', function(evento){
    if (evento.key === 'Escape'){
        panelNotificaciones.classList.add('oculto')
    }
});
/*Mostrar opciones de cuenta */
panelsesionBtn.addEventListener('click', function(evento){
    panelsesionBtn.classList.toggle('oculto')
});
/* Hacer que se salga cuando hace un click afuera*/
document.addEventListener('click', function(evento){
    if (!panelsesionBtn.contains(evento.target)){
        panelsesionBtn.classList.add('oculto')
    }
});

