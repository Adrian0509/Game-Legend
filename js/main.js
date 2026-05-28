
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


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const charCounter = document.getElementById('charCounter');
    const formSuccess = document.getElementById('formSuccess');
    messageInput.addEventListener('input', () => {
        const currentLength = messageInput.value.length;
        charCounter.textContent = `${currentLength}/20 min`;
        if (currentLength >= 20) {
            charCounter.style.color = '#2ecc71'; 
        } else {
            charCounter.style.color = '';
        }
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        let isValid = true;
        nameError.textContent = '';
        emailError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';
        formSuccess.style.display = 'none';
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Ju lutem shkruani emrin tuaj të plotë.';
            isValid = false;
        } else if (nameInput.value.trim().length < 3) {
            nameError.textContent = 'Emri duhet të ketë të paktën 3 karaktere.';
            isValid = false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Ju lutem shkruani adresën tuaj të email-it.';
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Ju lutem shkruani një email të vlefshëm.';
            isValid = false;
        }
        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Ju lutem shkruani subjektin e mesazhit.';
            isValid = false;
        }
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Ju lutem shkruani mesazhin tuaj.';
            isValid = false;
        } else if (messageInput.value.length < 20) {
            messageError.textContent = 'Mesazhi duhet të përmbajë të paktën 20 karaktere.';
            isValid = false;
        }
        if (isValid) {
            formSuccess.style.display = 'block';
            form.reset();
            charCounter.textContent = '0/20 min';
            charCounter.style.color = '';
        }
    });
});

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    // Standardizing support for different browsers to measure exactly 300px down
    const scrolledDistance = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    if (scrolledDistance > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
