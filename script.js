// ===========================
// DONNÉES DES PRODUITS
// ===========================

const products = [
    {
        id: 1,
        name: 'T-Shirt Bio Performance',
        category: 'textiles',
        price: 34.99,
        icon: '👕',
        image: 'tshirt.png',
        description: 'T-shirt en coton bio certifié, design minimaliste pour le fitness'
    },
    {
        id: 2,
        name: 'Short Entraînement Bio',
        category: 'textiles',
        price: 24.99,
        icon: '🩳',
        image: 'short.png',
        description: 'Short court respirant en tissu écologique'
    },
    {
        id: 3,
        name: 'Hoodie Bio Performance',
        category: 'textiles',
        price: 45.99,
        image: 'hoodie.png',
        icon: '🧥',
        description: 'Hoodie chaud et confortable en coton bio'
    },
    {
        id: 4,
        name: 'Leggings Premium Bio',
        category: 'textiles',
        image: 'legging.png',
        price: 24.99,
        icon: '👖',
        description: 'Leggings haute taille avec maintien optimal'
    },
    {
        id: 5,
        name: 'Boisson Citron-Gingembre',
        category: 'boissons',
        image: 'citiron-gimgembre.png',
        price: 12.99,
        icon: '🍋',
        description: 'Boisson énergisante naturelle 100% bio'
    },
    {
        id: 6,
        name: 'Boisson Pré-Workout Betterave',
        image: 'betterave.png',
        category: 'boissons',
        price: 16.99,
        icon: '🥤',
        description: 'Dynamise vos entraînements - 100% naturel'
    },
    {
        id: 7,
        image: 'fruitrouge.png',
        name: 'Boisson Fruits Rouges',
        category: 'boissons',
        price: 12.99,
        icon: '🍓',
        description: 'Récupération post-entraînement saveur naturelle'
    },
    {
        id: 8,
        image: 'Magnésium.png',
        name: 'Complément Magnésium Bio',
        category: 'complements',
        price: 19.99,
        icon: '💊',
        description: 'Magnésium naturel pour la récupération musculaire'
    },
    {
        id: 9,
        image: 'ashwagandha.png',
        name: 'Ashwagandha Premium',
        category: 'complements',
        price: 24.99,
        icon: '🌿',
        description: 'Complément naturel pour le stress et la performance'
    },
    {
        id: 10,
        image: 'Spiruline.png',
        name: 'Spiruline Bio Pure',
        category: 'complements',
        price: 29.99,
        icon: '🌊',
        description: 'Superfood protéiné - boost énergétique naturel'
    },
    {
        id: 11,
        image: 'pois.png',
        name: 'Pois Bio Protein',
        category: 'complements',
        price: 22.99,
        icon: '🫘',
        description: 'Protéine végétale bio - récupération musculaire'
    },
    {
        id: 12,
        name: 'Pack Débutant RegenUp',
        category: 'textiles',
        price: 129.99,
        icon: '📦',
        description: 'T-shirt + Short + Boisson offerte'
    }
];

// Panier
let cart = [];

// ===========================
// INITIALISATION
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    renderProducts('tous');
    setupEventListeners();
    updateCartCount();
});

// ===========================
// EVENT LISTENERS
// ===========================

function setupEventListeners() {
    // Menu toggle mobile
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Fermer menu au clic sur lien
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Form contact
    document.getElementById('contactForm').addEventListener('submit', handleContactForm);

    // Clic en dehors du modal pour fermer
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('productModal');
        if (event.target == modal) {
            closeProductModal();
        }
    });
}

// ===========================
// GESTION DES PRODUITS
// ===========================

function renderProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    let filtered = products;
    if (category !== 'tous') {
        filtered = products.filter(p => p.category === category);
    }

    filtered.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });

    // Mettre à jour boutons filtres
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Calcul des prix
    const discountPercent = promoActive ? 10 : 0;
    const originalPrice = product.price;
    const reducedPrice = (originalPrice * (1 - discountPercent / 100)).toFixed(2);
    
    // Afficher l'image si elle existe, sinon l'emoji
    let imageContent = product.icon;
    if (product.image) {
        imageContent = `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">`;
    }
    
    let priceHTML = '';
    if (promoActive) {
        priceHTML = `
            <div class="product-price">
                <span class="price-original">${originalPrice.toFixed(2)}€</span>
                <span class="price-reduced">${reducedPrice}€</span>
                <span class="price-discount">-10%</span>
            </div>
        `;
    } else {
        priceHTML = `
            <div class="product-price">
                <span class="price-regular">${originalPrice.toFixed(2)}€</span>
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="product-image">${imageContent}</div>
        <div class="product-info">
            <span class="product-category">${translateCategory(product.category)}</span>
            <div class="product-name">${product.name}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-footer">
                ${priceHTML}
                <button class="btn-product" onclick="openProductModal(${product.id})">
                    Voir plus
                </button>
            </div>
        </div>
    `;
    return card;
}

function translateCategory(cat) {
    const translations = {
        'textiles': 'Vêtements',
        'boissons': 'Boissons',
        'complements': 'Compléments'
    };
    return translations[cat] || cat;
}

function filterProducts(category) {
    // Mettre à jour boutons filtres
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderProducts(category);
}

// ===========================
// MODAL PRODUIT
// ===========================

let selectedProduct = null;

function openProductModal(productId) {
    selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) return;

    document.getElementById('modalTitle').textContent = selectedProduct.name;
    document.getElementById('modalCategory').textContent = `Catégorie: ${translateCategory(selectedProduct.category)}`;
    document.getElementById('modalDescription').textContent = selectedProduct.description;
    
    // Afficher le prix avec réduction si applicable
    const priceElement = document.getElementById('modalPrice');
    if (promoActive) {
        const reducedPrice = (selectedProduct.price * 0.9).toFixed(2);
        priceElement.innerHTML = `
            <span class="price-original">${selectedProduct.price.toFixed(2)}€</span>
            <span class="price-reduced">${reducedPrice}€</span>
            <span class="price-discount">-10%</span>
        `;
    } else {
        priceElement.innerHTML = `<span class="price-regular">${selectedProduct.price.toFixed(2)}€</span>`;
    }
    
    document.getElementById('quantityInput').value = 1;
    
    // Afficher le sélecteur de taille seulement pour les textiles
    const sizeSelector = document.getElementById('sizeSelector');
    if (selectedProduct.category === 'textiles') {
        sizeSelector.style.display = 'flex';
        document.getElementById('sizeInput').value = 'M';
    } else {
        sizeSelector.style.display = 'none';
    }
    
    // Image du produit
    const modalImage = document.getElementById('modalImage');
    
    if (selectedProduct.image) {
        // Afficher l'image réelle
        modalImage.src = selectedProduct.image;
        modalImage.alt = selectedProduct.name;
        modalImage.style.objectFit = 'cover';
        modalImage.style.background = 'transparent';
    } else {
        // Afficher l'emoji si pas d'image
        modalImage.src = '';
        modalImage.alt = '';
        modalImage.style.fontSize = '4rem';
        modalImage.textContent = selectedProduct.icon;
        modalImage.style.background = 'linear-gradient(135deg, #2dd4bf, #1a5a2a)';
        modalImage.style.display = 'flex';
        modalImage.style.alignItems = 'center';
        modalImage.style.justifyContent = 'center';
    }
    
    document.getElementById('productModal').style.display = 'block';
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
    selectedProduct = null;
}

function addToCart() {
    if (!selectedProduct) return;

    const quantity = parseInt(document.getElementById('quantityInput').value);
    const size = selectedProduct.category === 'textiles' ? document.getElementById('sizeInput').value : null;
    
    // Calculer le prix avec réduction si appliquée
    const finalPrice = promoActive ? (selectedProduct.price * 0.9).toFixed(2) : selectedProduct.price.toFixed(2);
    
    const cartItem = cart.find(item => item.id === selectedProduct.id && item.size === size);
    
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({
            ...selectedProduct,
            quantity: quantity,
            size: size,
            displayPrice: parseFloat(finalPrice)
        });
    }

    updateCartCount();
    updateCartSummary();
    showNotification(`${selectedProduct.name}${size ? ` (${size})` : ''} ajouté au panier! Solde: ${cart.reduce((sum, item) => sum + ((item.displayPrice || item.price) * item.quantity), 0).toFixed(2)}€`);
    closeProductModal();
}

// ===========================
// GESTION PANIER
// ===========================

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartBtn = document.querySelector('.btn-panier');
    
    document.getElementById('cart-count').textContent = count;
    
    // Mettre à jour le titre du bouton avec le montant total
    if (count > 0) {
        cartBtn.title = `Panier: ${total.toFixed(2)}€`;
    } else {
        cartBtn.title = 'Panier vide';
    }
}

function viewCart() {
    renderCartItems();
    document.getElementById('panier').style.display = 'block';
    document.querySelector('.cart-section').scrollIntoView({ behavior: 'smooth' });
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; font-size: 1.1rem; color: #666;">Votre panier est vide</p>';
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        const itemPrice = item.displayPrice || item.price;
        cartItem.innerHTML = `
            <div class="cart-item-image">${item.icon}</div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-meta">${item.category === 'textiles' ? `Taille: ${item.size}` : 'Complément'}</p>
                <p class="cart-item-price">${itemPrice.toFixed(2)}€</p>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity(${index}, -1)">−</button>
                    <input type="number" class="qty-display" value="${item.quantity}" readonly>
                    <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <div class="cart-item-total">${(itemPrice * item.quantity).toFixed(2)}€</div>
                <button class="remove-btn" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    updateCartSummary();
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        renderCartItems();
        updateCartCount();
        updateCartSummary();
    }
}

function removeFromCart(index) {
    updateCartSummary();
    cart.splice(index, 1);
    updateCartCount();
    renderCartItems();
    showNotification('Produit supprimé du panier');
}

function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + ((item.displayPrice || item.price) * item.quantity), 0);
    const shipping = cart.length > 0 ? 5 : 0;
    const total = subtotal + shipping;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2) + '€';
    document.getElementById('shipping').textContent = shipping + '€';
    document.getElementById('total').textContent = total.toFixed(2) + '€';
}

function checkout() {
    if (cart.length === 0) {
        alert('Votre panier est vide');
        return;
    }

    const subtotal = cart.reduce((total, item) => total + ((item.displayPrice || item.price) * item.quantity), 0);
    const shipping = 5;
    const total = subtotal + shipping;

    showNotification(`Paiement de ${total.toFixed(2)}€ - Système de paiement à intégrer`);
    
    // Réinitialiser panier
    setTimeout(() => {
        alert('Commande confirmée! Un email de confirmation vous sera envoyé.');
        cart = [];
        updateCartCount();
        document.getElementById('panier').style.display = 'none';
    }, 2000);
}

// ===========================
// CONTACT
// ===========================

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    showNotification('Message envoyé avec succès! Nous vous répondrons bientôt.');
    e.target.reset();
}

// ===========================
// NOTIFICATIONS
// ===========================

function showNotification(message) {
    // Créer notification temporaire
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #0f3d1a;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// GESTION BOUTONS ACCÈS PANIER
// ===========================
// ===========================
// CODE PROMO
// ===========================

let promoActive = false;

function togglePromo() {
    promoActive = !promoActive;
    updatePromoUI();
    renderProducts('tous');
}

function removePromo() {
    promoActive = false;
    updatePromoUI();
    renderProducts('tous');
}

function updatePromoUI() {
    const btnApply = document.getElementById('btnApplyPromo');
    const promoStatus = document.getElementById('promoStatus');
    
    if (promoActive) {
        btnApply.classList.add('active');
        btnApply.innerHTML = '<i class="fas fa-check"></i> Appliquée';
        promoStatus.style.display = 'block';
    } else {
        btnApply.classList.remove('active');
        btnApply.innerHTML = '<i class="fas fa-check-circle"></i> Appliquer';
        promoStatus.style.display = 'none';
    }
}

function copyPromoCode() {
    const code = 'REGENUP10';
    
    // Créer un élément temporaire pour copier
    const temp = document.createElement('input');
    temp.value = code;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    
    // Feedback visuel
    const btnCopy = document.querySelector('.btn-copy-promo');
    const originalHTML = btnCopy.innerHTML;
    btnCopy.innerHTML = '<i class="fas fa-check"></i> Copié !';
    btnCopy.style.background = 'var(--primary-dark)';
    btnCopy.style.borderColor = 'var(--primary-dark)';
    btnCopy.style.color = 'var(--accent)';
    
    setTimeout(() => {
        btnCopy.innerHTML = originalHTML;
        btnCopy.style.background = 'rgba(255, 255, 255, 0.2)';
        btnCopy.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        btnCopy.style.color = 'white';
    }, 2000);
}
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.querySelector('.btn-panier');
    if (cartBtn) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            renderCartItems();
            document.getElementById('panier').style.display = 'block';
            document.querySelector('.cart-section').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
