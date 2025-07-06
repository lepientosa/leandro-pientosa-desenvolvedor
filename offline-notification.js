// offline-notification.js

const statusDiv = document.getElementById("status");
const body = document.body;

function showOfflineMessage() {
    if (statusDiv) {
        statusDiv.style.setProperty('display', 'block', '');
        body.style.paddingTop = statusDiv.offsetHeight + 'px';
        console.log("showOfflineMessage() executada. Status offline visível.");
    } else {
        console.error("Erro: Elemento #status não encontrado no DOM (showOfflineMessage).");
    }
}

function hideOfflineMessage() {
    if (statusDiv) {
        statusDiv.style.setProperty('display', 'none', '');
        body.style.paddingTop = '0px';
        console.log("hideOfflineMessage() executada. Status offline oculto.");
    } else {
        console.error("Erro: Elemento #status não encontrado no DOM (hideOfflineMessage).");
    }
}

function showOnlineMessage() {
    console.log("showOnlineMessage() iniciada."); // Novo log

    const onlineNotification = document.createElement("div");
    onlineNotification.textContent = "Conexão restabelecida!";
    onlineNotification.style.position = "fixed";
    onlineNotification.style.top = "10px";
    onlineNotification.style.right = "10px";
    onlineNotification.style.padding = "15px";
    onlineNotification.style.backgroundColor = "#00cc00"; // Verde
    onlineNotification.style.color = "white";
    onlineNotification.style.borderRadius = "5px";
    onlineNotification.style.zIndex = "1000"; // Z-index para a notificação temporária online
    onlineNotification.style.fontFamily = "Arial, sans-serif";
    onlineNotification.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";

    try { // Adiciona um bloco try-catch para capturar erros na adição
        document.body.appendChild(onlineNotification);
        console.log("Notificação online adicionada ao body.", onlineNotification); // Novo log
    } catch (e) {
        console.error("Erro ao adicionar notificação online ao body:", e); // Novo log de erro
    }


    setTimeout(() => {
        onlineNotification.remove();
        console.log("Notificação online removida após timeout."); // Novo log
    }, 3000);
}

// Detecta se o visitante já está offline ao carregar a página
if (!navigator.onLine) {
    console.log("Página carregou offline. Chamando showOfflineMessage().");
    showOfflineMessage();
} else {
    console.log("Página carregou online. Nenhuma ação inicial para online.");
}


// Eventos quando a conexão muda
window.addEventListener('offline', () => {
    console.log("Evento 'offline' detectado!");
    showOfflineMessage();
});

window.addEventListener('online', () => {
    console.log("Evento 'online' detectado!");
    hideOfflineMessage();
    showOnlineMessage();
});