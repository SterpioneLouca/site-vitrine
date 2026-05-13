// ===========================
// SYSTÈME D'AUTHENTIFICATION REGENUP
// ===========================

// Données utilisateurs de démonstration
const demoUsers = [
    {
        id: 1,
        firstName: 'Jean',
        lastName: 'Dupont',
        email: 'jean@exemple.com',
        password: 'password123',
        phone: '+33 6 12 34 56 78'
    },
    {
        id: 2,
        firstName: 'Marie',
        lastName: 'Martin',
        email: 'marie@exemple.com',
        password: 'password123',
        phone: '+33 6 98 76 54 32'
    }
];

// Commandes de démonstration
const demoOrders = [
    {
        id: 'CMD001',
        date: new Date('2026-02-10'),
        status: 'delivered',
        total: 89.98,
        items: 3
    },
    {
        id: 'CMD002',
        date: new Date('2026-02-15'),
        status: 'processing',
        total: 124.97,
        items: 2
    }
];

// Adresses de démonstration
const demoAddresses = [
    {
        type: 'delivery',
        name: 'Jean Dupont',
        street: '123 Rue de la Paix',
        city: 'Paris',
        zipCode: '75001',
        phone: '+33 6 12 34 56 78'
    }
];

// ===========================
// FONCTIONS D'AUTHENTIFICATION
// ===========================

function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember')?.checked;
    
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    
    // Réinitialiser les messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    errorMessage.textContent = '';
    successMessage.textContent = '';
    
    // Valider les champs
    if (!email || !password) {
        showError('Veuillez remplir tous les champs', errorMessage);
        return;
    }
    
    if (!isValidEmail(email)) {
        showError('L\'adresse email n\'est pas valide', errorMessage);
        return;
    }
    
    // Vérifier les identifiants
    const user = demoUsers.find(u => u.email === email && u.password === password);
    
    if (!user) {
        showError('Email ou mot de passe incorrect', errorMessage);
        return;
    }
    
    // Authentification réussie
    const userData = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        loginTime: new Date().toISOString()
    };
    
    localStorage.setItem('regenupUser', JSON.stringify(userData));
    
    if (remember) {
        localStorage.setItem('regenupRemember', 'true');
    }
    
    // Charger les données de démonstration
    localStorage.setItem('regenupOrders', JSON.stringify(demoOrders));
    localStorage.setItem('regenupAddresses', JSON.stringify(demoAddresses));
    
    // Afficher le succès
    showSuccess('Connexion réussie! Redirection en cours...', successMessage);
    
    // Rediriger après 2 secondes
    setTimeout(() => {
        window.location.href = 'compte.html';
    }, 2000);
}

function handleLogout() {
    localStorage.removeItem('regenupUser');
    localStorage.removeItem('regenupRemember');
    window.location.href = 'index.html';
}

function showForgotPassword(event) {
    event.preventDefault();
    alert('Fonctionnalité "Mot de passe oublié" - À implémenter\n\nUn email de réinitialisation serait envoyé à votre adresse.');
}

function showSignup(event) {
    event.preventDefault();
    alert('Pour ce test, utilisez les identifiants de démonstration:\n\nEmail: jean@exemple.com\nMot de passe: password123\n\nOu: marie@exemple.com\nMot de passe: password123');
}

function loginGoogle(event) {
    event.preventDefault();
    alert('Connexion Google - À implémenter\n\nIntégration OAuth2 nécessaire');
}

function loginFacebook(event) {
    event.preventDefault();
    alert('Connexion Facebook - À implémenter\n\nIntégration OAuth2 nécessaire');
}

// ===========================
// FONCTIONS UTILITAIRES
// ===========================

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showError(message, element) {
    element.textContent = message;
    element.style.display = 'block';
}

function showSuccess(message, element) {
    element.textContent = message;
    element.style.display = 'block';
}

// ===========================
// VÉRIFICATION DE CONNEXION
// ===========================

function isUserConnected() {
    return localStorage.getItem('regenupUser') !== null;
}

function getCurrentUser() {
    const user = localStorage.getItem('regenupUser');
    return user ? JSON.parse(user) : null;
}

// Vérifier la connexion au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const user = getCurrentUser();
    
    // Ajouter un lien de connexion/compte au menu principal
    const navMenu = document.getElementById('navMenu');
    if (navMenu && !document.querySelector('.btn-account')) {
        const accountLink = document.createElement('li');
        accountLink.innerHTML = user ? 
            `<a href="compte.html" class="btn-account"><i class="fas fa-user"></i> Mon Compte</a>` :
            `<a href="login.html" class="btn-account"><i class="fas fa-sign-in-alt"></i> Connexion</a>`;
        navMenu.appendChild(accountLink);
    }
});

// ===========================
// GESTION DU PANIER (INTÉGRATION AVEC script.js)
// ===========================

function saveCartForUser() {
    if (isUserConnected()) {
        const user = getCurrentUser();
        const cart = window.cart || [];
        const cartData = {
            userId: user.id,
            items: cart,
            date: new Date().toISOString(),
            total: calculateCartTotal()
        };
        
        let userCarts = JSON.parse(localStorage.getItem('userCarts')) || {};
        userCarts[user.id] = cartData;
        localStorage.setItem('userCarts', JSON.stringify(userCarts));
    }
}

function calculateCartTotal() {
    if (!window.cart) return 0;
    return window.cart.reduce((total, item) => {
        return total + ((item.displayPrice || item.price) * item.quantity);
    }, 0);
}

// ===========================
// STYLE POUR BOUTON CONNEXION
// ===========================

const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .btn-account {
        display: inline-flex !important;
        align-items: center !important;
        gap: 8px !important;
        padding: 8px 16px !important;
        background: var(--primary-dark) !important;
        color: white !important;
        border-radius: 8px !important;
        text-decoration: none !important;
        font-weight: 600 !important;
        transition: all 0.3s ease !important;
        box-shadow: 0 0 10px rgba(76,175,80,0.3) !important;
    }
    
    .btn-account:hover {
        background: var(--accent) !important;
        color: var(--primary-dark) !important;
        box-shadow: 0 0 20px rgba(102,187,106,0.5) !important;
        transform: translateY(-2px) !important;
    }

    @media (max-width: 768px) {
        .btn-account {
            padding: 6px 12px !important;
            font-size: 0.9rem !important;
        }
    }
`;
document.head.appendChild(styleSheet);

// ===========================
// FONCTIONS DE SÉCURITÉ
// ===========================

// Vérifier la session
function checkSessionTimeout() {
    const user = getCurrentUser();
    if (user) {
        const loginTime = new Date(user.loginTime);
        const now = new Date();
        const sessionDuration = 24 * 60 * 60 * 1000; // 24 heures
        
        if (now - loginTime > sessionDuration) {
            handleLogout();
            alert('Votre session a expiré. Veuillez vous reconnecter.');
        }
    }
}

// Vérifier la session toutes les heures
setInterval(checkSessionTimeout, 60 * 60 * 1000);

console.log('✅ Système d\'authentification RegenUp chargé');
console.log('Utilisateurs de démonstration:');
console.log('  Email: jean@exemple.com | Mot de passe: password123');
console.log('  Email: marie@exemple.com | Mot de passe: password123');
