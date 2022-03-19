// js modification 4
const header = document.querySelector('header');

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        header.classList.add('navbar-scrolled')
    } else {

        header.classList.remove('navbar-scrolled')
    }
}