document.addEventListener('DOMContentLoaded', function() {
    // Загружаем header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            initMenu(); // Инициализируем меню после загрузки
        });

    // Загружаем footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);

    function initMenu() {
        // Код для работы меню
        function updateMenu() {
            const isMobile = window.innerWidth <= 768;
            document.getElementById('menuBtn').style.display = isMobile ? 'block' : 'none';
            document.getElementById('desktopMenu').style.display = isMobile ? 'none' : 'flex';
            if (!isMobile) document.getElementById('mobileMenu').style.display = 'none';
        }

        document.getElementById('menuBtn')?.addEventListener('click', function() {
            const menu = document.getElementById('mobileMenu');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });

        window.addEventListener('resize', updateMenu);
        updateMenu();
    }
});
