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
let wishlist = []; let cart = [];

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

        // Structured without absolute div traps
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
    if(cartCountEl) cartCountEl.textContent = cart.length;
    if(totalPriceEl) totalPriceEl.textContent = cart.reduce((sum, item) => sum + item.price, 0);
}

if (productsContainer) {
    productsContainer.addEventListener('click', (e) => {
        const productCard = e.target.closest('.card');
        if (!productCard) return;
        const pId = parseInt(productCard.getAttribute('data-id'));
        const matchedProduct = products.find(p => p.id === pId);
        if (!matchedProduct) return;

        if (e.target.classList.contains('add-to-cart-btn')) {
            cart.push(matchedProduct); updateCartUI(); showToast(`${matchedProduct.name} added! 🛒`);
        }
        if (e.target.classList.contains('wishlist-btn')) {
            const index = wishlist.findIndex(item => item.id === matchedProduct.id);
            if (index === -1) { wishlist.push(matchedProduct); e.target.textContent = "❤️"; }
            else { wishlist.splice(index, 1); e.target.textContent = "🤍"; }
            if(wishlistCountEl) wishlistCountEl.textContent = wishlist.length;
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