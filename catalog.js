let cart = [];

// Add item to cart
function addToCart(name, price) {
  let item = cart.find(i => i.name === name);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  renderCart();
}

// Render cart
function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    cartContainer.innerHTML += `
      <div class="cart-item">
        <p>${item.name} x${item.qty}</p>
        <p>₦${item.price * item.qty}</p>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: ₦" + total;
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  document.getElementById("payment-modal").style.display = "block";
}

// Confirm payment (dummy flow)
function confirmPayment() {
  alert("Payment Successful 🎉");

  cart = [];
  renderCart();

  closeModal();
}

// Close modal
function closeModal() {
  document.getElementById("payment-modal").style.display = "none";
}