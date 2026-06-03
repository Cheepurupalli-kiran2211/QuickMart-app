// ==========================================================================
// 1. DATA ARRAY - 40 PRODUCTS
// ==========================================================================
const products = [
    { id: 1, name: "Fresh Apples", price: 120, category: "fruits", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400", fallback: "🍎" },
    { id: 2, name: "Organic Bananas", price: 60, category: "fruits", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400", fallback: "🍌" },
    { id: 3, name: "Sweet Oranges", price: 80, category: "fruits", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400", fallback: "🍊" },
    { id: 4, name: "Fresh Strawberries", price: 160, category: "fruits", image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400", fallback: "🍓" },
    { id: 5, name: "Green Grapes", price: 90, category: "fruits", image: "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=400", fallback: "🍇" },
    { id: 6, name: "Ripe Mangoes", price: 150, category: "fruits", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400", fallback: "🥭" },
    { id: 7, name: "Fresh Watermelon", price: 70, category: "fruits", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400", fallback: "🍉" },
    { id: 8, name: "Juicy Pineapples", price: 85, category: "fruits", image: "https://images.unsplash.com/photo-1589614996451-32a1dbdf9431?w=400", fallback: "🍍" },
    { id: 9, name: "Fresh Pomegranates", price: 180, category: "fruits", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400", fallback: "🍎" },
    { id: 10, name: "Kiwi Fruit Box", price: 110, category: "fruits", image: "https://images.unsplash.com/photo-1585059895524-72359e061381?w=400", fallback: "🥝" },
    { id: 11, name: "Fresh Milk Packet", price: 60, category: "dairy", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400", fallback: "🥛" },
    { id: 12, name: "Amul Cheese Blocks", price: 140, category: "dairy", image: "https://images.unsplash.com/photo-1552763427-4d1e2e604f32?w=400", fallback: "🧀" },
    { id: 13, name: "Amul Butter", price: 55, category: "dairy", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400", fallback: "🧈" },
    { id: 14, name: "Fresh Paneer", price: 100, category: "dairy", image: "https://images.unsplash.com/photo-1528498033053-156f503ae0aa?w=400", fallback: "🥛" },
    { id: 15, name: "Thick Curd/Yogurt", price: 45, category: "dairy", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400", fallback: "🥛" },
    { id: 16, name: "Fresh Whipping Cream", price: 190, category: "dairy", image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400", fallback: "🍦" },
    { id: 17, name: "Pure Cow Ghee", price: 350, category: "dairy", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400", fallback: "🍯" },
    { id: 18, name: "Flavored Milk Bottle", price: 35, category: "dairy", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400", fallback: "🍼" },
    { id: 19, name: "Condensed Milk", price: 125, category: "dairy", image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400", fallback: "🥛" },
    { id: 20, name: "Mozzarella Cheese", price: 165, category: "dairy", image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=400", fallback: "🧀" },
    { id: 21, name: "Coca Cola Can", price: 40, category: "drinks", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400", fallback: "🥤" },
    { id: 22, name: "Sprite Lime", price: 40, category: "drinks", image: "https://images.unsplash.com/photo-1625772290748-160b2329984f?w=400", fallback: "🥤" },
    { id: 23, name: "Orange Fruit Juice", price: 99, category: "drinks", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400", fallback: "🍹" },
    { id: 24, name: "Chilled Energy Drink", price: 110, category: "drinks", image: "https://images.unsplash.com/photo-1622543953490-0b7027fb77b4?w=400", fallback: "⚡" },
    { id: 25, name: "Cold Coffee", price: 70, category: "drinks", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400", fallback: "☕" },
    { id: 26, name: "Mineral Water Bottle", price: 20, category: "drinks", image: "https://images.unsplash.com/photo-1608885898957-a599fb18de37?w=400", fallback: "🍼" },
    { id: 27, name: "Iced Lemon Tea", price: 50, category: "drinks", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400", fallback: "🍹" },
    { id: 28, name: "Mango Lassi", price: 45, category: "drinks", image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400", fallback: "🥛" },
    { id: 29, name: "Jeera Masala Soda", price: 30, category: "drinks", image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400", fallback: "🥤" },
    { id: 30, name: "Tender Coconut Water", price: 60, category: "drinks", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400", fallback: "🥥" },
    { id: 31, name: "Classic Potato Chips", price: 30, category: "snacks", image: "https://images.unsplash.com/photo-1566478431377-9f15d6840786?w=400", fallback: "🥔" },
    { id: 32, name: "Chocolate Cookies", price: 50, category: "snacks", image: "https://images.unsplash.com/photo-1499636136210-6f4ce9127154?w=400", fallback: "🍪" },
    { id: 33, name: "Salted Crunchy Peanuts", price: 40, category: "snacks", image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=400", fallback: "🥜" },
    { id: 34, name: "Spicy Nacho Chips", price: 60, category: "snacks", image: "https://images.unsplash.com/photo-1518047601542-79f18c655718?w=400", fallback: "🍿" },
    { id: 35, name: "Instant Cup Noodles", price: 45, category: "snacks", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400", fallback: "🍜" },
    { id: 36, name: "Buttery Popcorn", price: 80, category: "snacks", image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400", fallback: "🍿" },
    { id: 37, name: "Spicy Mixture Namkeen", price: 35, category: "snacks", image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=400", fallback: "🍿" },
    { id: 38, name: "Roasted Cashews", price: 250, category: "snacks", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400", fallback: "🥜" },
    { id: 39, name: "Dark Chocolate Bar", price: 90, category: "snacks", image: "https://images.unsplash.com/photo-1549007994-cb92ca817bc7?w=400", fallback: "🍫" },
    { id: 40, name: "Crispy Rice Crackers", price: 75, category: "snacks", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bb087?w=400", fallback: "🫓" }
];

// ==========================================================================
// 2. DYNAMIC PRODUCTS RENDER FUNCTION
// ==========================================================================
const productsContainer = document.getElementById('products-container');
let wishlist = [];
let cart = [];

function displayProducts(productsList) {
    if (!productsContainer) return;
    productsContainer.innerHTML = "";
    
    productsList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-category', product.category);
        card.setAttribute('data-id', product.id);
        
        const isWishlisted = wishlist.some(item => item.id === product.id);
        const heartIcon = isWishlisted ? "❤️" : "🤍";

        card.innerHTML = `
            <div class="img-wrapper" style="width:100%; height:180px; position:relative; overflow:hidden; border-radius:8px;">
                <img src="${product.image}" alt="${product.name}" loading="lazy" referrerpolicy="no-referrer"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                    style="width:100%; height:100%; object-fit:cover;">
                <div class="emoji-fallback" style="display:none; width:100%; height:100%; background:#f3f4f6; justify-content:center; align-items:center; font-size:60px;">
                    ${product.fallback}
                </div>
                <button class="wishlist-btn" style="position:absolute; top:10px; right:10px; background:white; border:none; border-radius:50%; width:35px; height:35px; font-size:18px; cursor:pointer; display:flex; justify-content:center; align-items:center; box-shadow:0 2px 5px rgba(0,0,0,0.2); z-index:10;">
                    ${heartIcon}
                </button>
            </div>
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
        `;
        productsContainer.appendChild(card);
    });
}

displayProducts(products);

// ==========================================================================
// 3. DARK MODE LOGIC
// ==========================================================================
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeToggleBtn) themeToggleBtn.textContent = '☀️ Light Mode';
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        let theme = 'light';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark';
            themeToggleBtn.textContent = '☀️ Light Mode';
        } else {
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }
        localStorage.setItem('theme', theme);
    });
}

// ==========================================================================
// 4. CATEGORY FILTER LOGIC
// ==========================================================================
const filterButtons = document.querySelectorAll('.categories button');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            const productCards = document.getElementsByClassName('card');

            Array.from(productCards).forEach(card => {
                const productCategory = card.getAttribute('data-category') || '';
                if (filterValue === 'all' || productCategory === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ==========================================================================
// 5. LIVE SEARCH FILTER
// ==========================================================================
const searchInput = document.getElementById('search');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase().trim();
        const productCards = document.getElementsByClassName('card');

        Array.from(productCards).forEach(card => {
            const productName = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
            if (productName.includes(searchText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// ==========================================================================
// 6. CART & WISHLIST UI LOGIC (పాత మోడల్ కి మ్యాచ్ అయ్యేలా ఫిక్స్డ్!)
// ==========================================================================
const cartCountEl = document.getElementById('cart-count');
const totalPriceEl = document.getElementById('total-price');
const wishlistCountEl = document.getElementById('wishlist-count');

const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const placeOrderBtn = document.getElementById('place-order-btn');
const cartItemsListEl = document.getElementById('cart-items-list');

const wishlistViewBtn = document.getElementById('wishlist-view-btn');
const wishlistModal = document.getElementById('wishlist-modal');
const closeWishlistBtn = document.getElementById('close-wishlist-btn');
const wishlistItemsListEl = document.getElementById('wishlist-items-list');

const modalCountEl = document.getElementById('modal-count');
const modalTotalEl = document.getElementById('modal-total');

// UPDATE CART UI
function updateCartUI() {
    let totalItems = cart.length;
    let totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    if(cartCountEl) cartCountEl.textContent = totalItems;
    if(totalPriceEl) totalPriceEl.textContent = totalPrice;

    if (modalCountEl) modalCountEl.textContent = totalItems;
    if (modalTotalEl) modalTotalEl.textContent = totalPrice;

    if (cartItemsListEl) {
        cartItemsListEl.innerHTML = "";
        if (cart.length === 0) {
            cartItemsListEl.innerHTML = "<p style='color:gray; text-align:center;'>Your cart is empty</p>";
        } else {
            cart.forEach((item, index) => {
                const itemRow = document.createElement('div');
                itemRow.style.display = "flex";
                itemRow.style.justifyContent = "space-between";
                itemRow.style.alignItems = "center";
                itemRow.style.margin = "10px 0";
                itemRow.style.padding = "8px";
                itemRow.style.background = "#f9f9f9";
                itemRow.style.borderRadius = "6px";
                itemRow.style.borderBottom = "1px solid #ddd";

                itemRow.innerHTML = `
                    <div style="text-align:left; color:#333; font-size:14px;">
                        <span style="font-weight:bold;">${item.name}</span> <br>
                        <span style="color:green; font-weight:600;">₹${item.price}</span>
                    </div>
                    <button class="remove-item-btn" data-index="${index}" 
                        style="background:#ff4d4d; color:white; border:none; padding:5px 10px; border-radius:4px; cursor:pointer; font-size:12px; font-weight:bold;">
                        ❌ Remove
                    </button>
                `;
                cartItemsListEl.appendChild(itemRow);
            });
        }
    }
}

// UPDATE WISHLIST UI (విష్‌లిస్ట్ ఐటమ్స్ మోడల్ లో క్లియర్ గా కనిపించడానికి)
function updateWishlistUI() {
    if (wishlistCountEl) wishlistCountEl.textContent = wishlist.length;

    if (wishlistItemsListEl) {
        wishlistItemsListEl.innerHTML = "";
        if (wishlist.length === 0) {
            wishlistItemsListEl.innerHTML = "<p style='color:gray; text-align:center;'>Your wishlist is empty ❤️</p>";
        } else {
            wishlist.forEach((item, index) => {
                const itemRow = document.createElement('div');
                itemRow.style.display = "flex";
                itemRow.style.justifyContent = "space-between";
                itemRow.style.alignItems = "center";
                itemRow.style.margin = "10px 0";
                itemRow.style.padding = "8px";
                itemRow.style.background = "#fff5f5";
                itemRow.style.borderRadius = "6px";
                itemRow.style.borderBottom = "1px solid #ffe0e0";

                itemRow.innerHTML = `
                    <div style="text-align:left; color:#333; font-size:14px; flex:1;">
                        <span style="font-weight:bold;">${item.name}</span> <br>
                        <span style="color:#e63946; font-weight:600;">₹${item.price}</span>
                    </div>
                    <div>
                        <button class="wishlist-to-cart-btn" data-id="${item.id}" style="background:#2ec4b6; color:white; border:none; padding:5px 8px; border-radius:4px; cursor:pointer; font-size:11px; margin-right:5px; font-weight:bold;">🛒 +Cart</button>
                        <button class="wishlist-remove-btn" data-id="${item.id}" style="background:#ff4d4d; color:white; border:none; padding:5px 8px; border-radius:4px; cursor:pointer; font-size:11px; font-weight:bold;">❌ Remove</button>
                    </div>
                `;
                wishlistItemsListEl.appendChild(itemRow);
            });
        }
    }
}

// MASTER EVENT LISTENER (MAIN SCREEN CLICKS)
if (productsContainer) {
    productsContainer.addEventListener('click', (e) => {
        const productCard = e.target.closest('.card');
        if (!productCard) return;
        
        const pId = parseInt(productCard.getAttribute('data-id'));
        const matchedProduct = products.find(p => p.id === pId);
        if (!matchedProduct) return;

        // Add to Cart
        if (e.target.classList.contains('add-to-cart-btn')) {
            cart.push(matchedProduct);
            updateCartUI();
            showToast(`${matchedProduct.name} added to cart! 🛒`);
        }

        // Toggle Wishlist
        if (e.target.classList.contains('wishlist-btn')) {
            const index = wishlist.findIndex(item => item.id === matchedProduct.id);
            if (index === -1) {
                wishlist.push(matchedProduct);
                e.target.textContent = "❤️";
                showToast(`Added to Wishlist! ❤️`);
            } else {
                wishlist.splice(index, 1);
                e.target.textContent = "🤍";
                showToast(`Removed from Wishlist! 🤍`);
            }
            updateWishlistUI();
        }
    });
}

// WISHLIST MODAL CLICKS (+Cart & Remove)
if (wishlistItemsListEl) {
    wishlistItemsListEl.addEventListener('click', (e) => {
        const pId = parseInt(e.target.getAttribute('data-id'));
        if (!pId) return;

        const matchedProduct = products.find(p => p.id === pId);
        const index = wishlist.findIndex(item => item.id === pId);

        if (e.target.classList.contains('wishlist-to-cart-btn')) {
            cart.push(matchedProduct);
            updateCartUI();
            showToast(`${matchedProduct.name} added to cart! 🛒`);
        }

        if (e.target.classList.contains('wishlist-remove-btn')) {
            if (index !== -1) wishlist.splice(index, 1);
            showToast(`Removed from Wishlist! ❌`);
        }
        
        updateWishlistUI();
        displayProducts(products); 
    });
}

// REMOVE FROM CART INSIDE MODAL
if (cartItemsListEl) {
    cartItemsListEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item-btn')) {
            const indexToRemove = parseInt(e.target.getAttribute('data-index'));
            const removedItemName = cart[indexToRemove].name;
            
            cart.splice(indexToRemove, 1);
            updateCartUI();
            showToast(`${removedItemName} removed! ❌`);
        }
    });
}

// OPEN / CLOSE CHECKOUT MODAL (పాత CSS క్లాస్ ని ఆన్/ఆఫ్ చేస్తుంది బ్రో)
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast("Your cart is empty! Add some products first. 🛍️");
            return;
        }
        updateCartUI();
        if (checkoutModal) checkoutModal.classList.add('open');
    });
}
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        if (checkoutModal) checkoutModal.classList.remove('open');
    });
}

// OPEN / CLOSE WISHLIST MODAL
if (wishlistViewBtn) {
    wishlistViewBtn.addEventListener('click', () => {
        updateWishlistUI();
        if (wishlistModal) wishlistModal.classList.add('open'); // పాత క్లాస్ స్టైల్స్ ఓపెన్ చేస్తుంది!
    });
}
if (closeWishlistBtn) {
    closeWishlistBtn.addEventListener('click', () => {
        if (wishlistModal) wishlistModal.classList.remove('open');
    });
}

// PLACE ORDER
if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', () => {
        alert("🎉 Order Placed Successfully! Your items will arrive in minutes.");
        cart = [];
        updateCartUI();
        if (checkoutModal) checkoutModal.classList.remove('open');
    });
}

// TOAST HELPER
function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    if (toastContainer) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 2300);
    }
}