// ┌─┐┌─┐┌─┐┬─┐┌─┐┬ ┬
// └─┐├┤ ├─┤├┬┘│  ├─┤
// └─┘└─┘┴ ┴┴└─└─┘┴ ┴
// Search overlay functionality

const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

let isSearchActive = false;

// Show search overlay
const showSearch = () => {
  isSearchActive = true;
  searchOverlay.classList.add('active');
  searchInput.focus();
  // Clear any existing text
  searchInput.value = '';
};

// Hide search overlay
const hideSearch = () => {
  isSearchActive = false;
  searchOverlay.classList.remove('active');
  searchInput.blur();
  searchInput.value = '';
};

// Perform search
const performSearch = (query) => {
  if (query.trim()) {
    const encodedQuery = encodeURIComponent(query.trim());
    const searchUrl = `https://duckduckgo.com/?q=${encodedQuery}`;

    if (CONFIG.openInNewTab) {
      window.open(searchUrl, '_blank');
    } else {
      window.location.href = searchUrl;
    }
  }
  hideSearch();
};

// Global keydown event listener
document.addEventListener('keydown', (event) => {
  // If search is not active and user presses "/"
  if (!isSearchActive && event.key === '/') {
    event.preventDefault();
    showSearch();
    return;
  }

  // If search is active
  if (isSearchActive) {
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        hideSearch();
        break;
      case 'Enter':
        event.preventDefault();
        performSearch(searchInput.value);
        break;
    }
  }
});

// Click outside to close
searchOverlay.addEventListener('click', (event) => {
  if (event.target === searchOverlay) {
    hideSearch();
  }
});

// Prevent search input from losing focus when clicking inside the search container
document.querySelector('.searchContainer').addEventListener('click', (event) => {
  event.stopPropagation();
  if (isSearchActive) {
    searchInput.focus();
  }
});

// Search button click handler
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  showSearch();
});
