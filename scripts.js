// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const nav = document.querySelector('nav ul');
    const toggleButton = document.querySelector('.toggle-menu');
    
    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav.classList.contains('open')) {
                nav.classList.remove('open');
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Initialize project slider
    $('.projects-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true
    });
    
    // Gallery lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-image');
    const captionText = document.querySelector('.caption-text');
    const closeBtn = document.querySelector('.close');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const caption = this.querySelector('.gallery-caption').textContent;
            
            modal.style.display = 'block';
            modalImg.src = imgSrc;
            captionText.textContent = caption;
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-category, .project-slide, .experience-item, .gallery-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.skill-category, .project-slide, .experience-item, .gallery-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s, transform 0.5s';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});
