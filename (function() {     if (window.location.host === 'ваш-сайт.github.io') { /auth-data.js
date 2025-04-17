(function() {
    if (window.location.host === 'ваш-сайт.github.io') { // Проверяем, что код выполняется на вашем сайте
        const credentials = {
            'admin': { salt: 'a1b2c3d4e5f6', hash: '7f83b1...' },
            'qwerty123': { salt: 'z9y8x7w6v5u4', hash: 'a8b9e9...' }
        };
        localStorage.setItem('credentials', JSON.stringify(credentials));
    }
})();
