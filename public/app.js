const menu = document.querySelector('3mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const mainBtn = document.querySelector()
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function toSwipe() {
    document.getElementById('#mainbtn').onclick = function () {
        location.href = ""
    }
}