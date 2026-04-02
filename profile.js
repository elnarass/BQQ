const orders = JSON.parse(localStorage.getItem("orders")) || [];
const container = document.getElementById("orders");

if (orders.length === 0) {
    container.innerHTML = "<p>У вас пока нет заказов</p>";
} else {

    orders.forEach((order, index) => {

        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
        <h3>Заказ №${order.id}</h3>
        <p>Дата: ${order.date}</p>
        <p>Статус: <b>${order.status}</b></p>
        <p>Товаров: ${order.items.length}</p>
    `;

        container.appendChild(div);
    });

}
function nextStatus(index) {

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

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

    location.reload();
}