// Перенаправление при прямом доступе
if (window.location.pathname.includes('_data-loader.js')) {
    window.location.href = '/index.html';
}

// Данные авторизации с базовой защитой
function getAuthConfig() {
    const config = {
        // Логины и пароли в base64
        users: [
            {l: "OTk5OTk5OTk=", p: "cXdlcnR5MTIz"}, // 999999999:qwerty123
            {l: "YWRtaW4=", p: "c2VjcmV0NDU2"}      // admin:secret456
        ],
        // Защищенные страницы
        protected: [
            "/урок-2.html",
            "/урок-3.html",
            "/урок-4.html"
        ]
    };

    // Декодируем данные
    return {
        credentials: config.users.map(u => ({
            login: atob(u.l),
            password: atob(u.p)
        })),
        protectedPages: config.protected
    };
}
