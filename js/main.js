
const toggleBtn = document.getElementById('theme-toggle');

// Check if the user previously turned on light mode
const isLightMode = localStorage.getItem('lightMode') === 'enabled';

// If they did, apply it right away
if (isLightMode) {
  document.body.classList.add('light-mode');
}

// Toggle light mode on click
toggleBtn.addEventListener('click', () => {
  // Toggle the class on the body
  document.body.classList.toggle('light-mode');
  
  // Check if it's currently active after the toggle
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('lightMode', 'enabled');
  } else {
    localStorage.setItem('lightMode', 'disabled');
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('navLinks');

    // Toggle menu visibility on click
    hamburgerBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('show');
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
    }); 
});


document.addEventListener('DOMContentLoaded', () => {

    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null,         
        rootMargin: '0px',  
        threshold: 0.15     
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    
    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });
});
