/* ==========================================================================
   QUICKMART MAIN JAVASCRIPT ENGINE (FULLY OPTIMIZED WITH LIVE LOGOUT)
   ========================================================================== */

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

const productsContainer = document.getElementById('products-container');
let isSignUpMode = true; 

function initDynamicAuth() {
    const authScreen = document.getElementById('qm-auth-screen');
    if (!authScreen) return;

    if (localStorage.getItem('qm-logged-in') === 'true') {
        authScreen.style.display = 'none';
    } else {
        authScreen.style.display = 'flex';
    }

    const titleEl = document.getElementById('auth-title');
    const subtitleEl = document.getElementById('auth-subtitle');
    const submitBtn = document.getElementById('auth-submit-btn');
    const switchLink = document.getElementById('auth-switch-link');
    const errBox = document.getElementById('auth-error');

    if (switchLink) {
        switchLink.onclick = () => {
            isSignUpMode = !isSignUpMode;
            errBox.style.display = 'none';
            
            if (isSignUpMode) {
                titleEl.textContent = "Create Account, Bro!";
                subtitleEl.textContent = "Set your custom username and password to start shopping.";
                submitBtn.textContent = "Sign Up Now 🚀";
                switchLink.textContent = "Already have an account? Login";
            } else {
                titleEl.textContent = "Welcome Back, Bro!";
                subtitleEl.textContent = "Enter your custom details to log back into your store.";
                submitBtn.textContent = "Sign In Securely 🔒";
                switchLink.textContent = "New here? Create an account";
            }
        };
    }

    if (submitBtn) {
        submitBtn.onclick = () => {
            const usernameInput = document.getElementById('auth-user').value.trim();
            const passwordInput = document.getElementById('auth-pass').value.trim();

            if (!usernameInput || !passwordInput) {
                errBox.textContent = "Fields can't be empty, bro!";
                errBox.style.display = 'block';
                return;
            }

            if (isSignUpMode) {
                localStorage.setItem('qm-custom-user', usernameInput.toLowerCase());
                localStorage.setItem('qm-custom-pass', passwordInput);
                
                isSignUpMode = false;
                titleEl.textContent = "Welcome Back, Bro!";
                subtitleEl.textContent = "Account Created! Now sign in with your custom details.";
                submitBtn.textContent = "Sign In Securely 🔒";
                switchLink.textContent = "New here? Create an account";
                
                document.getElementById('auth-user').value = "";
                document.getElementById('auth-pass').value = "";
                errBox.style.display = 'none';
                showToast("Account Created! Now Log In, Bro! 🎉");
            } else {
                const savedUser = localStorage.getItem('qm-custom-user');
                const savedPass = localStorage.getItem('qm-custom-pass');

                if (usernameInput.toLowerCase() === savedUser && passwordInput === savedPass) {
                    errBox.style.display = 'none';
                    localStorage.setItem('qm-logged-in', 'true');
                    authScreen.style.display = 'none';
                    showToast(`Welcome back, ${usernameInput}! 👋`);
                } else {
                    errBox.textContent = "Invalid username or password credentials, bro!";
                    errBox.style.display = 'block';
                }
            }
        };
    }

    // NEW LOGOUT TRIGGERS: Direct storage eraser setup wrapper
    const logoutBtn = document.getElementById('logout-btn');
    if(logoutBtn) {
        logoutBtn.onclick = () => {
            localStorage.removeItem('qm-logged-in'); // Removes active bypass token only
            showToast("Logged out securely! 👋");
            setTimeout(() => location.reload(), 800); // Dynamic page reloader
        };
    }
}

// LocalStorage Configurations for Arrays
let wishlist = JSON.parse(localStorage.getItem('qm-wishlist')) || [];
let cart = JSON.parse(localStorage.getItem('qm-cart')) || [];

// Modal Overlay Container Setup
const modalOverlay = document.createElement('div');
modalOverlay.id = 'qm-modal-overlay';
modalOverlay.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:2000; display:none; justify-content:center; align-items:center; padding:20px; box-sizing:border-box;';
document.body.appendChild(modalOverlay);

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
            <img src="${product.image}" alt="${product.name}" loading="lazy" referrerpolicy="no-referrer"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="emoji-fallback" style="display:none; width:100%; height:120px; background:#f3f4f6; justify-content:center; align-items:center; font-size:60px; border-radius:8px;">
                ${product.fallback}
            </div>
            <button class="wishlist-btn">${heartIcon}</button>
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
        `;
        productsContainer.appendChild(card);
    });
}

displayProducts(products);

const themeToggleBtn = document.getElementById('theme-toggle');
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<span class="btn-icon">☀️</span><span class="btn-text">Light Mode</span>';
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        let theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        themeToggleBtn.innerHTML = theme === 'dark' ? '<span class="btn-icon">☀️</span><span class="btn-text">Light Mode</span>' : '<span class="btn-icon">🌙</span><span class="btn-text">Dark Mode</span>';
        localStorage.setItem('theme', theme);
    });
}

const filterButtons = document.querySelectorAll('.categories button');
if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');
            Array.from(document.getElementsByClassName('card')).forEach(card => {
                card.style.display = (filterValue === 'all' || card.getAttribute('data-category') === filterValue) ? 'flex' : 'none';
            });
        });
    });
}

const searchInput = document.getElementById('search');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase().trim();
        Array.from(document.getElementsByClassName('card')).forEach(card => {
            const h3 = card.querySelector('h3');
            card.style.display = (h3 && h3.textContent.toLowerCase().includes(searchText)) ? 'flex' : 'none';
        });
    });
}

const cartCountEl = document.getElementById('cart-count');
const totalPriceEl = document.getElementById('total-price');
const wishlistCountEl = document.getElementById('wishlist-count');

function updateCartUI() {
    const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const grandTotalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if(cartCountEl) cartCountEl.textContent = totalItemsCount;
    if(totalPriceEl) totalPriceEl.textContent = grandTotalPrice;
    if(wishlistCountEl) wishlistCountEl.textContent = wishlist.length;

    localStorage.setItem('qm-cart', JSON.stringify(cart));
    localStorage.setItem('qm-wishlist', JSON.stringify(wishlist));
}

if (productsContainer) {
    productsContainer.addEventListener('click', (e) => {
        const productCard = e.target.closest('.card');
        if (!productCard) return;
        const pId = parseInt(productCard.getAttribute('data-id'));
        const matchedProduct = products.find(p => p.id === pId);
        if (!matchedProduct) return;

        if (e.target.classList.contains('add-to-cart-btn')) {
            const existingCartItem = cart.find(item => item.id === matchedProduct.id);
            if (existingCartItem) {
                existingCartItem.quantity += 1;
            } else {
                cart.push({ ...matchedProduct, quantity: 1 });
            }
            updateCartUI(); 
            showToast(`${matchedProduct.name} added to cart! 🛒`);
        }
        
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
            updateCartUI();
        }
    });
}

function showToast(msg) {
    const box = document.getElementById('toast-container');
    if (box) {
        const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; box.appendChild(t);
        setTimeout(() => t.remove(), 2000);
    }
}

function showCustomPopupAlert(title, message, isSuccess = true) {
    const popupOverlay = document.createElement('div');
    popupOverlay.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:3000; display:flex; justify-content:center; align-items:center; padding:20px; box-sizing:border-box;';
    
    const alertBox = document.createElement('div');
    alertBox.style.cssText = 'background:var(--bg-card, #fff); color:var(--text-color, #333); padding:30px; border-radius:15px; text-align:center; max-width:400px; width:100%; box-shadow:0 10px 30px rgba(0,0,0,0.5); border-top: 5px solid ' + (isSuccess ? '#2ec4b6;' : '#ff4d4d;');
    
    alertBox.innerHTML = `
        <div style="font-size: 50px; margin-bottom: 15px;">${isSuccess ? '🎉' : '⚠️'}</div>
        <h3 style="margin:0 0 10px 0; font-size:22px;">${title}</h3>
        <p style="margin:0 0 20px 0; font-size:14px; opacity:0.8; line-height:1.5;">${message}</p>
        <button id="close-alert-btn" style="background:${isSuccess ? '#2ec4b6' : '#ff4d4d'}; color:white; border:none; padding:10px 25px; border-radius:25px; font-weight:bold; cursor:pointer; width:100%;">Awesome, Bro!</button>
    `;
    
    popupOverlay.appendChild(alertBox);
    document.body.appendChild(popupOverlay);
    
    alertBox.querySelector('#close-alert-btn').addEventListener('click', () => {
        popupOverlay.remove();
    });
}

modalOverlay.addEventListener('click', (e) => {
    if(e.target === modalOverlay) modalOverlay.style.display = 'none';
});

const wishlistViewBtn = document.getElementById('wishlist-view-btn');
if (wishlistViewBtn) {
    wishlistViewBtn.addEventListener('click', () => {
        renderWishlistModal();
    });
}

function renderWishlistModal() {
    modalOverlay.innerHTML = '';
    modalOverlay.style.display = 'flex';

    const modal = document.createElement('div');
    modal.style.cssText = 'background:var(--bg-card, #fff); color:var(--text-color, #333); padding:25px; border-radius:12px; max-width:450px; width:100%; max-height:80vh; overflow-y:auto; box-shadow:0 10px 25px rgba(0,0,0,0.3); position:relative; border:1px solid rgba(0,0,0,0.1);';
    
    let itemsHTML = '';
    if(wishlist.length === 0) {
        itemsHTML = '<p style="text-align:center; padding:20px; font-weight:500;">Your Wishlist is empty, bro! ❤️</p>';
    } else {
        wishlist.forEach((item, index) => {
            itemsHTML += `
                <div style="display:flex; align-items:center; justify-content:space-between; gap:15px; border-bottom:1px solid rgba(0,0,0,0.08); padding:12px 0;">
                    <span style="font-size:24px;">${item.fallback}</span>
                    <div style="flex:1;">
                        <h4 style="margin:0; font-size:15px; color:inherit;">${item.name}</h4>
                        <p style="margin:3px 0 0 0; color:#2ec4b6; font-weight:bold;">₹${item.price}</p>
                    </div>
                    <div style="display:flex; gap:6px;">
                        <button class="move-to-cart-from-wl" data-index="${index}" style="background:#2ec4b6; color:white; border:none; padding:6px 10px; border-radius:20px; cursor:pointer; font-weight:bold; font-size:11px;">Move to Cart 🛒</button>
                        <button class="remove-wishlist-item" data-index="${index}" style="background:#ff4d4d; color:white; border:none; padding:6px 10px; border-radius:20px; cursor:pointer; font-weight:bold; font-size:11px;">✕</button>
                    </div>
                </div>
            `;
        });
    }

    modal.innerHTML = `
        <button id="close-modal" style="position:absolute; top:12px; right:15px; background:none; border:none; font-size:20px; cursor:pointer; color:inherit;">✕</button>
        <h2 style="margin-top:0; margin-bottom:20px; border-bottom:2px solid #ff4d4d; padding-bottom:8px;">My Wishlist</h2>
        <div style="display:flex; flex-direction:column; gap:5px;">${itemsHTML}</div>
    `;

    modalOverlay.appendChild(modal);
    modal.querySelector('#close-modal').addEventListener('click', () => modalOverlay.style.display = 'none');
    
    modal.querySelectorAll('.move-to-cart-from-wl').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.target.getAttribute('data-index'));
            const selectedProduct = wishlist[idx];

            const existingCartItem = cart.find(item => item.id === selectedProduct.id);
            if (existingCartItem) {
                existingCartItem.quantity += 1;
            } else {
                cart.push({ ...selectedProduct, quantity: 1 });
            }

            wishlist.splice(idx, 1);
            
            updateCartUI();
            displayProducts(products); 
            showToast(`Moved ${selectedProduct.name} to Cart! 🚀`);
            renderWishlistModal(); 
        });
    });

    modal.querySelectorAll('.remove-wishlist-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.target.getAttribute('data-index'));
            wishlist.splice(idx, 1);
            updateCartUI();
            displayProducts(products); 
            showToast("Removed from Wishlist! 🤍");
            renderWishlistModal(); 
        });
    });
}

const checkoutBtnView = document.getElementById('checkout-btn');
if (checkoutBtnView) {
    checkoutBtnView.addEventListener('click', () => {
        renderCartModal();
    });
}

function renderCartModal() {
    modalOverlay.innerHTML = '';
    modalOverlay.style.display = 'flex';

    const modal = document.createElement('div');
    modal.style.cssText = 'background:var(--bg-card, #fff); color:var(--text-color, #333); padding:25px; border-radius:12px; max-width:680px; width:100%; max-height:85vh; overflow-y:auto; box-shadow:0 10px 25px rgba(0,0,0,0.3); position:relative; border:1px solid rgba(0,0,0,0.1);';
    
    let itemsHTML = '';
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if(cart.length === 0) {
        itemsHTML = '<p style="text-align:center; padding:20px; font-weight:500;">Your Cart is empty, bro! Add items. 🛒</p>';
    } else {
        cart.forEach((item, index) => {
            itemsHTML += `
                <div style="display:flex; align-items:center; gap:15px; border-bottom:1px solid rgba(0,0,0,0.08); padding:10px 0;">
                    <span style="font-size:24px;">${item.fallback}</span>
                    <div style="flex:1;">
                        <h4 style="margin:0; font-size:14px; color:inherit;">${item.name}</h4>
                        <p style="margin:3px 0 0 0; color:#2ec4b6; font-weight:bold;">₹${item.price} x ${item.quantity}</p>
                    </div>
                    
                    <div style="display:flex; align-items:center; background:rgba(0,0,0,0.05); border-radius:20px; padding:2px;">
                        <button class="qty-minus" data-index="${index}" style="border:none; background:none; cursor:pointer; width:24px; height:24px; font-weight:bold; color:inherit;">-</button>
                        <span style="padding:0 8px; font-weight:bold; font-size:13px;">${item.quantity}</span>
                        <button class="qty-plus" data-index="${index}" style="border:none; background:none; cursor:pointer; width:24px; height:24px; font-weight:bold; color:inherit;">+</button>
                    </div>

                    <button class="remove-cart-item" data-index="${index}" style="background:#ff4d4d; color:white; border:none; padding:5px 10px; border-radius:6px; cursor:pointer; font-size:11px; font-weight:bold;">Remove</button>
                </div>
            `;
        });
    }

    modal.innerHTML = `
        <button id="close-modal" style="position:absolute; top:12px; right:15px; background:none; border:none; font-size:20px; cursor:pointer; color:inherit;">✕</button>
        <h2 style="margin-top:0; margin-bottom:20px; border-bottom:2px solid #2ec4b6; padding-bottom:8px;">My Cart Layout</h2>
        
        <div style="display:flex; flex-direction:row; gap:20px; flex-wrap:wrap;">
            <div style="flex:1; min-width:260px; max-height:320px; overflow-y:auto; padding-right:5px;">
                ${itemsHTML}
            </div>
            
            <div style="flex:1; min-width:260px; background:rgba(0,0,0,0.03); padding:15px; border-radius:8px; display:${cart.length === 0 ? 'none' : 'block'};">
                <h3 style="margin-top:0; margin-bottom:12px; font-size:15px; color:inherit;">Delivery Address</h3>
                <div id="address-err" style="color:#ff4d4d; font-size:12px; font-weight:bold; margin-bottom:8px; display:none;"></div>
                
                <input type="text" id="add-house" placeholder="Flat / House No / Floor *" class="qm-input-field" style="width:100%; padding:8px; margin-bottom:8px; border-radius:4px; box-sizing:border-box; outline:none;">
                <input type="text" id="add-area" placeholder="Area / Locality / Street *" class="qm-input-field" style="width:100%; padding:8px; margin-bottom:8px; border-radius:4px; box-sizing:border-box; outline:none;">
                <input type="text" id="add-landmark" placeholder="Landmark (Optional)" class="qm-input-field" style="width:100%; padding:8px; margin-bottom:8px; border-radius:4px; box-sizing:border-box; outline:none;">
                <input type="text" id="add-pincode" placeholder="6-Digit Pincode *" class="qm-input-field" style="width:100%; padding:8px; margin-bottom:15px; border-radius:4px; box-sizing:border-box; outline:none;">
                
                <div style="display:flex; justify-content:space-between; font-weight:bold; margin-bottom:15px; border-top:1px dashed rgba(0,0,0,0.15); padding-top:10px; color:inherit;">
                    <span>Grand Total:</span>
                    <span style="color:#2ec4b6;">₹${totalAmount}</span>
                </div>
                
                <button id="place-order-final-btn" style="width:100%; background:#2ec4b6; color:white; border:none; padding:12px; border-radius:6px; font-size:15px; font-weight:bold; cursor:pointer; box-shadow:0 4px 10px rgba(46,196,182,0.2);">Place Order 🚀</button>
            </div>
        </div>
    `;

    modalOverlay.appendChild(modal);
    modal.querySelector('#close-modal').addEventListener('click', () => modalOverlay.style.display = 'none');
    
    modal.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.target.getAttribute('data-index'));
            cart[idx].quantity += 1;
            updateCartUI();
            renderCartModal();
        });
    });

    modal.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.target.getAttribute('data-index'));
            if(cart[idx].quantity > 1) {
                cart[idx].quantity -= 1;
            } else {
                cart.splice(idx, 1);
            }
            updateCartUI();
            renderCartModal();
        });
    });

    modal.querySelectorAll('.remove-cart-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.target.getAttribute('data-index'));
            cart.splice(idx, 1);
            updateCartUI();
            showToast("Removed from cart! 🛒");
            renderCartModal(); 
        });
    });

    const placeOrderBtn = modal.querySelector('#place-order-final-btn');
    if(placeOrderBtn) {
        placeOrderBtn.addEventListener('click', () => {
            const house = modal.querySelector('#add-house').value.trim();
            const area = modal.querySelector('#add-area').value.trim();
            const landmark = modal.querySelector('#add-landmark').value.trim();
            const pincode = modal.querySelector('#add-pincode').value.trim();
            const errBox = modal.querySelector('#address-err');

            if(!house || !area || !pincode) {
                errBox.textContent = "Please fill in House No, Area and Pincode, bro!";
                errBox.style.display = 'block';
                return;
            }

            if(pincode.length < 6 || isNaN(pincode)) {
                errBox.textContent = "Enter a valid 6-digit Pincode, bro!";
                errBox.style.display = 'block';
                return;
            }

            errBox.style.display = 'none';
            modalOverlay.style.display = 'none';

            const addressString = `${house}, ${area}, Landmark: ${landmark || 'None'}, Pincode: ${pincode}`;
            showCustomPopupAlert(
                "Order Placed Successfully, Bro!", 
                `Delivery Address:<br><b>${addressString}</b><br><br>Total Paid: <b>₹${totalAmount}</b>`, 
                true
            );
            
            cart = [];
            updateCartUI();
            showToast("Order Dispatched! 🚀");
        });
    }
}

// Global Core App Boot initialization execution
initDynamicAuth();
updateCartUI();