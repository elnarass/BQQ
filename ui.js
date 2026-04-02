function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
  
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        overlay.style.display = "none";
    } else {
        sidebar.style.left = "0px";
        overlay.style.display = "block";
    }
  }
  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
function toggleUserMenu() {
    const menu = document.getElementById("userMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
window.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const adminLink = document.getElementById("adminLink");

    if (adminLink && currentUser && currentUser.role !== "admin") {
        adminLink.style.display = "none";
    }
});

