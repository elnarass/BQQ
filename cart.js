let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

function renderCart() {

    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h2>${item.name}</h2>
            <p>${item.price} тг</p>
            <button onclick="removeItem(${index})">Өшіру</button>
        `;

        container.appendChild(div);
    });

    totalElement.innerText = "Жалпы: " + total + " тг";
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    cart = [];
    renderCart();
}

renderCart();
function goToCheckout() {
    window.location.href = "checkout.html";
}