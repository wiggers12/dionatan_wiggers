// firebase-messaging-sw.js
// ===============================================
// 📡 Service Worker de NOTIFICAÇÕES
// ===============================================

importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyBod8YVf5pKWI98m9rRR8axokDkNMlXX-k",
    authDomain: "aviatordaniel100x.firebaseapp.com",
    projectId: "aviatordaniel100x",
    messagingSenderId: "169015417803",
    appId: "1:169015417803:web:ce4aa4f9b77d5ddb07344e"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("📩 Notificação recebida em background:", payload);

    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "icon-192.png"
    });
});
