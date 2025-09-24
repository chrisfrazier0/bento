// ┬ ┬┌─┐┌─┐┌┬┐┬ ┬┌─┐┬─┐  ┌─┐┬  ┬┌─┐┬─┐┬  ┌─┐┬ ┬
// │││├┤ ├─┤ │ ├─┤├┤ ├┬┘  │ │└┐┌┘├┤ ├┬┘│  ├─┤└┬┘
// └┴┘└─┘┴ ┴ ┴ ┴ ┴└─┘┴└─  └─┘ └┘ └─┘┴└─┴─┘┴ ┴ ┴
// Weather API key overlay functionality

const weatherOverlay = document.getElementById('weatherOverlay');
const weatherInput = document.getElementById('weatherInput');
const weatherSaveButton = document.getElementById('weatherSaveButton');

let isWeatherOverlayActive = false;

// Show weather overlay
const showWeatherOverlay = () => {
  isWeatherOverlayActive = true;
  weatherOverlay.classList.add('active');
  weatherInput.focus();

  // Load existing API key if it exists
  const existingKey = localStorage.getItem('weatherKey');
  if (existingKey) {
    weatherInput.value = existingKey;
    // Select all text for easy replacement
    weatherInput.select();
  } else {
    weatherInput.value = '';
  }
};

// Hide weather overlay
const hideWeatherOverlay = () => {
  isWeatherOverlayActive = false;
  weatherOverlay.classList.remove('active');
  weatherInput.blur();
};

// Save weather API key
const saveWeatherKey = () => {
  const apiKey = weatherInput.value.trim();

  if (apiKey) {
    localStorage.setItem('weatherKey', apiKey);
    console.log('Weather API key saved successfully!');

    // Reload weather data with new key
    if (typeof refreshWeather === 'function') {
      refreshWeather();
    }
  } else {
    // If empty, remove the key
    localStorage.removeItem('weatherKey');
    console.log('Weather API key removed.');
  }

  hideWeatherOverlay();
};

// Keyboard event listener for weather overlay only
document.addEventListener('keydown', (event) => {
  // If weather overlay is active
  if (isWeatherOverlayActive) {
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        hideWeatherOverlay();
        break;
      case 'Enter':
        event.preventDefault();
        saveWeatherKey();
        break;
    }
  }
});

// Initialize click handler when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Click handler for weather icon (in the weather widget, not the overlay)
  const weatherIcon = document.querySelector('.weatherBlock .weatherIcon');
  if (weatherIcon) {
    weatherIcon.addEventListener('click', (event) => {
      event.preventDefault();
      showWeatherOverlay();
    });

    // Add a class to make it clickable without affecting layout
    weatherIcon.classList.add('clickable-weather-icon');
  }
});

// Click outside to close
weatherOverlay.addEventListener('click', (event) => {
  if (event.target === weatherOverlay) {
    hideWeatherOverlay();
  }
});

// Prevent weather input from losing focus when clicking inside the weather container
document.querySelector('.weatherContainer').addEventListener('click', (event) => {
  event.stopPropagation();
  if (isWeatherOverlayActive) {
    weatherInput.focus();
  }
});

// Save button click handler
weatherSaveButton.addEventListener('click', (event) => {
  event.preventDefault();
  saveWeatherKey();
});
