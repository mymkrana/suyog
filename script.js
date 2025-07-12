// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
}

// Header Scroll Effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Slider Functionality
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto slide change
setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
}, 5000);

// Slider arrows
document.getElementById('prevSlide').addEventListener('click', () => {
    let prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevSlide);
});

document.getElementById('nextSlide').addEventListener('click', () => {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
});

// Animation for Karnal section
const karnalImage = document.querySelector('.karnal-image');
const karnalText = document.querySelector('.karnal-text');

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Add animation classes when section comes into view
function handleScroll() {
    if (isInViewport(karnalImage)) {
        karnalImage.classList.add('animated');
        karnalText.classList.add('animated');
    }
}

// Initial check
handleScroll();

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
}); 

// Volunteer Modal Popup Logic
const volunteerModal = document.getElementById('volunteerModal');
const openVolunteerBtn = document.querySelector('.cta .btn');
const closeVolunteerBtn = document.getElementById('closeVolunteerModal');

if (openVolunteerBtn && volunteerModal && closeVolunteerBtn) {
    openVolunteerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        volunteerModal.style.display = 'flex';
    });
    closeVolunteerBtn.addEventListener('click', function() {
        volunteerModal.style.display = 'none';
    });
    volunteerModal.addEventListener('click', function(e) {
        if (e.target === volunteerModal) {
            volunteerModal.style.display = 'none';
        }
    });
} 

// Language Switcher Logic
const langHiBtns = [
  document.getElementById('lang-hi-desktop'),
  document.getElementById('lang-hi-mobile')
].filter(Boolean);
const langEnBtns = [
  document.getElementById('lang-en-desktop'),
  document.getElementById('lang-en-mobile')
].filter(Boolean);

function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        if (el.getAttribute('data-lang') === lang) {
            el.style.display = '';
        } else {
            el.style.display = 'none';
        }
    });
    if (lang === 'hi') {
        langHiBtns.forEach(btn => btn.classList.add('active'));
        langEnBtns.forEach(btn => btn.classList.remove('active'));
    } else {
        langEnBtns.forEach(btn => btn.classList.add('active'));
        langHiBtns.forEach(btn => btn.classList.remove('active'));
    }
}
if (langHiBtns.length && langEnBtns.length) {
    langHiBtns.forEach(btn => btn.addEventListener('click', function() {
        setLanguage('hi');
    }));
    langEnBtns.forEach(btn => btn.addEventListener('click', function() {
        setLanguage('en');
    }));
    // Default: Hindi
    setLanguage('hi');
} 

// Floating Dots Animation
(function() {
  const dotsContainer = document.querySelector('.bg-dots');
  if (!dotsContainer) return;
  const isMobile = window.innerWidth < 700;
  const dotCount = isMobile ? 8 : 14;
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('div');
    dot.className = 'bg-dot';
    const size = isMobile ? (Math.random() * 16 + 16) : (Math.random() * 38 + 22); // 16-32px mobile, 22-60px desktop
    dot.style.width = size + 'px';
    dot.style.height = size + 'px';
    dot.style.left = (Math.random() * 100) + 'vw';
    dot.style.bottom = (-Math.random() * 20) + 'vh';
    dot.style.animationDuration = (14 + Math.random() * 10) + 's';
    dot.style.animationDelay = (-Math.random() * 18) + 's';
    dotsContainer.appendChild(dot);
  }
})(); 

// Event Request Modal Popup Logic
const eventRequestModal = document.getElementById('eventRequestModal');
const openEventRequestBtn = document.getElementById('openEventRequestBtn');
const closeEventRequestModal = document.getElementById('closeEventRequestModal');

if (openEventRequestBtn && eventRequestModal && closeEventRequestModal) {
    openEventRequestBtn.addEventListener('click', function(e) {
        e.preventDefault();
        eventRequestModal.style.display = 'flex';
    });
    closeEventRequestModal.addEventListener('click', function() {
        eventRequestModal.style.display = 'none';
    });
    eventRequestModal.addEventListener('click', function(e) {
        if (e.target === eventRequestModal) {
            eventRequestModal.style.display = 'none';
        }
    });
} 