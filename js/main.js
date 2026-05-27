
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
        // Toggle the .show class on the nav menu
        const isOpen = navLinks.classList.toggle('show');
        
        // Update accessibility attribute (true if open, false if closed)
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Optional: Close the menu when a link inside it is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        });
    });
});
