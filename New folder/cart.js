function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const quantity = item.quantity || 1;
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <div class="item-details">
        <img src="${item.image}" alt="${item.name}" />
        <div>
          <div class="item-name">${item.name} <small>(x${quantity})</small></div>
          <div>$${item.price}</div>
        </div>
      </div>
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(itemEl);
    total += parseFloat(item.price) * quantity;
  });

  totalPriceEl.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}
