document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.getElementById('close-button');

    const mobileNavBar = document.getElementById('mobile-nav');

    const mobileNavUl = document.getElementById('mobile-nav-ul');
  
    const menuBar = document.getElementById('menu-bar');
  
    menuBar.addEventListener('click', () => {
      mobileNavBar.style.display = 'flex';
      mobileNavUl.style.display = 'flex';
    });
  
    closeButton.addEventListener('click', () => {
      mobileNavBar.style.display = 'none';
      mobileNavUl.style.display = 'none';
    });
})