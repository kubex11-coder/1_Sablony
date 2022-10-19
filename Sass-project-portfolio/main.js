const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const navMenu = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.menu-nav__item');


// let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
    menuNav.classList.toggle('open');
    menuItems.forEach(item => item.classList.toggle('open'));
    
                //způsob pro true a false podmínku - toggle je jednodušší.
    // if(!showMenu) {
    //     hamburger.classList.add('open');

    //     showMenu = true;
    // } else {
    //     hamburger.classList.remove('open');

    //     showMenu = false;
    // }
}