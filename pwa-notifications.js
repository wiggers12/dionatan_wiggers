// pwa-notifications.js
// ===============================================
// 🔔 Gerenciamento de Notificações do PWA
// ===============================================

// Solicitar permissão
async function solicitarPermissaoNotificacao() {
    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
        console.warn("🚫 Permissão de notificação negada");
        return null;
    }

    return obterTokenNotificacao();
}

// Obter token FCM
async function obterTokenNotificacao() {
    try {
        const token = await messaging.getToken({
            vapidKey: "BJq_f0pPPwULWWF7gns1hwkQnytaGvWDH-t1jhPic8sga8gBlqkllF2ZUGZqjs22o6k6qlzTSu76wRNpDezlXPs"
        });

        if (token) {
            console.log("🔔 Token PWA:", token);

            // Salvar no Firestore
            await db.collection("pwa_tokens").doc(token).set({
                token,
                userAgent: navigator.userAgent,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });

            return token;
        }
    } catch (error) {
        console.error("Erro ao obter token FCM:", error);
    }

    return null;
}

// Enviar notificação (via Cloud Function)
async function enviarNotificacaoParaTodos(titulo, corpo) {
    try {
        await fetch("https://sendpush-wiggersdev.onrender.com/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ titulo, corpo })
        });

        console.log("📤 Notificação enviada!");
    } catch (e) {
        console.error("Erro ao enviar push:", e);
    }
}
