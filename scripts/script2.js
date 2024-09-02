function goToPreviousPage() {
    window.location.href = "pagina1.html";
}

function goToNextPage() {
    window.location.href = "Página_Inicial.html";
}

function atualizarImagem() {
    var timestamp = new Date().getTime();
    var imageUrl = `//10.144.29.200/Publico/Painel/entroncamento.png?${timestamp}`;
    document.getElementById('painel-img').src = imageUrl;
}

atualizarImagem();
setInterval(atualizarImagem, 15000);
