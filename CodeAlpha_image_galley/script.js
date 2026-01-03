const images = [
    {
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop',
        title: 'Mountain Landscape',
        category: 'nature',
        description: 'Breathtaking mountain view'
    },
    {
        src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=800&fit=crop',
        title: 'City Lights',
        category: 'city',
        description: 'Urban nightscape'
    },
    {
        src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&h=800&fit=crop',
        title: 'Wild Fox',
        category: 'animals',
        description: 'Beautiful wildlife'
    },
    {
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=800&fit=crop',
        title: 'Forest Path',
        category: 'nature',
        description: 'Peaceful forest trail'
    },
    {
        src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=800&fit=crop',
        title: 'Modern Architecture',
        category: 'city',
        description: 'Contemporary buildings'
    },
    {
        src: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&h=800&fit=crop',
        title: 'Tropical Bird',
        category: 'animals',
        description: 'Colorful parrot'
    },
    {
        src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=800&fit=crop',
        title: 'Sunset Lake',
        category: 'nature',
        description: 'Serene water reflection'
    },
    {
        src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=800&fit=crop',
        title: 'City Skyline',
        category: 'city',
        description: 'Metropolitan view'
    },
    {
        src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=800&h=800&fit=crop',
        title: 'Cute Cat',
        category: 'animals',
        description: 'Adorable feline'
    }
];

// ===== DOM ELEMENTS =====
// Selecting all necessary elements from the HTML
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const filterBtns = document.querySelectorAll('.filter-btn');

// ===== STATE VARIABLES =====
// Variables to track the current state of the gallery
let currentImageIndex = 0;
let filteredImages = [...images]; // Copy of images array for filtering

// ===== INITIALIZE GALLERY FUNCTION =====
/**
 * Creates and displays all gallery items dynamically
 * This function runs when the page loads
 */
function initGallery() {
    // Clear any existing content
    gallery.innerHTML = '';
    
    // Loop through each image and create a gallery item
    images.forEach((image, index) => {
        // Create the main gallery item div
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item', 'show');
        galleryItem.dataset.category = image.category; // Store category for filtering
        galleryItem.dataset.index = index; // Store index for lightbox
        
        // Add HTML content to the gallery item
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <div class="overlay">
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            </div>
        `;
        
        // Add click event to open lightbox when image is clicked
        galleryItem.addEventListener('click', () => openLightbox(index));
        
        // Add the gallery item to the gallery container
        gallery.appendChild(galleryItem);
    });
}

// ===== FILTER FUNCTIONALITY =====
/**
 * Handles category filtering when filter buttons are clicked
 * Shows/hides images based on selected category
 */
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add 'active' class to clicked button
        btn.classList.add('active');
        
        // Get the filter value (all, nature, city, animals)
        const filterValue = btn.dataset.filter;
        
        // Get all gallery items
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        // Loop through gallery items and show/hide based on filter
        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.dataset.category === filterValue) {
                // Show items that match the filter
                item.classList.remove('hide');
                item.classList.add('show');
            } else {
                // Hide items that don't match
                item.classList.add('hide');
                item.classList.remove('show');
            }
        });
        
        // Update filtered images array for lightbox navigation
        if (filterValue === 'all') {
            filteredImages = [...images];
        } else {
            filteredImages = images.filter(img => img.category === filterValue);
        }
    });
});

// ===== LIGHTBOX FUNCTIONS =====

/**
 * Opens the lightbox modal with the selected image
 * @param {number} index - Index of the image to display
 */
function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/**
 * Closes the lightbox modal
 */
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

/**
 * Updates the lightbox with the current image data
 */
function updateLightboxImage() {
    const currentImage = images[currentImageIndex];
    lightboxImg.src = currentImage.src;
    lightboxImg.alt = currentImage.title;
    lightboxCaption.textContent = `${currentImage.title} - ${currentImage.description}`;
}

/**
 * Navigates to the previous image in the lightbox
 */
function prevImage() {
    // Use modulo to wrap around to the last image
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateLightboxImage();
}

/**
 * Navigates to the next image in the lightbox
 */
function nextImage() {
    // Use modulo to wrap around to the first image
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateLightboxImage();
}

// ===== EVENT LISTENERS =====

// Close button click
lightboxClose.addEventListener('click', closeLightbox);

// Previous button click
lightboxPrev.addEventListener('click', prevImage);

// Next button click
lightboxNext.addEventListener('click', nextImage);

// Click outside the image to close lightbox
lightbox.addEventListener('click', (e) => {
    // Only close if clicking the background, not the image
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Only handle keyboard events when lightbox is open
    if (!lightbox.classList.contains('active')) return;
    
    // Handle different key presses
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
});

// ===== INITIALIZE ON PAGE LOAD =====
// Call initGallery when the page finishes loading
initGallery();