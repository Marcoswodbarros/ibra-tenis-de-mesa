let menuIcon = document.querySelector('#header__icons--menu');
let arrowIcon = document.querySelector('#header__icons--arrow');
let nav = document.querySelector('nav');
let main = document.querySelector('main');
let body = document.querySelector('body');

menuIcon.addEventListener("click", menuOff);
arrowIcon.addEventListener("click", menuOn);

function menuOff() {
    menuIcon.style.display = "none";
    arrowIcon.style.display = "block";
    nav.style.display = "block";
    main.style.display = "none";
    // body.style.backgroundColor = "rgb(71, 85, 105)";
}

function menuOn() {
    menuIcon.style.display = "block";
    arrowIcon.style.display = "none";
    nav.style.display = "none";
    main.style.display = "flex";
    // body.style.backgroundColor = "rgb(7, 10, 82)";
}