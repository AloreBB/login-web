import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getAuth} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';



// var name = document.getElementById('name').value

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEK3pM1TzsBtqPcOJX5V4TT8sXBkiXsgE",
    authDomain: "login-9dfcf.firebaseapp.com",
    projectId: "login-9dfcf",
    storageBucket: "login-9dfcf.appspot.com",
    messagingSenderId: "104470141037",
    appId: "1:104470141037:web:35524a6c6165ed5af24764",
    measurementId: "G-D7J69LZ92P"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const provider = new GoogleAuthProvider();