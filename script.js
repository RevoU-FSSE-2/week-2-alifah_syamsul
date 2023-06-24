window.addEventListener('DOMContentLoaded', (event) => {
    const navList = document.querySelector(".nav-list");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    hamburgerMenu.addEventListener('click', () => {
        navList.classList.toggle("open");
    });
});
