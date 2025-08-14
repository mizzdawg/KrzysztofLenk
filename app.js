const menuIcon = document.querySelector('.nav-menu-icon');
const xIcon = document.querySelector('.nav-x-icon');
const mobileNav = document.querySelector('.nav-list-mobile-container');

function toggleNavMenu(el) {
    el.classList.toggle('nav-active')
}

menuIcon.addEventListener('click', function () {
    toggleNavMenu(mobileNav)
})

xIcon.addEventListener('click', function () {
    toggleNavMenu(mobileNav)
})