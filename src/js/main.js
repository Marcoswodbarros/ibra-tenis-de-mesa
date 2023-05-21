let menuIcon = document.querySelector('#header__icons--menu');
let arrowIcon = document.querySelector('#header__icons--arrow');
let nav = document.querySelector('nav');
let main = document.querySelector('#main__intro');
let titulo = document.querySelector('#main__titulo');
let circuitoButton = document.querySelector('#circuito__main--link');
let patrocinadores = document.querySelector('#main__patrocinadores');
let footer = document.querySelector('footer');

menuIcon.addEventListener("click", menuOff);
arrowIcon.addEventListener("click", menuOn);

function menuOff() {
    menuIcon.style.display = "none";
    arrowIcon.style.display = "block";
    nav.style.display = "block";
    main.style.display = "none";
    patrocinadores.style.display = "none";
    footer.style.display = "none";
}

function menuOn() {
    menuIcon.style.display = "block";
    arrowIcon.style.display = "none";
    nav.style.display = "none";
    main.style.display = "flex";
    patrocinadores.style.display = "flex";
    footer.style.display = "flex";
}