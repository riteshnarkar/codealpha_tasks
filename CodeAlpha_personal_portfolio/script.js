// ==================== MOBILE MENU TOGGLE ====================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu icon
    const bars = menuToggle.querySelectorAll('.bar');
    bars[0].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(-45deg) translate(-5px, 6px)' 
        : 'none';
    bars[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    bars[2].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(45deg) translate(-5px, -6px)' 
        : 'none';
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const bars = menuToggle.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// ==================== SMOOTH SCROLLING FOR NAVIGATION LINKS ====================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== SCROLL ANIMATIONS ====================
// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    observer.observe(element);
});

// ==================== HEADER SCROLL EFFECT ====================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolling
    if (currentScroll > 50) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ==================== ACTIVE NAVIGATION HIGHLIGHT ====================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to current section's nav link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
                activeLink.style.color = 'var(--primary-color)';
            }
        }
    });
});

// ==================== SKILL CARDS HOVER EFFECT ====================
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== PROJECT CARDS ANIMATION ====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    // Add staggered animation delay
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Hover effects
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== TYPING EFFECT FOR HERO SUBTITLE (OPTIONAL) ====================
const heroSubtitle = document.querySelector('.hero-subtitle');
const subtitleText = heroSubtitle.textContent;
heroSubtitle.textContent = '';

let charIndex = 0;

function typeText() {
    if (charIndex < subtitleText.length) {
        heroSubtitle.textContent += subtitleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    }
}

// Start typing effect after a short delay
setTimeout(typeText, 500);

// ==================== SCROLL TO TOP BUTTON (BONUS FEATURE) ====================
// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollTopBtn);

// Style the button (inline styles for simplicity)
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect for scroll to top button
scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
    scrollTopBtn.style.backgroundColor = 'var(--primary-dark)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
    scrollTopBtn.style.backgroundColor = 'var(--primary-color)';
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Welcome to my Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ using HTML, CSS & JavaScript', 'color: #6b7280; font-size: 14px;');

// ==================== PERFORMANCE OPTIMIZATION ====================
// Lazy load images if they exist (placeholder for future implementation)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}