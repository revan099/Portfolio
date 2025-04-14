document.addEventListener("DOMContentLoaded", function () {
    const basketContainer = document.querySelector(".basket");
  
    const product = {
      title: "Product Name",
      category: "Product category",
      price: 50.0,
      count: 0,
    };
  
    const basketItem = document.createElement("div");
    basketItem.className = "basket-item";
    basketItem.innerHTML = `
      <div class="image">
        <img src="https://via.placeholder.com/150" alt="Product Image" />
      </div>
      <h6 class="title">${product.title}</h6>
      <p class="category">${product.category}</p>
      <p class="price" data-price="${product.price}">$${product.price.toFixed(2)}</p>
      <div class="count-area">
        <button class="minus-btn" disabled>-</button>
        <p class="count">${product.count}</p>
        <button class="plus-btn">+</button>
      </div>
      <button class="btn btn-danger remove-btn">Remove</button>
    `;
  
    basketContainer.appendChild(basketItem);
  
    const plusBtn = basketItem.querySelector(".plus-btn");
    const minusBtn = basketItem.querySelector(".minus-btn");
    const countElem = basketItem.querySelector(".count");
    const totalPriceElem = document.querySelector(".total-price");
    const removeBtn = basketItem.querySelector(".remove-btn");
  

    plusBtn.addEventListener("click", () => {
      product.count++;
      countElem.textContent = product.count;
      minusBtn.disabled = product.count === 0;
      updateTotal();
    });
  
    minusBtn.addEventListener("click", () => {
      if (product.count > 0) {
        product.count--;
        countElem.textContent = product.count;
        minusBtn.disabled = product.count === 0;
        updateTotal();
      }
    });
  

    removeBtn.addEventListener("click", () => {
      basketItem.remove();
      product.count = 0;
      updateTotal();
    });
  
    
    function updateTotal() {
      const total = product.price * product.count;
      totalPriceElem.textContent = total.toFixed(2);
    }
  });
  