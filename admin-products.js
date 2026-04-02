window.addEventListener("DOMContentLoaded", () => {

    let products = JSON.parse(localStorage.getItem("products")) || [];

    const container = document.getElementById("products");

    function renderProducts() {
        container.innerHTML = "";

        products.forEach((p, index) => {

            const div = document.createElement("div");
            div.classList.add("card");

            div.innerHTML = `
                <img src="${p.image}" width="100">
                <h3>${p.name}</h3>
                <p>${p.price} тг</p>
                <button onclick="deleteProduct(${index})">Удалить</button>
            `;

            container.appendChild(div);
        });
    }

    window.addProduct = function() {

        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const image = document.getElementById("image").value;
        const description = document.getElementById("description")?.value || "";

        const newProduct = {
            id: Date.now(),
            name,
            price,
            image,
            description
        };

        products.push(newProduct);

        localStorage.setItem("products", JSON.stringify(products));

        renderProducts();

        alert("Товар добавлен!");
    }

    window.deleteProduct = function(index) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        renderProducts();
    }

    renderProducts();
});