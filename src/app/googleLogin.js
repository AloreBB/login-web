import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';

$("#googleLogin").on("click", async (e) => { 
    e.preventDefault();

    const provider = new GoogleAuthProvider()

    try {
        const userCredential = await signInWithPopup(auth, provider)
        console.log(userCredential);

        showMessage('Bienvenido! ' + userCredential.user.displayName)
        setTimeout( function() { window.location.href = "bienvenido.html"; }, 2000 );
    } catch (error) {
        console.log(error);
    }
    

})