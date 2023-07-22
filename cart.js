function updateCartCount() {
    const cartIcon = document.querySelector(".fa-shopping-cart");
    if (cartIcon) {
      cartIcon.dataset.count = getCartCount();
    }
  }
  
  function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
      name: "Description 2", // Replace this with the actual product name
      price: '$9.99', // Replace this with the actual product price
      description: "Product Description", // Replace this with the actual product description
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }
  
  function handleAddToCartButtonClick() {
    addToCart();
  }
  
  function getCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.length;
  }
  
  // Call this function to initialize the cart count when the page loads
  updateCartCount();
  // Function to clear cart data from local storage
function clearCartData() {
  localStorage.removeItem('cartItems');
}

// Assume you have a logout button with an event listener
const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', () => {
  // Call the function to clear cart data when the user logs out
  clearCartData();
  // Redirect the user to the login page or home page
  window.location.href = 'login.html'; // Replace 'login.html' with your actual login page URL
});
