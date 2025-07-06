// Adiciona um event que espera o DOM ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Tenta encontrar o elemento com o ID 'status'
    const statusDiv = document.getElementById('status');

    // **IMPORTANTE:** Verifica se o elemento foi realmente encontrado
    if (statusDiv) {
        // Função que atualiza a visibilidade da mensagem com base no status da conexão
        function updateOnlineStatus() {
            if (navigator.onLine) {
                // Se estiver online, esconde a mensagem
                statusDiv.style.display = 'none';
            } else {
                // Se estiver offline, mostra a mensagem
                statusDiv.style.display = 'block';
            }
        }

        // Adiciona ouvintes para os eventos de conexão do navegador
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);

        // Chama a função uma vez ao carregar a página para definir o estado inicial
        updateOnlineStatus();
    } else {
        // Se o elemento não for encontrado
        console.error('Erro: Elemento com ID "status" não foi encontrado no HTML.');
    }
});
