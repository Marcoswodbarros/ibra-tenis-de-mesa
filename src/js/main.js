let menuIcon = document.querySelector('#header__icons--menu');
let arrowIcon = document.querySelector('#header__icons--arrow');
let nav = document.querySelector('nav');
let mainButton = document.querySelector('#main__button');

menuIcon.addEventListener("click", function () {
    menuIcon.style.display = "none";
    arrowIcon.style.display = "block";
    nav.style.display = "block";
    mainButton.style.display = "none";
})

arrowIcon.addEventListener("click", function () {
    menuIcon.style.display = "block";
    arrowIcon.style.display = "none";
    nav.style.display = "none";
    mainButton.style.display = "flex";
})