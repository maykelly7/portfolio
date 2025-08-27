// Seleciona todos os links do menu
const navLinks = document.querySelectorAll('.nav-bar a');

// Função para atualizar o link ativo
function updateActiveLink() {
    let currentSection = '';

    // Verifica qual seção está atualmente visível
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove a classe 'active' de todos os links e aplica no atual
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
}

// Atualiza o link ativo ao rolar a página
window.addEventListener('scroll', updateActiveLink);

// Atualiza o link ativo ao clicar em um link do menu
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
