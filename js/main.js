const SUPABASE_URL = "https://hcjrptnczbbgfffdtirb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_fSnfb4i_4LZiBVCU6fSElw_u_7GViX4";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
    const formSuccess = document.getElementById('formSuccess');

    if (form) { 
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            
            let isValid = true;
            nameError.textContent = '';
            emailError.textContent = '';
            subjectError.textContent = '';
            messageError.textContent = '';

            if (nameInput.value.trim() === '') { nameError.textContent = 'Shkruani emrin.'; isValid = false; }
            if (emailInput.value.trim() === '') { emailError.textContent = 'Shkruani email.'; isValid = false; }
            if (subjectInput.value.trim() === '') { subjectError.textContent = 'Shkruani subjektin.'; isValid = false; }
            if (messageInput.value.trim().length < 20) { messageError.textContent = 'Mesazhi duhet 20 karaktere.'; isValid = false; }

            if (isValid) {
                try {
                    const { data, error } = await supabase
                        .from('contact_messages')
                        .insert([
                            { 
                                name: nameInput.value.trim(), 
                                email: emailInput.value.trim(), 
                                subject: subjectInput.value.trim(), 
                                message: messageInput.value.trim() 
                            }
                        ]);

                    if (error) throw error;

                    formSuccess.style.display = 'block';
                    form.reset();
                    if (document.getElementById('charCounter')) {
                        document.getElementById('charCounter').textContent = '0/20 min';
                    }

                } catch (err) {
                    console.error("Gabim gjatë dërgimit:", err.message);
                    alert("Ndodhi një gabim gjatë dërgimit të mesazhit.");
                }
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');

    const cookieChoice = localStorage.getItem('cookieConsent');

    if (!cookieChoice) {
        cookieBanner.style.display = 'block';
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        hideBanner();
    });

    declineBtn.addEventListener('click', () => {

        localStorage.setItem('cookieConsent', 'declined');

        hideBanner();
    });

    function hideBanner() {
        cookieBanner.style.transition = 'all 0.3s ease';
        cookieBanner.style.opacity = '0';
        cookieBanner.style.transform = 'translateY(100%)';
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 300);
    }
});
