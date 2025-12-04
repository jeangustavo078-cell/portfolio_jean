// ===========================
// Scroll to Section
// ===========================
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        closeMobileMenu();
    }
}

// ===========================
// Mobile Menu Toggle
// ===========================
function toggleMobileMenu() {
    const nav = document.getElementById('nav');
    const btn = document.getElementById('mobileMenuBtn');
    
    nav.classList.toggle('mobile-open');
    btn.classList.toggle('active');
}

function closeMobileMenu() {
    const nav = document.getElementById('nav');
    const btn = document.getElementById('mobileMenuBtn');
    
    nav.classList.remove('mobile-open');
    btn.classList.remove('active');
}

// ===========================
// Header Scroll Effect
// ===========================
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===========================
// Current Year in Footer
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// ===========================
// Close Mobile Menu on Click Outside
// ===========================
document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav');
    const btn = document.getElementById('mobileMenuBtn');
    const header = document.querySelector('.header');
    
    // Check if click is outside header
    if (!header.contains(event.target) && nav.classList.contains('mobile-open')) {
        closeMobileMenu();
    }
});

// ===========================
// Prevent scroll when mobile menu is open
// ===========================
const nav = document.getElementById('nav');
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class') {
            if (nav.classList.contains('mobile-open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    });
});

observer.observe(nav, { attributes: true });

// ===========================
// Smooth Scroll Polyfill for older browsers
// ===========================
if (!('scrollBehavior' in document.documentElement.style)) {
    // Add smooth scroll polyfill if needed
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
