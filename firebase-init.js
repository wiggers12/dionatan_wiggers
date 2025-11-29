// firebase-init.js
// ===============================================
// 🔥 Inicialização Firebase (aviatordaniel100x)
// ===============================================

const firebaseConfig = {
    apiKey: "AIzaSyBod8YVf5pKWI98m9rRR8axokDkNMlXX-k",
    authDomain: "aviatordaniel100x.firebaseapp.com",
    projectId: "aviatordaniel100x",
    storageBucket: "aviatordaniel100x.firebasestorage.app",
    messagingSenderId: "169015417803",
    appId: "1:169015417803:web:ce4aa4f9b77d5ddb07344e"
};

// Inicializa app
firebase.initializeApp(firebaseConfig);

// Firestore
window.db = firebase.firestore();

// Messaging
window.messaging = firebase.messaging();
