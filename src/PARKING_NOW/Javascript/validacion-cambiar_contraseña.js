const formulario = document.getElementById("formularioContrasena");

const nuevaContrasena = document.getElementById("nuevaContrasena");

const confirmarContrasena = document.getElementById("confirmarContrasena");



formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const contraseña = nuevaContrasena.value;

    const confirmacion = confirmarContrasena.value;


    if (contraseña === "") {

        alert("La contraseña no puede estar vacía.");

        return;
    }


    if (contraseña.length < 8) {

        alert("La contraseña debe tener mínimo 8 caracteres.");

        return;
    }


    if (confirmacion === "") {

        alert("Debes confirmar tu contraseña.");

        return;
    }


    if (contraseña !== confirmacion) {

        alert("Las contraseñas no coinciden.");

        return;
    }


    alert("¡Contraseña cambiada correctamente!");

});

//habilitar ojos #1//

const ojoNueva = document.getElementById("ojoNueva");

ojoNueva.addEventListener("click", function() {

    if (nuevaContrasena.type === "password") {

        nuevaContrasena.type = "text";

        ojoNueva.classList.remove("fa-eye");

        ojoNueva.classList.add("fa-eye-slash");

    } else {

        nuevaContrasena.type = "password";

        ojoNueva.classList.remove("fa-eye-slash");

        ojoNueva.classList.add("fa-eye");

    }

});

//habilitar ojo #2//

const ojoConfirmar = document.getElementById("ojoConfirmar");

ojoConfirmar.addEventListener("click", function() {

    if (confirmarContrasena.type === "password") {

        confirmarContrasena.type = "text";

        ojoConfirmar.classList.remove("fa-eye");

        ojoConfirmar.classList.add("fa-eye-slash");

    } else {

        confirmarContrasena.type = "password";

        ojoConfirmar.classList.remove("fa-eye-slash");

        ojoConfirmar.classList.add("fa-eye");

    }

});