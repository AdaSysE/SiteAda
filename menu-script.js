// Script para ativar o menu mobile
document.addEventListener('DOMContentLoaded', function() {
  // Função para ativar o menu mobile após o header ser carregado
  function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden'); // Alterna a classe 'hidden' para mostrar/esconder
      });
    } else {
      console.error('Botão ou menu mobile não encontrado após carregar o header.');
    }
  }

  // Verifica se o header já foi carregado
  if (document.getElementById('mobile-menu-button')) {
    setupMobileMenu();
  } else {
    // Se o header ainda não foi carregado, aguarda um pouco e tenta novamente
    setTimeout(setupMobileMenu, 500);
  }
});
