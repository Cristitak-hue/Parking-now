/*Definicion de clases en JS */
const notificacionBtn = document.querySelector('.notificacion i');
const panelNotificaciones = document.querySelector('.panel-notificaciones')
const perfilBtn = document.querySelector('.perfil');
const panelsesionBtn = document.querySelector('.panel-sesion')
const selectVehiculo = document.getElementById('Vehiculo')
const modalVehiculo = document.getElementById('modalVehiculo')
const cerrarModalBtn = document.getElementById('cerrarModal');
const formVehiculo = document.getElementById('formVehiculo');
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
perfilBtn.addEventListener('click', function(evento){
    evento.stopPropagation();
    panelsesionBtn.classList.toggle('oculto')
});
/* Hacer que se salga cuando hace un click afuera*/
document.addEventListener('click', function(evento){
    if (!panelsesionBtn.contains(evento.target)){
        panelsesionBtn.classList.add('oculto')
    }
});
/*cuando se elige la opcion + vehiculo */
selectVehiculo.addEventListener('change', function(evento){
    if (evento.target.value === 'agregar') {
        modalVehiculo.classList.remove('oculto');
        selectVehiculo.value = '';
    }
});
function cerrarModal(){
    modalVehiculo.classList.add('oculto');
}
cerrarModalBtn.addEventListener('click', cerrarModal);

modalVehiculo.addEventListener('click', function(evento){
    if (evento.tarjet === modalVehiculo) {
        cerrarModal();
    }
});
document.addEventListener('keydown', function(evento){
    if (evento.key === 'Escape') {
        cerrarModal();
    }
});
formVehiculo.addEventListener('submit', function(evento){
    evento.preventDefault();

    const tipoSeleccionado = document.querySelector('input[name="tipo-vehiculo"]:checked').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const anio = document.getElementById('anio').value;
    const placa = document.getElementById('placa').value;
    const color = document.getElementById('color').value;

    const nuevaOpcion = document.createElement('option');
    nuevaOpcion.value = placa;
    nuevaOpcion.textContent = `${marca} ${modelo} ${anio} - ${placa}`;

    selectVehiculo.appendChild(nuevaOpcion);
    selectVehiculo.value = placa;

    formVehiculo.reset();
    cerrarModal();
});
// Funcion para que cambie dependiendo de la marca elegida
const marcasPorTipo = {
    Carro: ["Chevrolet", "Renault", "Mazda", "Kia", "Toyota"],
    Moto: ["Yamaha", "Honda", "Suzuki", "AKT", "Bajaj"]
};
const selectMarca = document.getElementById('marca');

function actualizarMarcas(tipo){
    selectMarca.innerHTML = '<option value="" disabled selected>Selecciona una marca</option>';

    const listaDeMarcas = marcasPorTipo[tipo];

    listaDeMarcas.forEach(function(marca){
        const opcion = document.createElement('option');
        opcion.value = marca;
        opcion.textContent = marca;
        selectMarca.appendChild(opcion);
    });
}
const opcion = document.createElement('option');
opcion.value = marca;
opcion.textContent = marca;
selectMarca.appendChild(opcion);
const radiosVehiculo = document.querySelectorAll('input[name="tipo-vehiculo"]');

radiosVehiculo.forEach(function(radio){
    radio.addEventListener('change', function(evento){
        const tipoElegido = evento.target.value; // "Carro" o "Moto"
        actualizarMarcas(tipoElegido);
    });
});
selectVehiculo.addEventListener('change', function(evento){
    if (evento.target.value === 'agregar') {
        modalVehiculo.classList.remove('oculto');
        selectVehiculo.value = '';
        actualizarMarcas('Carro');
    }
});