const user = JSON.parse(localStorage.getItem("currentUser"));

// если не авторизован
if (!user) {
    alert("Сначала войдите в систему!");
    window.location.href = "login.html";
}

// проверка роли (для админ страницы)
function checkAdmin() {
    if (!user || user.role !== "admin") {
        alert("Доступ только для администратора!");
        window.location.href = "index.html";
    }
}