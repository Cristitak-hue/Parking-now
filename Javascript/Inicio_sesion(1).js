const email = document.getElementById('email');
const contraseña = document.getElementById('contraseña');
const formulario = document.getElementById('login');
const erroremail = document.getElementById('error-email')
const errorcontraseña = document.getElementById('error-contraseña')
const tienenumero = document.getElementById = /\d/.test(contraseña.value)
const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(email.value);
    console.log(contraseña.value)
    if(email.value.trim() === ""){
        console.log("El correo esta vacio")
        erroremail.textContent = "*Debes ingresar un correo"
    }else if(!formatoCorreo.test(email.value)){
        erroremail.textContent = "Ingresa un correo valido."
    }else{
        erroremail.textContent = ""
    }
    if(contraseña.value === "" && contraseña.value.length < 8){
        console.log("Este campo esta vacio")
        errorcontraseña.textContent = "*Debes ingresar una contraseña"
    } else if(contraseña.value.length < 8){
        errorcontraseña.textContent = "*La contraseña debe tener almenos 8 caracteres"
    } else if (!/\d/.test(contraseña.value)){
        errorcontraseña.textContent = "*La contraseña debe tener un número."
    }else if (!/[!@#$%^&*._-]/.test(contraseña.value)){
        errorcontraseña.textContent = "La contraseña debe contener un caracter especial"
    }else if(!/[A-Z]/){
        errorcontraseña.textContent = "Debe contener al menos una mayúscula"
    }else if(!/[a-z]/){
        errorcontraseña.textContent = "Debe contener al menos una minúscula"
    }else{
        errorcontraseña.textContent = ""
    }
    if (erroremail.textContent === "" && errorcontraseña.textContent === "") {
        Swal.fire({
            title: '¡Ingreso Exitoso!',
            text: 'Inicio de sesion correcto!.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6'
    });
    }
}); 