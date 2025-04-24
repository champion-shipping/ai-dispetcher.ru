// Перенаправление при прямом доступе
if(window.location.href.includes('_auth_data.js')) {
    window.location.href = '/index.html';
}

function getAuthConfig() {
    // Обфусцированные данные (просто запутываем, не шифруем)
    const _d = [
        {l: ['9','9','9','9','9','9','9','9','9'].join(''), p: ['q','w','e','r','t','y','1','2','3'].join('')},
        {l: [97,100,109,105,110].map(c=>String.fromCharCode(c)).join(''), p: [115,101,99,114,101,116,52,53,54].map(c=>String.fromCharCode(c)).join('')}
    ];
    
    return {
        credentials: _d,
        protectedPages: [
            "/урок-2.html",
            "/урок-3.html",
            "/урок-4.html"
        ]
    };
}
