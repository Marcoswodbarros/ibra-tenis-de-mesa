let menuIcon = document.querySelector('#header__icons--menu');
let arrowIcon = document.querySelector('#header__icons--arrow');
let nav = document.querySelector('nav');
let main = document.querySelector('main');

menuIcon.addEventListener("click", menuOff);
arrowIcon.addEventListener("click", menuOn);

function menuOff() {
    menuIcon.style.display = "none";
    arrowIcon.style.display = "block";
    nav.style.display = "block";
    main.style.display = "none";
}

function menuOn() {
    menuIcon.style.display = "block";
    arrowIcon.style.display = "none";
    nav.style.display = "none";
    main.style.display = "block";
}