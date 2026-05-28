
const toggleBtn = document.getElementById('theme-toggle');
const isLightMode = localStorage.getItem('lightMode') === 'enabled';
if (isLightMode) {
  document.body.classList.add('light-mode');
}
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    localStorage.setItem('lightMode', 'enabled');
  } else {
    localStorage.setItem('lightMode', 'disabled');
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('navLinks');
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


document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const selectedFilter = button.getAttribute('data-filter');
            serviceCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (selectedFilter === 'all' || cardCategory === selectedFilter) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
});
 
