let previousScrollPosition = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPosition = window.pageYOffset;
    
    if (previousScrollPosition < currentScrollPosition) {
        // Rolando para baixo - esconde o cabeçalho
        document.querySelector("header").style.transform = "translateY(-100%)"; // Move o header para fora da tela
    } else {
        // Rolando para cima - mostra o cabeçalho
        document.querySelector("header").style.transform = "translateY(0)";
    }
    
    previousScrollPosition = currentScrollPosition;
}


