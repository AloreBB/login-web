import { onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { auth } from '../app/firebase.js';

import '../app/signupForm.js'
import '../app/logout.js'
import  '../app/signinForm.js'
import '../app/googleLogin.js'

onAuthStateChanged(auth, async(user) => {
    console.log(user);
})