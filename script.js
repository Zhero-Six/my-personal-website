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
        setTimeout(type, 1000); // Pause before deleting
    } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 200);
    }
}

type(); // Start the typing effect

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
checkScroll(); // Check on page load