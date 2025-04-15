const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      description: "The latest iPhone with A17 Bionic chip.",
      price: 1299,
      image: "https://example.com/iphone15pro.jpg"
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      description: "High-end Android phone with amazing camera.",
      price: 1199,
      image: "https://example.com/galaxys24.jpg"
    },
    {
      id: 3,
      name: "Google Pixel 8",
      description: "Pure Android experience with best-in-class AI.",
      price: 999,
      image: "https://example.com/pixel8.jpg"
    }
  ];
  
  function fetchProductById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = products.find(p => p.id === parseInt(id));
        if (product) {
          resolve(product);
        } else {
          reject("Product not found");
        }
      }, 500);
    });
  }
  
  const productContainer = document.querySelector(".product-container");
  
  function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }
  
  function renderProduct(product) {
    productContainer.innerHTML = `
      <div class="col-md-6 offset-md-3">
        <div class="card mt-5 shadow-lg">
          <img src="${product.image}" class="card-img-top" alt="${product.name}" />
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <h4 class="text-primary">$${product.price}</h4>
            <button class="btn btn-success mt-3" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  }
  
  function addToCart(productId) {
    const selectedProduct = products.find(p => p.id === productId);
    if (selectedProduct) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(selectedProduct);
      localStorage.setItem("cart", JSON.stringify(cart));
  
      Toastify({
        text: `${selectedProduct.name} added to cart!`,
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#28a745"
      }).showToast();
    }
  }
  
  async function loadProductDetail() {
    const id = getProductIdFromURL();
    if (!id) {
      productContainer.innerHTML = "<p class='text-danger'>Product ID not specified.</p>";
      return;
    }
  
    try {
      const product = await fetchProductById(id);
      renderProduct(product);
    } catch (error) {
      productContainer.innerHTML = `<p class="text-danger">${error}</p>`;
    }
  }
  
  loadProductDetail();
  