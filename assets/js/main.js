// Main application entry point
document.addEventListener('DOMContentLoaded', () => {
    // Initialize year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    // Initialize all components
    initParticleSystem();
    loadDynamicContent();
    smoothScroll();
    initScrollAnimations();
    initCookieConsent();
    
    // Setup form handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
});

// Load all dynamic content
function loadDynamicContent() {
    console.log('Loading dynamic content...');
    
    // Render each section
    renderAnalysisSection();
    renderDiseaseSection();
    renderLongevitySection();
    renderOncologySection();
    renderCellTherapiesSection();
    renderTeamMembers();
    renderKnowledgeSection();
}

// Smooth scrolling for anchor links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Handle contact form submission
async function handleContactFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (!data.email || !data.message) {
        alert('Please fill in all fields.');
        return;
    }

    console.log('Form data:', data);
    // In a real scenario, you'd POST this to a serverless function or service
    
    // Simulate API call success
    form.reset();
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sent!';
    submitButton.disabled = true;

    setTimeout(() => {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }, 3000);
}

// Cookie consent handler
function initCookieConsent() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    
    if (!cookieBanner || !acceptButton) return;
    
    // Check if cookies have been accepted
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    if (!cookiesAccepted) {
        // Show the banner after a small delay
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }
    
    // Handle accept button click
    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
        
        // Hide completely after transition
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 300);
    });
}

// Scroll animations
function initScrollAnimations() {
    const sections = document.querySelectorAll('main section');
    const options = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
} 