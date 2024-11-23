let previousScrollPosition = window.pageYOffset; // Posição inicial do scroll

window.onscroll = function() {
    let currentScrollPosition = window.pageYOffset; // Posição do scroll atual
    
    if (previousScrollPosition < currentScrollPosition) {
        // Rolando para baixo - esconde o cabeçalho
        document.querySelector("header").style.transform = "translateY(-100%)"; // Move o header para fora da tela
    } else {
        // Rolando para cima - mostra o cabeçalho
        document.querySelector("header").style.transform = "translateY(0)"; // Move o header de volta para o topo
    }
    
    previousScrollPosition = currentScrollPosition; // Atualiza a posição anterior do scroll
}
