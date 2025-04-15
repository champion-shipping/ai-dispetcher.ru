function checkAuth() {
    const sessionToken = localStorage.getItem('sessionToken');
    
    if (!sessionToken) {
        window.location.href = 'login.html';
        return null;
    }
    
    try {
        const sessionData = JSON.parse(atob(sessionToken));
        
        // Проверка срока действия сессии (24 часа)
        if (Date.now() > sessionData.expires) {
            localStorage.removeItem('sessionToken');
            window.location.href = 'login.html';
            return null;
        }
        
        return sessionData.username;
    } catch (e) {
        localStorage.removeItem('sessionToken');
        window.location.href = 'login.html';
        return null;
    }
}

function logout() {
    localStorage.removeItem('sessionToken');
    window.location.href = 'login.html';
}
