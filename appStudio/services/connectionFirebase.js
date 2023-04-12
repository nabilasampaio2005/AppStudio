//biblioteca do firebase
import firebase from 'firebase/compat/app';
//autenticação de email e senha
import 'firebase/compat/auth';
//trabalha com o banco de dados criado no firebase
import 'firebase/compat/database';

let firebaseConfig = {
  apiKey: "AIzaSyA1AE7Sg5vf8JgRIUEJIzofSuMoF7egQQE",
  authDomain: "dbstudio-81eb6.firebaseapp.com",
  projectId: "dbstudio-81eb6",
  storageBucket: "dbstudio-81eb6.appspot.com",
  messagingSenderId: "759213811335",
  appId: "1:759213811335:web:64d48c004b722e309d3a22"
};

// verifica se a conexão com o firebase está aberto ou fechado

if (!firebase.apps.length) {
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    }

export default firebase;