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

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    resetForm();
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Validation Functions
function validateName() {
    const value = nameInput.value.trim();
    if (value.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        nameError.classList.add('active');
        nameInput.classList.add('invalid');
        nameInput.classList.remove('valid');
        return false;
    } else {
        nameError.textContent = '';
        nameError.classList.remove('active');
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
        return true;
    }
}

function validateEmail() {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        emailError.textContent = 'Please enter a valid email';
        emailError.classList.add('active');
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
        return false;
    } else {
        emailError.textContent = '';
        emailError.classList.remove('active');
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
        return true;
    }
}

function validateMessage() {
    const value = messageInput.value.trim();
    if (value.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        messageError.classList.add('active');
        messageInput.classList.add('invalid');
        messageInput.classList.remove('valid');
        return false;
    } else {
        messageError.textContent = '';
        messageError.classList.remove('active');
        messageInput.classList.remove('invalid');
        messageInput.classList.add('valid');
        return true;
    }
}

function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    submitBtn.disabled = !(isNameValid && isEmailValid && isMessageValid);
}

// Real-time Validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

// Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert('Message sent! (This is a demo—add real functionality here.)');
        modal.style.display = 'none';
        contactForm.reset();
        resetForm();
    }
});

// Reset Form State
function resetForm() {
    nameInput.classList.remove('valid', 'invalid');
    emailInput.classList.remove('valid', 'invalid');
    messageInput.classList.remove('valid', 'invalid');
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    nameError.classList.remove('active');
    emailError.classList.remove('active');
    messageError.classList.remove('active');
    submitBtn.disabled = true;
}
// (Existing code up to "Scroll Animation for About Section" remains unchanged)

// Contact Form Modal and Validation
const openModalBtn = document.getElementById('open-contact-form');
const modal = document.getElementById('contact-modal');
const closeModal = document.querySelector('.close-modal');
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const emailConfirmInput = document.getElementById('email-confirm');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const emailConfirmError = document.getElementById('email-confirm-error');
const messageError = document.getElementById('message-error');
const submitBtn = contactForm.querySelector('button[type="submit"]');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    resetForm();
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Validation Functions
function validateName() {
    const value = nameInput.value.trim();
    if (value.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        nameError.classList.add('active');
        nameInput.classList.add('invalid');
        nameInput.classList.remove('valid');
        return false;
    } else {
        nameError.textContent = '';
        nameError.classList.remove('active');
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
        return true;
    }
}

function validateEmail() {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        emailError.textContent = 'Please enter a valid email';
        emailError.classList.add('active');
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
        return false;
    } else {
        emailError.textContent = '';
        emailError.classList.remove('active');
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
        validateEmailConfirm(); // Trigger confirmation check when email changes
        return true;
    }
}

function validateEmailConfirm() {
    const emailValue = emailInput.value.trim();
    const confirmValue = emailConfirmInput.value.trim();
    if (confirmValue === '') {
        emailConfirmError.textContent = 'Please confirm your email';
        emailConfirmError.classList.add('active');
        emailConfirmInput.classList.add('invalid');
        emailConfirmInput.classList.remove('valid');
        return false;
    } else if (confirmValue !== emailValue) {
        emailConfirmError.textContent = 'Emails do not match';
        emailConfirmError.classList.add('active');
        emailConfirmInput.classList.add('invalid');
        emailConfirmInput.classList.remove('valid');
        return false;
    } else {
        emailConfirmError.textContent = '';
        emailConfirmError.classList.remove('active');
        emailConfirmInput.classList.remove('invalid');
        emailConfirmInput.classList.add('valid');
        return true;
    }
}

function validateMessage() {
    const value = messageInput.value.trim();
    if (value.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters';
        messageError.classList.add('active');
        messageInput.classList.add('invalid');
        messageInput.classList.remove('valid');
        return false;
    } else {
        messageError.textContent = '';
        messageError.classList.remove('active');
        messageInput.classList.remove('invalid');
        messageInput.classList.add('valid');
        return true;
    }
}

function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isEmailConfirmValid = validateEmailConfirm();
    const isMessageValid = validateMessage();
    submitBtn.disabled = !(isNameValid && isEmailValid && isEmailConfirmValid && isMessageValid);
    return isNameValid && isEmailValid && isEmailConfirmValid && isMessageValid;
}

// Real-time Validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', () => {
    validateEmail();
    validateEmailConfirm(); // Re-check confirmation when email changes
});
emailConfirmInput.addEventListener('input', validateEmailConfirm);
messageInput.addEventListener('input', validateMessage);

// Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert('Message sent! (This is a demo—add real functionality here.)');
        modal.style.display = 'none';
        contactForm.reset();
        resetForm();
    }
});

// Reset Form State
function resetForm() {
    nameInput.classList.remove('valid', 'invalid');
    emailInput.classList.remove('valid', 'invalid');
    emailConfirmInput.classList.remove('valid', 'invalid');
    messageInput.classList.remove('valid', 'invalid');
    nameError.textContent = '';
    emailError.textContent = '';
    emailConfirmError.textContent = '';
    messageError.textContent = '';
    nameError.classList.remove('active');
    emailError.classList.remove('active');
    emailConfirmError.classList.remove('active');
    messageError.classList.remove('active');
    submitBtn.disabled = true;
}
// (Existing code remains unchanged)

// Particle Animation
function createParticles() {
    const particleContainer = document.getElementById('particles');
    const particleCount = 50; // Adjust for performance vs. density

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particleContainer.appendChild(particle);

        // Randomize properties
        const size = Math.random() * 4 + 1;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const duration = Math.random() * 20 + 10;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.background = `rgba(0, 212, 255, ${Math.random() * 0.5 + 0.2})`;
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.animation = `float ${duration}s infinite ease-in-out`;
        
        // Random delay to stagger animations
        particle.style.animationDelay = `${Math.random() * 5}s`;
    }
}

// Particle Animation Keyframes (added via CSS below, but called here)
createParticles();

// Resize Handler to Recreate Particles
window.addEventListener('resize', () => {
    document.getElementById('particles').innerHTML = '';
    createParticles();
});