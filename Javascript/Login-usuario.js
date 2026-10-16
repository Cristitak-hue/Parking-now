
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

if (ojoContrasena) {
    ojoContrasena.addEventListener("click", function () {
        const mostrar = contraseña.type === "password";
        contraseña.type = mostrar ? "text" : "password";
        ojoContrasena.classList.toggle("fa-eye", !mostrar);
        ojoContrasena.classList.toggle("fa-eye-slash", mostrar);
    });
}

if (ojoConfirmar) {
    ojoConfirmar.addEventListener("click", function () {
        const mostrar = confirmarContraseña.type === "password";
        confirmarContraseña.type = mostrar ? "text" : "password";
        ojoConfirmar.classList.toggle("fa-eye", !mostrar);
        ojoConfirmar.classList.toggle("fa-eye-slash", mostrar);
    });
}

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
    campo.setAttribute("aria-invalid", "true");
}

function quitarError(campo) {
    const contenedor = campo.closest(".campo");
    const mensajeError = contenedor.querySelector(".mensaje-error");

    if (mensajeError) {
        mensajeError.remove();
    }

    campo.classList.remove("campo-error");
    campo.removeAttribute("aria-invalid");
}

function validarNombre() {
    const valor = nombre.value.trim();

    if (valor === "") {
        mostrarError(nombre, "Ingresa tu nombre.");
        return false;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(valor)) {
        mostrarError(nombre, "El nombre solo puede contener letras y espacios.");
        return false;
    }

    if (valor.replace(/\s/g, "").length < 3) {
        mostrarError(nombre, "El nombre debe tener mínimo 3 letras.");
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

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(valor)) {
        mostrarError(apellido, "El apellido solo puede contener letras y espacios.");
        return false;
    }

    if (valor.replace(/\s/g, "").length < 3) {
        mostrarError(apellido, "El apellido debe tener mínimo 3 letras.");
        return false;
    }

    quitarError(apellido);
    return true;
}

function validarTipoDocumento() {
    if (tipoDocumento.value === "") {
        mostrarError(tipoDocumento, "Selecciona un tipo de documento.");
        return false;
    }

    quitarError(tipoDocumento);
    return true;
}

function validarNumeroDocumento() {
    const valor = numeroDocumento.value.trim();
    const tipo = tipoDocumento.value;

    if (valor === "") {
        mostrarError(numeroDocumento, "Ingresa tu número de documento.");
        return false;
    }

    if (tipo === "cc") {
        if (!/^\d{6,10}$/.test(valor)) {
            mostrarError(numeroDocumento, "La cédula debe contener entre 6 y 10 dígitos.");
            return false;
        }
    } else if (tipo === "ce") {
        if (!/^\d{6,12}$/.test(valor)) {
            mostrarError(numeroDocumento, "La cédula de extranjería debe contener entre 6 y 12 dígitos.");
            return false;
        }
    } else if (tipo === "pasaporte") {
        if (!/^[A-Za-z0-9]{6,9}$/.test(valor)) {
            mostrarError(numeroDocumento, "El pasaporte debe tener entre 6 y 9 caracteres, usando letras y números.");
            return false;
        }
    } else {
        mostrarError(numeroDocumento, "Selecciona un tipo de documento válido.");
        return false;
    }

    quitarError(numeroDocumento);
    return true;
}

function validarFechaNacimiento() {
    const valor = fechaNacimiento.value;

    if (valor === "") {
        mostrarError(fechaNacimiento, "Selecciona tu fecha de nacimiento.");
        return false;
    }

    const partes = valor.split("-");
    const anio = Number(partes[0]);
    const mes = Number(partes[1]);
    const dia = Number(partes[2]);
    const fechaSeleccionada = new Date(anio, mes - 1, dia);
    const hoy = new Date();

    hoy.setHours(0, 0, 0, 0);

    if (
        fechaSeleccionada.getFullYear() !== anio ||
        fechaSeleccionada.getMonth() !== mes - 1 ||
        fechaSeleccionada.getDate() !== dia ||
        fechaSeleccionada >= hoy
    ) {
        mostrarError(fechaNacimiento, "Ingresa una fecha de nacimiento válida.");
        return false;
    }

    let edad = hoy.getFullYear() - anio;

    if (
        hoy.getMonth() < mes - 1 ||
        (hoy.getMonth() === mes - 1 && hoy.getDate() < dia)
    ) {
        edad--;
    }

    if (edad < 18) {
        mostrarError(fechaNacimiento, "Debes tener al menos 18 años para registrarte.");
        return false;
    }

    if (edad > 110) {
        mostrarError(fechaNacimiento, "Ingresa una fecha de nacimiento válida.");
        return false;
    }

    quitarError(fechaNacimiento);
    return true;
}

function validarCorreo() {
    const valor = correo.value.trim();

    if (valor === "") {
        mostrarError(correo, "Ingresa tu correo electrónico.");
        return false;
    }

    const patronCorreo = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com|outlook\.es|live\.com|yahoo\.com|icloud\.com)$/i;

    if (!patronCorreo.test(valor)) {
        mostrarError(correo, "Usa un correo válido de Gmail, Hotmail, Outlook, Yahoo o iCloud.");
        return false;
    }

    quitarError(correo);
    return true;
}

function validarContraseña() {
    const valor = contraseña.value;

    if (valor === "") {
        mostrarError(contraseña, "Ingresa una contraseña.");
        return false;
    }

    if (valor.length < 8) {
        mostrarError(contraseña, "La contraseña debe tener mínimo 8 caracteres.");
        return false;
    }

    if (!/[A-Z]/.test(valor)) {
        mostrarError(contraseña, "Incluye al menos una letra mayúscula.");
        return false;
    }

    if (!/[0-9]/.test(valor)) {
        mostrarError(contraseña, "Incluye al menos un número.");
        return false;
    }

    if (!/[^A-Za-z0-9]/.test(valor)) {
        mostrarError(contraseña, "Incluye al menos un símbolo, por ejemplo @, # o $.");
        return false;
    }

    quitarError(contraseña);
    return true;
}

function validarConfirmarContraseña() {
    const valor = confirmarContraseña.value;

    if (valor === "") {
        mostrarError(confirmarContraseña, "Confirma tu contraseña.");
        return false;
    }

    if (valor !== contraseña.value) {
        mostrarError(confirmarContraseña, "Las contraseñas no coinciden.");
        return false;
    }

    quitarError(confirmarContraseña);
    return true;
}

function filtrarLetras(campo) {
    campo.value = campo.value.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]/g, "");
}

nombre.addEventListener("input", function () {
    filtrarLetras(nombre);
    validarNombre();
});

apellido.addEventListener("input", function () {
    filtrarLetras(apellido);
    validarApellido();
});

numeroDocumento.addEventListener("input", function () {
    if (tipoDocumento.value === "pasaporte") {
        numeroDocumento.value = numeroDocumento.value.replace(/[^A-Za-z0-9]/g, "");
    } else {
        numeroDocumento.value = numeroDocumento.value.replace(/\D/g, "");
    }

    validarNumeroDocumento();
});

tipoDocumento.addEventListener("change", function () {
    numeroDocumento.value = "";
    quitarError(numeroDocumento);
    validarTipoDocumento();
});

fechaNacimiento.addEventListener("change", validarFechaNacimiento);
correo.addEventListener("input", validarCorreo);

contraseña.addEventListener("input", function () {
    validarContraseña();

    if (confirmarContraseña.value !== "") {
        validarConfirmarContraseña();
    }
});

confirmarContraseña.addEventListener("input", validarConfirmarContraseña);

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombreCorrecto = validarNombre();
    const apellidoCorrecto = validarApellido();
    const tipoDocumentoCorrecto = validarTipoDocumento();
    const numeroDocumentoCorrecto = validarNumeroDocumento();
    const fechaCorrecta = validarFechaNacimiento();
    const correoCorrecto = validarCorreo();
    const contraseñaCorrecta = validarContraseña();
    const confirmacionCorrecta = validarConfirmarContraseña();

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
        alert("¡Formulario validado correctamente!");
        formulario.reset();

        formulario.querySelectorAll(".mensaje-error").forEach(function (mensaje) {
            mensaje.remove();
        });

        formulario.querySelectorAll(".campo-error").forEach(function (campo) {
            campo.classList.remove("campo-error");
            campo.removeAttribute("aria-invalid");
        });

        contraseña.type = "password";
        confirmarContraseña.type = "password";

        if (ojoContrasena) {
            ojoContrasena.classList.remove("fa-eye-slash");
            ojoContrasena.classList.add("fa-eye");
        }

        if (ojoConfirmar) {
            ojoConfirmar.classList.remove("fa-eye-slash");
            ojoConfirmar.classList.add("fa-eye");
        }
    }
});
