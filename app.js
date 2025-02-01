// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

// Close menu on click
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(17, 34, 64, 0.95)';
        nav.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        nav.style.background = '#112240';
        nav.style.boxShadow = 'none';
    }
});


// في ملف app.js
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'rotate(3deg)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'rotate(0deg)';
    });
});