let menuIcon = document.querySelector('#header__icons--menu');
let arrowIcon = document.querySelector('#header__icons--arrow');
let nav = document.querySelector('nav');
let subtitulo = document.querySelector('#main__subtitulo');
let titulo = document.querySelector('#main__titulo');

menuIcon.addEventListener("click", menuOff);
arrowIcon.addEventListener("click", menuOn);

function menuOff() {
    menuIcon.style.display = "none";
    arrowIcon.style.display = "block";
    nav.style.display = "block";
    subtitulo.style.display = "none";
    titulo.style.display = "none";
}

function menuOn() {
    menuIcon.style.display = "block";
    arrowIcon.style.display = "none";
    nav.style.display = "none";
    subtitulo.style.display = "block";
    titulo.style.display = "block";
}