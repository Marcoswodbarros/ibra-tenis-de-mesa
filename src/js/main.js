let menuIcon = document.querySelector('#header__icons--menu');
let arrowIcon = document.querySelector('#header__icons--arrow');
let nav = document.querySelector('nav');
let lg = window.matchMedia("(min-width:1024px)");

menuIcon.addEventListener("click", menuOff);
arrowIcon.addEventListener("click", menuOn);
lg.addEventListener("change", menuOff, menuOn);

function menuOff () {
    if (window.matchMedia("(min-width:1024px)").matches) {
        menuIcon.style.display = "none";
        arrowIcon.style.display = "none";
        nav.style.display = "block";
        
    }

    else {
        menuIcon.style.display = "none";
        arrowIcon.style.display = "block";
        nav.style.display = "block";
        location.reload();
    } 
}

function menuOn () {
    if (window.matchMedia("(min-width:1024px)").matches) {
        menuIcon.style.display = "none";
        arrowIcon.style.display = "none";
        nav.style.display = "block";
    }

    else {
        menuIcon.style.display = "block";
        arrowIcon.style.display = "none";
        nav.style.display = "none";
    }
}