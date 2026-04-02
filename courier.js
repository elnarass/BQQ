const user = JSON.parse(localStorage.getItem("currentUser"));

if (!user || user.role !== "courier") {
    alert("Только для курьера!");
    window.location.href = "index.html";
}

let orders = JSON.parse(localStorage.getItem("orders")) || [];

const container = document.getElementById("courier-orders");

function renderOrders() {
    container.innerHTML = "";

    const deliveryOrders = orders.filter(o => o.status === "В доставке");

    if (deliveryOrders.length === 0) {
        container.innerHTML = "<p>Нет заказов для доставки</p>";
        return;
    }

    deliveryOrders.forEach((order, index) => {

        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>Заказ №${order.id}</h3>
            <p>Адрес: ${order.address}</p>
            <p>Время: ${order.time}</p>
            <p>Статус: ${order.status}</p>

            <button onclick="finishOrder(${index})">Доставлено</button>
        `;

        container.appendChild(div);
    });
}

function finishOrder(index) {

    const deliveryOrders = orders.filter(o => o.status === "В доставке");

    const orderId = deliveryOrders[index].id;

    const realIndex = orders.findIndex(o => o.id === orderId);

    orders[realIndex].status = "Доставлен";

    localStorage.setItem("orders", JSON.stringify(orders));

    renderOrders();
}

renderOrders();