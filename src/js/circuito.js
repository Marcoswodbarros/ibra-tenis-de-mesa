let menuIcon = document.querySelector('#header__icons--menu');
let arrowIcon = document.querySelector('#header__icons--arrow');
let circuitoButton = document.querySelector('#circuito__main--link');

menuIcon.addEventListener("click", menuOff);
arrowIcon.addEventListener("click", menuOn);

function menuOff() {
    menuIcon.style.display = "none";
    arrowIcon.style.display = "block";
    titulo.style.display = "none";
}

function menuOn() {
    menuIcon.style.display = "block";
    arrowIcon.style.display = "none";
    titulo.style.display = "none";
}