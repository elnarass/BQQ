document.getElementById("orderForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Корзина пуста!");
        return;
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
        id: Date.now(),
        items: cart,
        date: new Date().toLocaleString(),
        status: "Принят"
    };

    orders.push(newOrder);

    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart");

    alert("Заказ успешно оформлен 🎉");

    window.location.href = "index.html";

});