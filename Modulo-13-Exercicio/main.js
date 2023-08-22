// Adicione um evento de clique a cada link do menu
const menuLinks = document.querySelectorAll('.nav-link');
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Remova a classe 'show' com um atraso de 300ms para criar uma animação suave
        event.preventDefault(); // Evita que o link seja seguido imediatamente
        setTimeout(() => {
            document.getElementById('menu3').classList.remove('show');
            // Siga para o link após o atraso
            window.location.href = event.target.getAttribute('href');
        },1);
    });
});