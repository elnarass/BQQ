let orders = JSON.parse(localStorage.getItem("orders")) || [];

const container = document.getElementById("orders");

function renderOrders() {

    container.innerHTML = "";

    if (orders.length === 0) {
        container.innerHTML = "<p>Заказов пока нет</p>";
        return;
    }

    orders.forEach((order, index) => {

        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>Заказ №${order.id}</h3>
            <p>Дата: ${order.date}</p>
            <p>Статус: <b>${order.status}</b></p>
            <p>Товаров: ${order.items.length}</p>

            <button onclick="nextStatus(${index})">Изменить статус</button>
            <button onclick="deleteOrder(${index})">Удалить</button>
        `;

        container.appendChild(div);
    });
}

function nextStatus(index) {

    const statuses = [
        "Принят",
        "Готовится",
        "В доставке",
        "Доставлен"
    ];

    let currentIndex = statuses.indexOf(orders[index].status);

    if (currentIndex < statuses.length - 1) {
        orders[index].status = statuses[currentIndex + 1];
    }

    localStorage.setItem("orders", JSON.stringify(orders));
    renderOrders();
}

function deleteOrder(index) {
    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    renderOrders();
}

renderOrders();