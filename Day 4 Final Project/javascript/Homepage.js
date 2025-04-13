const searchInput = document.getElementById('value');
const searchBtn = document.getElementById('searchBtn');
const resultSection = document.getElementById('result-section');
const resultContainer = document.getElementById('result-container');

const showLoadingState = () => {
    resultContainer.innerHTML = '<div class="loading">Loading...<i class="fas fa-spinner fa-spin"></i></div>';
    resultSection.style.display = 'block';
};

const showError = (message) => {
    resultContainer.innerHTML = `<div class="error"><i class="fas fa-exclamation-circle"></i> ${message}</div>`;
    resultSection.style.display = 'block';
};

const searchShows = async () => {
    const searchTerm = searchInput.value.trim();
    
    if (!searchTerm) {
        showError('Please enter a search term');
        return;
    }

    showLoadingState();

    try {
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`);
        
        if (response.data.length === 0) {
            showError('No results found');
            return;
        }

        displayResults(response.data);
    } catch (error) {
        showError('Something went wrong. Please try again later.');
        console.error('Error:', error);
    }
};

const displayResults = (shows) => {
    resultContainer.innerHTML = '';
    
    shows.forEach(({ show }) => {
        if (show.image) {
            const card = document.createElement('div');
            card.className = 'show-card';
            
            card.innerHTML = `
                <img src="${show.image.medium}" alt="${show.name}">
                <div class="show-info">
                    <h3>${show.name}</h3>
                    ${show.rating.average ? `<p>⭐ ${show.rating.average}/10</p>` : ''}
                </div>
            `;
            
            card.addEventListener('click', () => window.open(show.url, '_blank'));
            resultContainer.appendChild(card);
        }
    });
};

// Event Listeners
searchBtn.addEventListener('click', searchShows);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchShows();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// ...existing code...

// Modal functionality
const modal = document.getElementById('getStartedModal');
const getStartedBtn = document.querySelector('.primary-btn');
const closeBtn = document.querySelector('.close-btn');

getStartedBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});