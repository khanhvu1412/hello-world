let listProduct = ["Sony Xperia", "SamSung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4"];

function renderProduct() {
    let html = "";

    for (let i = 0; i < listProduct.length; i++) {
        html += `
            <div class="row">
                <span>${listProduct[i]}</span>
                <div class="actions">
                    <button onclick="editProduct(${i})">Edit</button>
                    <button onclick="deleteProduct(${i})">Delete</button>
                </div>
            </div>
        `
    }
    document.getElementById("productList").innerHTML = html;
}

function addProduct() {
    let value = document.getElementById("productInput").value;
    if (value) {
        listProduct.push(value);
        document.getElementById("productInput").value = "";
        renderProduct();
    }
}

function deleteProduct(index) {
    listProduct.splice(index, 1);
    renderProduct();
}

function editProduct(index) {
    let newName = prompt("Edit name product: ", listProduct[index]);

    if (newName) {
        listProduct[index] = newName;
        renderProduct();
    }
}

renderProduct();