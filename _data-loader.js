// Перенаправляем на главную если пытаются открыть файл напрямую
if (window.location.pathname.endsWith('_data-loader.js')) {
    window.location.href = '/';
}

function _loadAuthConfig() {
    // Данные в закодированном виде для минимальной защиты
    const _encoded = {
        c: [
            {l: "999999999", p: "cXdlcnR5MTIz"}, // login: 999999999, password: qwerty123
            {l: "YWRtaW4=", p: "c2VjcmV0NDU2"}    // login: admin, password: secret456 (base64)
        ],
        p: ["/урок-2.html", "/урок-3.html", "/урок-4.html"]
    };

    // Декодируем данные
    return {
        credentials: _encoded.c.map(item => ({
            login: atob(item.l), 
            password: atob(item.p)
        })),
        protectedPages: _encoded.p
    };
}
