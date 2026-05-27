
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


const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('navLinks');

hamburgerBtn.addEventListener('click', () => {
  // Toggle the active class on your menu to slide it in/out
  navLinks.classList.toggle('active');
  
  // Toggle active class on hamburger for the X animation
  hamburgerBtn.classList.toggle('active');
  
  // Accessibility bonus: updates screen readers on whether it's open
  const isOpen = navLinks.classList.contains('active');
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
});
