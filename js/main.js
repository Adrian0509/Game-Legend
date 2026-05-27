
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
  // Check if the menu is hidden or has no inline display style yet
  if (navLinks.style.display === 'none' || navLinks.style.display === '') {
    // Force the menu to show up and use a vertical stack layout
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    
    // Optional: Adds class for an 'X' animation if you have one in your CSS
    hamburgerBtn.classList.add('active'); 
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  } else {
    // Hide the menu again
    navLinks.style.display = 'none';
    
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
});
