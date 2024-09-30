const products = [
    { name: "Smartphone", category: "Electronics", price: 299.99 },
    { name: "Laptop", category: "Electronics", price: 799.99 },
    { name: "T-Shirt", category: "Clothing", price: 19.99 },
    { name: "Headphones", category: "Electronics", price: 49.99 },
    { name: "Jeans", category: "Clothing", price: 39.99 }
  ];
  
  const productList = document.getElementById("product-list");
  const filterButtons = document.querySelectorAll(".filter-btn");
  
  // Function to create product HTML
  function displayProducts(filteredProducts) {
    productList.innerHTML = ""; // Clear current products
    filteredProducts.forEach((product) => {
      const productCard = `
        <div class="product-card">
          <h2>${product.name}</h2>
          <p>${product.category}</p>
          <p class="price">$${product.price.toFixed(2)}</p>
        </div>
      `;
      productList.innerHTML += productCard;
    });
  }
  
  // Display all products initially
  displayProducts(products);
  
  // Event listeners for filtering products
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const filter = e.target.dataset.filter;
      if (filter === "all") {
        displayProducts(products);
      } else {
        const filteredProducts = products.filter(product => product.category === filter);
        displayProducts(filteredProducts);
      }
    });
  });
  