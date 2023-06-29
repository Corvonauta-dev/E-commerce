const carrinhoString = localStorage.getItem('carrinho');
const carrinhoArray = JSON.parse(carrinhoString);

var carrinho = carrinhoArray;
function renderCart() {
    const itemList = document.getElementById("item-list");
    itemList.innerHTML = "";

    let totalAmount = 0;

    carrinho.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="product">
                <img src="${item.img}" alt="Produto 1">
            </div>
            <span>${item.name} (R$ ${item.price.toFixed(2)})</span>
            <div>
                <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                <button class="delete-btn" data-id="${item.id}">Excluir</button>
            </div>
        `;
        itemList.appendChild(li);

        totalAmount += item.price * item.quantity;
    });

    const totalAmountElement = document.getElementById("total-amount");
    totalAmountElement.textContent = totalAmount.toFixed(2);
}

function updateQuantity(itemId, action) {
    const item = carrinho.find(item => item.id === itemId);

    if (item) {
        if (action === "increase") {
            item.quantity++;
        } else if (action === "decrease" && item.quantity > 1) {
            item.quantity--;
        }

        renderCart();
    }
}

function deleteItem(itemId) {
    const itemIndex = carrinho.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
        carrinho.splice(itemIndex, 1);
        renderCart();
    }
}

function applyCoupon() {
    const couponInput = document.getElementById("coupon-input");
    const couponCode = couponInput.value.trim();

    if (couponCode === "UTFPR") {
        const totalAmountElement = document.getElementById("total-amount");
        const totalAmount = parseFloat(totalAmountElement.textContent);

        const discountedAmount = totalAmount * 0.85;

        totalAmountElement.textContent = discountedAmount.toFixed(2);
    }
    console.log(window.minhaVariavel.value);
    couponInput.value = "";
}

function checkout() {
    alert("Compra finalizada com sucesso!");
    carrinho = [];
    localStorage.clear();
    renderCart();
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("quantity-btn")) {
        const itemId = parseInt(event.target.dataset.id);
        const action = event.target.dataset.action;
        updateQuantity(itemId, action);
    }
});

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        const itemId = parseInt(event.target.dataset.id);
        deleteItem(itemId);
    }
});

const applyCouponBtn = document.getElementById("apply-coupon-btn");
applyCouponBtn.addEventListener("click", applyCoupon);

const checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", checkout);

renderCart();