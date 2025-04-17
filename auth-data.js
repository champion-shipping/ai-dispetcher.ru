(function() {
    // Проверяем, что код выполняется на вашем сайте
    if (window.location.host === 'ваш-сайт.github.io') {
        const credentials = {
            'admin': {
                salt: 'a1b2c3d4e5f6',
                hash: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069'
            },
            'qwerty123': {
                salt: 'z9y8x7w6v5u4',
                hash: 'c5d1a8a3e2d8a5e0e2a8e3d5f8a2e8c9e9d2f8a2e8c9e9d2f8a2e8c9e9d2f8a2'
            }
        };
        
        if (!localStorage.getItem('authInitialized')) {
            localStorage.setItem('credentials', JSON.stringify(credentials));
            localStorage.setItem('authInitialized', 'true');
        }
    }
})();
