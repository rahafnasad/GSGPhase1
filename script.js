const products = [
    { name: "Office Desk", category: "Furniture", price: 199.99 },
    { name: "Gaming Chair", category: "Furniture", price: 129.99 },
    { name: "Smart Watch", category: "Accessories", price: 249.99 },
    { name: "Backpack", category: "Accessories", price: 49.99 },
    { name: "Gel Pen", category: "Accessories", price: 3.99 }
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
  