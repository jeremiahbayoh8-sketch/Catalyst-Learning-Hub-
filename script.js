// Get modal elements
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');

// Open Login Modal
loginBtn.addEventListener('click', function() {
  loginModal.classList.add('show');
});

// Open Register Modal
registerBtn.addEventListener('click', function() {
  registerModal.classList.add('show');
});

// Close Login Modal
closeLogin.addEventListener('click', function() {
  loginModal.classList.remove('show');
});

// Close Register Modal
closeRegister.addEventListener('click', function() {
  registerModal.classList.remove('show');
});

// Close modals when clicking outside of modal content
window.addEventListener('click', function(event) {
  if (event.target === loginModal) {
    loginModal.classList.remove('show');
  }
  if (event.target === registerModal) {
    registerModal.classList.remove('show');
  }
});

// Login Form Validation
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  if (email && password) {
    alert('Welcome back! Login successful.');
    loginForm.reset();
    loginModal.classList.remove('show');
  } else {
    alert('Please fill in all fields.');
  }
});

// Register Form Validation
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirm = document.getElementById('registerConfirm').value;
  
  if (!name || !email || !password || !confirm) {
    alert('Please fill in all fields.');
    return;
  }
  
  if (password !== confirm) {
    alert('Passwords do not match. Please try again.');
    return;
  }
  
  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }
  
  alert('Account created successfully! Welcome to Catalyst Learning Hub.');
  registerForm.reset();
  registerModal.classList.remove('show');
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Add animation to course cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.course-card, .feature-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});

console.log('Catalyst Learning Hub - Website loaded successfully!');