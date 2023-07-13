const apiUrl = "https://fakestoreapi.com/products";
const productsContainer = document.getElementById("products");

// Fetch products from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(products => displayProducts(products))
  .catch(error => console.log("Error fetching products:", error));

// Display products in the UI
function displayProducts(products) {
  let html = "";

  products.forEach(product => {
    html += `
      <div class="product">
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.price} $</p>
      </div>
    `;
  });

  productsContainer.innerHTML = html;
}
