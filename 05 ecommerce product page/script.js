// Fetch products from API
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const productCatalog = document.getElementById('product-catalog');

    // Generate product cards dynamically
    data.forEach(product => {
      const card = createProductCard(product);
      productCatalog.appendChild(card);
    });
  });

// Create product card
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h4>${product.title}</h4>
    <p>Price: $${product.price}</p>
    <button class="add-to-cart-btn">Add to Cart</button>
  `;

  // Add event listener to 'Add to Cart' button
  const addToCartButton = card.querySelector('.add-to-cart-btn');
  addToCartButton.addEventListener('click', () => addToCart(product));

  return card;
}

// Add product to cart
function addToCart(product) {
  const cartItems = document.getElementById('cart-items');
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h4>${product.title}</h4>
    <p>Price: $${product.price}</p>
  `;
  cartItems.appendChild(cartItem);
}

// Display cart modal
const cartModal = document.getElementById('cart-modal');
const closeBtn = cartModal.querySelector('.close');
const checkoutBtn = cartModal.querySelector('#checkout-btn');

closeBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

checkoutBtn.addEventListener('click', () => {
  // Implement checkout functionality here
  // This event handler can be replaced with the desired functionality
  alert('Checkout function to be implemented.');
});

// Show cart modal when cart icon is clicked
document.getElementById('cart-icon').addEventListener('click', () => {
  cartModal.style.display = 'block';
});
