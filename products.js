if (!localStorage.getItem("products")) {
    fetch("catalog.json")
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("products", JSON.stringify(data));
            location.reload();
        });
}
const data = JSON.parse(localStorage.getItem("products")) || [];

const container = document.getElementById("products");

data.forEach(product => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${product.image}" width="250">
        <h2>${product.name}</h2>
        <p>${product.description || ""}</p>
        <p><b>${product.price} тг</b></p>
        <button onclick="addToCart(${product.id})">Сатып алу</button>
    `;

    container.appendChild(card);
});

// сохраняем данные глобально
window.productsData = data;

// функция добавления в корзину
function addToCart(id) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = window.productsData.find(p => Number(p.id) === Number(id));

  if (!product) {
      alert("Ошибка: товар не найден");
      return;
  }

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  console.log(cart);

  alert("Тауар жәшікке салынды 🛒");
}
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
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const userElement = document.getElementById("userName");

if (currentUser && userElement) {
    userElement.innerText = currentUser.name;
}