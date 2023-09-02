// dark mode
window.matchMedia(("prefers - color - scheme: dark")).matches


// Humberger Menu
const menu = document.getElementById("humberger")
const actions = document.getElementById("actions")
const nav = document.getElementById("nav")

menu.addEventListener("click", () => {
    handelmenu();
});

const handelmenu = () => {
    menu.classList.toggle("activeOne");
    actions.classList.toggle("activeTwo");
    nav.classList.toggle("activeThree")
}
//End Humberger Menu

// week menu
const week = document.getElementById("week");
const week2 = document.getElementById("week2");
const week3 = document.getElementById("week3");
let plus = document.getElementById("plus");
let plus2 = document.getElementById("plus2")

// Retrieve the value of 'num' from local storage if it exists
let num = localStorage.getItem("num") ? parseInt(localStorage.getItem("num")) : 0;
plus.innerText = num;
plus2.innerText = num;


week.addEventListener("click", () => {
    weekMenu()
});

let weekMenu = () => {
    num++;
    num = (num) ? num : 0;
    plus.innerText = num;
    plus2.innerText = num;
    // Store the updated 'num' value in local storage
    localStorage.setItem("num", num);
    openPopupCart()
}

week2.addEventListener("click", () => {
    weekMenu()
});

week3.addEventListener("click", () => {
    weekMenu()
});
// end week menu

// pop up in cart
let popupCart = document.getElementById('pop-up-cart')

function openPopupCart() {
    popupCart.classList.add("open-popup-cart")
}
function closedPopupCart() {
    popupCart.classList.remove("open-popup-cart")
}

// end pop up in cart


// view menu pop up
let popupViewMenu = document.getElementById('pop-up-View-menu')

// this code when click on pop up all page hide
const main = document.getElementById('main');

function openPopupMenu() {
    popupViewMenu.classList.add("open-popup-menu")
    main.classList.add('main-hidden')
}

window.addEventListener("load", () => {
    popupViewMenu.classList.add("open-popup-menu")
    main.classList.add('main-hidden')
})

function closedPopupMenu() {
    popupViewMenu.classList.remove("open-popup-menu")
    main.classList.remove('main-hidden')
}
//end view menu pop up

// contact us
let popupContact = document.getElementById('pop-up-contact')

function openPopupContact() {
    popupContact.classList.add("open-popup-contact")
}

function closedPopupContact() {
    popupContact.classList.remove("open-popup-contact")
}
//end contact us

// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 500,
    // effect: 'coverflow',
    mousewheel: {
        invert: false,
        forceToAxis: true,
        releaseOnEdges: true
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//end swiper

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
}

);

sr.reveal(`.home-data, .home-img,
    .about-data, .about-img,
    .services-content, .menu-content,
    .app-data, .app-img,
    .contact-data, .contact-button,
    .footer-content`, {
    interval: 200
}

)
//end Scroll Reveal