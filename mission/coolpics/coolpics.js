const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isVisible = navLinks.style.display === 'flex';
  navLinks.style.display = isVisible ? 'none' : 'flex';
});
