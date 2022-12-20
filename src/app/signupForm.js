import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

$("#register").submit("click", async (event) => {
    event.preventDefault();
    // resto de tu codigo
    var name = $('#nombre').val();
    var email = document.getElementById('email-register').value
    var password = document.getElementById('password-register').value


    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        showMessage('Bienvenido! ' + userCredential.user.email)
        setTimeout( function() { window.location.href = "bienvenido.html"; }, 2000 );

    } catch (error) {
        console.log(error.message)
        console.log(error.code)

        if (error.code === 'auth/invalid-email') {
            showMessage('¡Ups! Ingresaste un correo inválido', 'error')
        } else if (error.code === 'auth/weak-password') {
            showMessage('Parece que las contraseñas no son lo tuyo 😂, por favor ingresa una contraseña más segura 🥱', 'error')
        } else if (error.code === 'auth/email-already-in-use') {
            showMessage('Hmmmmm yo te conozco Spidy 🧐, este correo ya está en uso 😪', 'error')
        } else if (error.code) {
            showMessage('Algo salió mal en el registro 😵', 'error')
        }
    }
});