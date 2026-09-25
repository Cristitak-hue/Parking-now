
const formulario = document.getElementById("formularioRegistro");

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");

const tipoDocumento = document.getElementById("tipo-documento");
const numeroDocumento = document.getElementById("numero-documento");

const fechaNacimiento = document.getElementById("fecha-nacimiento");

const correo = document.getElementById("correo");

const contraseña = document.getElementById("contraseña");
const confirmarContraseña = document.getElementById("confirmar-contraseña");

const ojoContrasena = document.getElementById("ojoContrasena");
const ojoConfirmar = document.getElementById("ojoConfirmar");


ojoContrasena.addEventListener("click", function () {

    if (contraseña.type === "password") {

        contraseña.type = "text";

        ojoContrasena.classList.remove("fa-eye");
        ojoContrasena.classList.add("fa-eye-slash");

    } else {

        contraseña.type = "password";

        ojoContrasena.classList.remove("fa-eye-slash");
        ojoContrasena.classList.add("fa-eye");

    }

});


ojoConfirmar.addEventListener("click", function () {

    if (confirmarContraseña.type === "password") {

        confirmarContraseña.type = "text";

        ojoConfirmar.classList.remove("fa-eye");
        ojoConfirmar.classList.add("fa-eye-slash");

    } else {

        confirmarContraseña.type = "password";

        ojoConfirmar.classList.remove("fa-eye-slash");
        ojoConfirmar.classList.add("fa-eye");

    }

});


function mostrarError(campo, mensaje) {
    const contenedor = campo.closest(".campo");
    let mensajeError = contenedor.querySelector(".mensaje-error");

    if (!mensajeError) {

        mensajeError = document.createElement("small");

        mensajeError.classList.add("mensaje-error");

        contenedor.appendChild(mensajeError);

    }

    mensajeError.textContent = mensaje;

    campo.classList.add("campo-error");

}

function quitarError(campo) {

    const contenedor = campo.closest(".campo");

    const mensajeError = contenedor.querySelector(".mensaje-error");

    if (mensajeError) {

        mensajeError.remove();

    }

    campo.classList.remove("campo-error");

}

function validarNombre() {

    const valor = nombre.value.trim();

    // Si está vacío
    if (valor === "") {

        mostrarError(nombre, "Ingresa tu nombre.");

        return false;

    }


    const patronNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

    if (!patronNombre.test(valor)) {

        mostrarError(nombre, "El nombre solo debe contener letras.");

        return false;

    }
    if (valor.length < 2) {

        mostrarError(nombre, "El nombre debe tener al menos 2 caracteres.");

        return false;

    }

    quitarError(nombre);

    return true;

}


function validarApellido() {

    const valor = apellido.value.trim();

    if (valor === "") {

        mostrarError(apellido, "Ingresa tu apellido.");

        return false;

    }

    const patronApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

    if (!patronApellido.test(valor)) {

        mostrarError(apellido, "El apellido solo debe contener letras.");

        return false;

    }

    if (valor.length < 2) {

        mostrarError(apellido, "El apellido debe tener al menos 2 caracteres.");

        return false;

    }

    quitarError(apellido);

    return true;

}


function validarTipoDocumento() {

    if (tipoDocumento.value === "") {

        mostrarError(
            tipoDocumento,
            "Selecciona un tipo de documento."
        );

        return false;

    }

    quitarError(tipoDocumento);

    return true;

}

function validarNumeroDocumento() {

    const valor = numeroDocumento.value.trim();

    if (valor === "") {

        mostrarError(
            numeroDocumento,
            "Ingresa tu número de documento."
        );

        return false;

    }

    const patronDocumento = /^[0-9]+$/;

    if (!patronDocumento.test(valor)) {

        mostrarError(
            numeroDocumento,
            "El documento solo debe contener números."
        );

        return false;

    }

    if (valor.length < 6 || valor.length > 12) {

        mostrarError(
            numeroDocumento,
            "El documento debe tener entre 6 y 12 números."
        );

        return false;

    }

    quitarError(numeroDocumento);

    return true;

}

function validarFechaNacimiento() {

    const valor = fechaNacimiento.value;

    if (valor === "") {

        mostrarError(
            fechaNacimiento,
            "Selecciona tu fecha de nacimiento."
        );

        return false;

    }

    const fechaSeleccionada = new Date(valor);

    const fechaActual = new Date();

    const fechaMinima = new Date(
        fechaActual.getFullYear() - 18,
        fechaActual.getMonth(),
        fechaActual.getDate()
    );

    if (fechaSeleccionada > fechaMinima) {

        mostrarError(
            fechaNacimiento,
            "Debes tener al menos 18 años."
        );

        return false;

    }

    quitarError(fechaNacimiento);

    return true;

}

function validarCorreo() {

    const valor = correo.value.trim();

    if (valor === "") {

        mostrarError(
            correo,
            "Ingresa tu correo electrónico."
        );

        return false;

    }

    const patronCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!patronCorreo.test(valor)) {

        mostrarError(
            correo,
            "Ingresa un correo electrónico válido."
        );

        return false;

    }

    quitarError(correo);

    return true;

}


function validarContraseña() {

    const valor = contraseña.value;

    if (valor === "") {

        mostrarError(
            contraseña,
            "Ingresa una contraseña."
        );

        return false;

    }

    if (valor.length < 8) {

        mostrarError(
            contraseña,
            "La contraseña debe tener mínimo 8 caracteres."
        );

        return false;

    }

    if (!/[A-Za-z]/.test(valor)) {

        mostrarError(
            contraseña,
            "La contraseña debe contener al menos una letra."
        );

        return false;

    }

    if (!/[0-9]/.test(valor)) {

        mostrarError(
            contraseña,
            "La contraseña debe contener al menos un número."
        );

        return false;

    }

    quitarError(contraseña);

    return true;

}

function validarConfirmarContraseña() {

    const valor = confirmarContraseña.value;

    if (valor === "") {

        mostrarError(
            confirmarContraseña,
            "Confirma tu contraseña."
        );

        return false;

    }

    if (valor !== contraseña.value) {

        mostrarError(
            confirmarContraseña,
            "Las contraseñas no coinciden."
        );

        return false;

    }

    quitarError(confirmarContraseña);

    return true;

}


nombre.addEventListener("input", validarNombre);

apellido.addEventListener("input", validarApellido);

numeroDocumento.addEventListener(
    "input",
    validarNumeroDocumento
);

correo.addEventListener("input", validarCorreo);

contraseña.addEventListener(
    "input",
    function () {

        validarContraseña();

        if (confirmarContraseña.value !== "") {

            validarConfirmarContraseña();

        }

    }
);

confirmarContraseña.addEventListener(
    "input",
    validarConfirmarContraseña
);

tipoDocumento.addEventListener(
    "change",
    validarTipoDocumento
);

fechaNacimiento.addEventListener(
    "change",
    validarFechaNacimiento
);


formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombreCorrecto =
        validarNombre();

    const apellidoCorrecto =
        validarApellido();

    const tipoDocumentoCorrecto =
        validarTipoDocumento();

    const numeroDocumentoCorrecto =
        validarNumeroDocumento();

    const fechaCorrecta =
        validarFechaNacimiento();

    const correoCorrecto =
        validarCorreo();

    const contraseñaCorrecta =
        validarContraseña();

    const confirmacionCorrecta =
        validarConfirmarContraseña();

    if (
        nombreCorrecto &&
        apellidoCorrecto &&
        tipoDocumentoCorrecto &&
        numeroDocumentoCorrecto &&
        fechaCorrecta &&
        correoCorrecto &&
        contraseñaCorrecta &&
        confirmacionCorrecta
    ) {

        alert(
            "¡Cuenta creada correctamente!"
        );

        formulario.reset();

    }

});