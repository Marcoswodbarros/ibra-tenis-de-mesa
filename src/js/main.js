let menuIcon = document.querySelector('#header__icons--menu');
let arrowIcon = document.querySelector('#header__icons--arrow');

menuIcon.addEventListener("click", function () {
    menuIcon.style.display = "none";
    arrowIcon.style.display = "block";
})

arrowIcon.addEventListener("click", function () {
    menuIcon.style.display = "block";
    arrowIcon.style.display = "none";
})