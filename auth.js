// auth.js
async function checkAuth() {
    try {
        const response = await fetch('/autor-pass-log.json?t=' + Date.now());
        const data = await response.json();
        
        if (data.protectedPages.includes(window.location.pathname)) {
            if (!sessionStorage.getItem('auth_passed')) {
                showAuthModal(data.credentials);
                return false; // Доступ не разрешен
            }
            return true; // Доступ разрешен
        }
        return true; // Страница не защищена
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        return false;
    }
}

function showAuthModal(credentials) {
    const modal = document.createElement('div');
    modal.className = 'auth-modal';
    
    modal.innerHTML = `
        <div class="auth-modal-content">
            <h3 style="margin-top: 0;">Доступ ограничен</h3>
            <div style="margin-bottom: 15px;">
                <input type="text" id="authLogin" class="auth-input" placeholder="Логин">
                <input type="password" id="authPassword" class="auth-input" placeholder="Пароль">
            </div>
            <button id="authSubmit" class="auth-btn">Войти</button>
            <button id="getAccess" class="get-access-btn">Получить доступ</button>
            <div id="authError" class="error-message">Неверный логин или пароль!</div>
        </div>
    `;

    document.body.prepend(modal);
    document.body.style.overflow = 'hidden';

    document.getElementById('authSubmit').addEventListener('click', function() {
        const login = document.getElementById('authLogin').value;
        const password = document.getElementById('authPassword').value;
        
        const isValid = credentials.some(cred => 
            cred.login === login && cred.password === password
        );

        if (isValid) {
            sessionStorage.setItem('auth_passed', 'true');
            document.body.removeChild(modal);
            document.body.style.overflow = '';
            location.reload(); // Перезагружаем страницу после успешной авторизации
        } else {
            document.getElementById('authError').style.display = 'block';
        }
    });

    document.getElementById('getAccess').addEventListener('click', function() {
        window.location.href = 'contact.html';
    });
}

// Проверяем авторизацию при загрузке страницы
document.addEventListener('DOMContentLoaded', async function() {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated) {
        // Блокируем доступ к контенту
        document.querySelector('.content-container')?.style.display = 'none';
    }
});
