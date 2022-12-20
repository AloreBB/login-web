import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';

$('#login').submit(async (e) => {
    e.preventDefault()

    var email = document.getElementById('email').value
    var password = document.getElementById('pass').value

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredential)

        showMessage('Bienvenido! ' + userCredential.user.email)
        setTimeout( function() { window.location.href = "bienvenido.html"; }, 2000 );
    } catch (error) {
        console.log(error.code);
        if (error.code === 'auth/wrong-password') {
            showMessage('Credenciales incorrectas 😥')
        } else if (error.code === 'auth/user-not-found') {
            showMessage('Usuario no encontrado 😥')
        }
        else {
            showMessage(error.showMessage, 'error')
        }
    }
    

})