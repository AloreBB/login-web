import { signOut} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from './firebase.js';

$('#logout').on("click", async () => {
    await signOut(auth)
    console.log('User loggout');
    $(location).attr('href', 'index.html')
})