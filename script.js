// 1. DATABASE ARRAY
const productsData = [
    {
        id: 1,
        name: "Fresh Apples",
        price: 120,
        category: "fruits",
        image: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 2,
        name: "Milk",
        price: 35,
        category: "dairy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFuaK8aigwxpe4a1GQgwHhJ5fLVdIo6X7bA&s"
    },
    {
        id: 3,
        name: "Bread",
        price: 40,
        category: "dairy",
        image: "https://static.vecteezy.com/system/resources/thumbnails/062/933/370/small/golden-brown-crust-white-bread-loaf-with-soft-interior-close-up-photo.jpg"
    }
];

// 🌟 UPDATED: Modatisaari page open chesinappudu, browser storage lo data unte theesuko, lekapothe 0 unchu.
let count = Number(localStorage.getItem("quickCartCount")) || 0;
let total = Number(localStorage.getItem("quickCartTotal")) || 0;

const cart = document.getElementById("cart-count");
const totalPrice = document.getElementById("total-price");
const toastContainer = document.getElementById("toast-container");
const productsContainer = document.getElementById("products-container");

// Screen refresh avvagane patha values ni print chesthunnam
cart.textContent = count;
totalPrice.textContent = total;

// Checkout Selectors
const checkoutBtn = document.getElementById("checkout-btn");
const checkoutModal = document.getElementById("checkout-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const placeOrderBtn = document.getElementById("place-order-btn");
const modalCount = document.getElementById("modal-count");
const modalTotal = document.getElementById("modal-total");

// FUNCTION: Products Render Element
function renderProducts(productsList) {
    productsContainer.innerHTML = ""; 
    productsList.forEach(product => {
        const cardHTML = `
            <div class="card product-card" data-category="${product.category}">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button data-price="${product.price}" class="add-btn">Add to Cart</button>
                <button class="remove-btn" data-price="${product.price}">Remove</button>
            </div>
        `;
        productsContainer.innerHTML += cardHTML;
    });
}
renderProducts(productsData);

// 🌟 NEW FUNCTION: Browser storage loki updates ni sync chese helper mechanism
function updateStorage() {
    localStorage.setItem("quickCartCount", count);
    localStorage.setItem("quickCartTotal", total);
}

// Function to Show Toast Alert
function showToast(message) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = message;
    toastContainer.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 2300);
}

// Event Delegation for Add/Remove
productsContainer.addEventListener("click", (e) => {
    let productName = e.target.closest(".product-card").querySelector("h3").textContent;

    if (e.target.classList.contains("add-btn")) {
        count++;
        cart.textContent = count;
        total += Number(e.target.dataset.price);
        totalPrice.textContent = total;
        
        updateStorage(); // 🌟 Sync memory values
        showToast(`🎉 ${productName} added to cart!`);
    }

    if (e.target.classList.contains("remove-btn")) {
        let price = Number(e.target.dataset.price) || 0; 
        if (count > 0) {
            count--;
            cart.textContent = count;
            total -= price;
            if (total < 0) total = 0; 
            totalPrice.textContent = total;
            
            updateStorage(); // 🌟 Sync memory values
            showToast(`❌ ${productName} removed!`);
        }
    }
});

// Search Logic
const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", () => {
    let value = searchInput.value.toLowerCase();
    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach(product => {
        let name = product.querySelector("h3").textContent.toLowerCase();
        if (name.includes(value)) { product.style.display = ""; } 
        else { product.style.display = "none"; }
    });
});

// Category Filtering Logic
const categoryButtons = document.querySelectorAll(".categories button");
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".categories button.active").classList.remove("active");
        button.classList.add("active");

        let selectedCategory = button.dataset.filter;
        const productCards = document.querySelectorAll(".product-card");
        productCards.forEach(product => {
            let productCategory = product.dataset.category;
            if (selectedCategory === "all" || selectedCategory === productCategory) { product.style.display = ""; } 
            else { product.style.display = "none"; }
        });
    });
});

// --- CHECKOUT POPUP SYSTEM ---
checkoutBtn.addEventListener("click", () => {
    if (count === 0) {
        showToast("⚠️ Your cart is empty! Add items first.");
        return;
    }
    modalCount.textContent = count;
    modalTotal.textContent = total;
    checkoutModal.classList.add("open");
});

closeModalBtn.addEventListener("click", () => {
    checkoutModal.classList.remove("open");
});

placeOrderBtn.addEventListener("click", () => {
    checkoutModal.classList.remove("open");
    showToast("🚀 Order Placed Successfully! Thank you.");
    
    count = 0;
    total = 0;
    cart.textContent = count;
    totalPrice.textContent = total;
    
    updateStorage(); // 🌟 Reset storage values on successful checkout
});