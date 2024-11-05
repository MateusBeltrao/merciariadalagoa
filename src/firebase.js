import firebase from 'firebase/app'
import 'firabesa/database'

const firebaseConfig = {
    apiKey: "AIzaSyAFhpEU0MdpeZcT98sjstpj8KD5s0TLypQ",
    authDomain: "raect-dc96e.firebaseapp.com",
    projectId: "raect-dc96e",
    storageBucket: "raect-dc96e.firebasestorage.app",
    messagingSenderId: "152877217982",
    appId: "1:152877217982:web:44e552db752a64e12046ef"
  };


  const fireDB = firebase.initializeApp(firebase)
  export default fireDB.database().ref()