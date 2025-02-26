// Smooth Scrolling for Nav Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Typing Effect for Hero Section
const phrases = ["My World", "Your Journey", "The Future"];
let phraseIndex = 0;
let charIndex = 0;
const typingText = document.getElementById('typing-text');
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (!isDeleting && charIndex <= currentPhrase.length) {
        typingText.textContent = currentPhrase.substring(0, charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex >= 0) {
        typingText.textContent = currentPhrase.substring(0, charIndex);
        charIndex--;
        setTimeout(type, 50);
    } else if (!isDeleting && charIndex > currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 200);
    }
}

type();

// Scroll Animation for About Section
const aboutSection = document.getElementById('about');

function checkScroll() {
    const rect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight * 0.75) {
        aboutSection.classList.add('visible');
    }
}

window.addEventListener('scroll', checkScroll);
checkScroll();

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}

// Scroll Progress Bar
const progressBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;
});

// Contact Form Modal
const openModalBtn = document.getElementById('open-contact-form');
const modal = document.getElementById('contact-modal');
const closeModal = document.querySelector('.close-modal');
const contactForm = document.getElementById('contact-form');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo—add real functionality here.)');
    modal.style.display = 'none';
    contactForm.reset();
});