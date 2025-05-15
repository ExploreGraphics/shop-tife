// -----------------------loader function-----------------------
window.addEventListener("load", () => {
 const loader = document.querySelector(".loader");
 const mainContent = document.querySelector(".main-content");
 // Wait 2.5 seconds before starting the fade-out
 setTimeout(() => {
 // Fade out the loader over 1 second
 loader.style.opacity = 0;
 
 // After fade-out (1s), hide the loader and fade in main content
 setTimeout(() => {
 loader.style.display = "none";
 mainContent.style.opacity = 1;
 }, 1000); // 1 second fade-out duration
 }, 2500); // Loader stays visible for 2.5 seconds before fade-out starts
});
 
 // --------------navbar--------------
 document.addEventListener("DOMContentLoaded", () => {
 const navToggle = document.querySelector(".nav-toggle");
 const navMenu = document.getElementById("navMenu");
 
 navToggle.addEventListener("click", () => {
 navMenu.classList.toggle("active");
 navToggle.classList.toggle("active");
 });
 });
 
// ---------------categories----------------
document.addEventListener("DOMContentLoaded", () => {
 // Select all category buttons
 const categoryButtons = document.querySelectorAll(".category-btn");
 // Select all product containers (each with class "products")
 const productContainers = document.querySelectorAll(".products");
 
 // Function to filter products by category
 function filterProducts(category) {
 productContainers.forEach(product => {
 // Get the inner product card's data-category value
 const card = product.querySelector('.product-card');
 if (!card) {
 console.error("No product card found in:", product);
 return;
 }
 const productCategory = card.getAttribute('data-category');
 if (productCategory === category) {
 product.style.display = "";
 } else {
 product.style.display = "none";
 }
 });
 }
 
 
 // Event listeners for the category buttons
 categoryButtons.forEach(btn => {
 btn.addEventListener("click", () => {
 // Remove the active class from all buttons
 categoryButtons.forEach(b => b.classList.remove("active"));
 // Add the active class to the clicked button
 btn.classList.add("active");
 
 // Get the selected category from the button's data attribute
 const category = btn.getAttribute("data-category");
 // Filter products accordingly
 filterProducts(category);
 });
 });
 
 // On page load, show only products in the "hot" category
 filterProducts("hot");
 });
 
 
// -------------- countdown section -------------
document.addEventListener("DOMContentLoaded", () => {
 // Grab references to the DOM elements
 const daysEl = document.getElementById("days");
 const hoursEl = document.getElementById("hours");
 const minutesEl = document.getElementById("minutes");
 const secondsEl = document.getElementById("seconds");
 
 // Set a future date/time to count down to
 // Adjust this to your desired end date/time
 const countdownDate = new Date("June 5, 2025 00:00:00").getTime();
 
 // Update the countdown every second
 const timer = setInterval(() => {
 const now = new Date().getTime();
 const distance = countdownDate - now;
 
 // If the countdown is finished, clear the interval and set to 0
 if (distance < 0) {
 clearInterval(timer);
 daysEl.textContent = "00";
 hoursEl.textContent = "00";
 minutesEl.textContent = "00";
 secondsEl.textContent = "00";
 return;
 }
 
 // Calculate remaining days, hours, minutes, and seconds
 const days = Math.floor(distance / (1000 * 60 * 60 * 24));
 const hours = Math.floor(
 (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
 );
 const minutes = Math.floor(
 (distance % (1000 * 60 * 60)) / (1000 * 60)
 );
 const seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
 daysEl.textContent = days < 10 ? "0" + days : days;
 hoursEl.textContent = hours < 10 ? "0" + hours : hours;
 minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
 secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
 }, 1000);
 // -------------- Add to Cart Functionality ----------------
document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy-btn");

  buyButtons.forEach(button => {
    button.addEventListener("click", function () {
      const productCard = this.closest(".product-card");

      if (!productCard) return;

      const product = {
        name: productCard.querySelector(".product-name")?.textContent.trim() || "Unnamed",
        price: productCard.querySelector(".product-price")?.textContent.trim() || "0",
        image: productCard.querySelector("img")?.src || "",
        id: productCard.getAttribute("data-id") || Date.now().toString(), // optional ID for duplicate handling
      };

      addToCart(product);
    });
  });

  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Optional: Check if item already exists (by id), then update quantity or skip
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      alert(`${product.name} is already in your cart.`);
      return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.name} has been added to your cart!`);
  }
});

 });
 
 
 

