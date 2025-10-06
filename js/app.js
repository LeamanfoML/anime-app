// Mobile Anime App JavaScript

// Sample anime data
const animeData = [
    {
        id: 1,
        title: "Attack on Titan",
        image: "https://placehold.co/300x400/FF6B6B/FFFFFF?text=Attack+on+Titan",
        description: "Humanity fights for survival against giant humanoid Titans. Eren Jaeger and his friends join the military to protect their nation.",
        rating: 4.8,
        favorite: false
    },
    {
        id: 2,
        title: "Demon Slayer",
        image: "https://placehold.co/300x400/4ECDC4/FFFFFF?text=Demon+Slayer",
        description: "Tanjiro Kamado becomes a demon slayer after his family is slaughtered and his sister turned into a demon.",
        rating: 4.9,
        favorite: false
    },
    {
        id: 3,
        title: "One Piece",
        image: "https://placehold.co/300x400/FFA502/FFFFFF?text=One+Piece",
        description: "Monkey D. Luffy and his pirate crew search for the greatest treasure ever known as 'One Piece'.",
        rating: 4.7,
        favorite: false
    },
    {
        id: 4,
        title: "Naruto",
        image: "https://placehold.co/300x400/FFD166/FFFFFF?text=Naruto",
        description: "Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage.",
        rating: 4.6,
        favorite: false
    },
    {
        id: 5,
        title: "My Hero Academia",
        image: "https://placehold.co/300x400/06D6A0/FFFFFF?text=My+Hero+Academia",
        description: "A boy born without superpowers in a world of superheroes enrolls in a prestigious hero academy.",
        rating: 4.5,
        favorite: false
    },
    {
        id: 6,
        title: "Death Note",
        image: "https://placehold.co/300x400/EF476F/FFFFFF?text=Death+Note",
        description: "A high school student discovers a supernatural notebook that allows him to kill anyone whose name he writes in it.",
        rating: 4.7,
        favorite: false
    },
    {
        id: 7,
        title: "Dragon Ball Z",
        image: "https://placehold.co/300x400/FF9E00/FFFFFF?text=Dragon+Ball+Z",
        description: "The continuing story of Goku and his friends as they defend the Earth against increasingly powerful enemies.",
        rating: 4.6,
        favorite: false
    },
    {
        id: 8,
        title: "Spirited Away",
        image: "https://placehold.co/300x400/118AB2/FFFFFF?text=Spirited+Away",
        description: "A girl stumbles upon a magical world and must work in a bathhouse for spirits to save her parents.",
        rating: 4.9,
        favorite: false
    }
];

// DOM elements
const animeGrid = document.getElementById('anime-grid');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const homeBtn = document.getElementById('home-btn');
const favoritesBtn = document.getElementById('favorites-btn');
const settingsBtn = document.getElementById('settings-btn');

// Current view state
let currentView = 'home';

// Function to render anime cards
function renderAnime(animes) {
    if (!animes || animes.length === 0) {
        animeGrid.innerHTML = '<p class="no-results" style="text-align: center; padding: 20px;">No anime found</p>';
        return;
    }
    
    animeGrid.innerHTML = '';
    
    animes.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.className = 'anime-card';
        
        animeCard.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}" class="anime-image" loading="lazy">
            <div class="anime-info">
                <h3 class="anime-title">${anime.title}</h3>
                <p class="anime-description">${anime.description}</p>
                <div class="anime-rating">
                    <span>⭐</span>
                    <span>${anime.rating}/5.0</span>
                </div>
            </div>
        `;
        
        animeGrid.appendChild(animeCard);
    });
}

// Function to filter anime based on search query
function filterAnime(query) {
    if (!query) {
        return currentView === 'favorites' ? 
            animeData.filter(anime => anime.favorite) : 
            animeData;
    }
    
    return animeData.filter(anime => 
        anime.title.toLowerCase().includes(query.toLowerCase()) ||
        anime.description.toLowerCase().includes(query.toLowerCase())
    );
}

// Navigation functions
function showHome() {
    currentView = 'home';
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    homeBtn.classList.add('active');
    renderAnime(animeData);
}

function showFavorites() {
    currentView = 'favorites';
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    favoritesBtn.classList.add('active');
    renderAnime(animeData.filter(anime => anime.favorite));
}

function showSettings() {
    currentView = 'settings';
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    settingsBtn.classList.add('active');
    
    animeGrid.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h2>Settings</h2>
            <p>Change your preferences here</p>
            <p>App Version: 1.0</p>
        </div>
    `;
}

// Event listeners for navigation
homeBtn.addEventListener('click', showHome);
favoritesBtn.addEventListener('click', showFavorites);
settingsBtn.addEventListener('click', showSettings);

// Search functionality
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    const filtered = filterAnime(query);
    renderAnime(filtered);
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        const filtered = filterAnime(query);
        renderAnime(filtered);
    }
});

// Touch-friendly swipe gestures (simplified)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
}, false);

function handleSwipeGesture() {
    const minSwipeDistance = 50;
    
    if (touchStartX - touchEndX > minSwipeDistance) {
        // Swipe left - next
    } else if (touchEndX - touchStartX > minSwipeDistance) {
        // Swipe right - previous
        // For this app, we'll go to the home view
        showHome();
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderAnime(animeData);
    
    // Add PWA install prompt (simplified)
    setTimeout(() => {
        // In a real app, this would use the beforeinstallprompt event
        console.log('App is ready for installation');
    }, 3000);
});