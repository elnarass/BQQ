// РЕГИСТРАЦИЯ
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = { name, email, password, role };

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Регистрация успешна!");

        window.location.href = "login.html";
    });
}

// ВХОД
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            alert("Неверный логин или пароль");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));

        alert("Вы вошли!");

        window.location.href = "index.html";
    });
}