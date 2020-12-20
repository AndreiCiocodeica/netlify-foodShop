//*Home page
//-Declaration of variables
const homePageBtn = document.getElementById('home-page-btn');
const menuPageBtn = document.getElementById('menu-page-btn');
const orderPageBtn = document.getElementById('order-page-btn');
const adminPageBtn = document.getElementById('admin-page-btn');
const contactPageBtn = document.getElementById('contact-page-btn');
const menu = document.querySelector('.menu-nav');
const navBar = document.querySelector('.nav');
const navHeight = navBar.getBoundingClientRect().height;
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');
const navLeft = menu.getBoundingClientRect().left;
//-On navbar "Contact" click event, add 'selected' class and remove the class from others
//rest elements have the class 'selected' in html directly
contactPageBtn.addEventListener('click', () => {
    contactPageBtn.classList.add('selected');
    adminPageBtn.classList.remove('selected');
    menuPageBtn.classList.remove('selected');
    homePageBtn.classList.remove('selected');
    orderPageBtn.classList.remove('selected');
});
//-Click on LOGO - redirect to Home Page
function redirectToHomePage() {
    window.location.href = 'index.html';
}
//-Smooth Scrolling when click on 'Contact'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//efecte adaugate literelor
const spans = document.querySelectorAll('h1 span');
spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animate__animated', 'rubberBand'); //adauga alte clase pestru efecte
}));
spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animate__animated', 'rubberBand');
}));

// Fix Nav when start scrolling
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
        navBar.classList.add('fix-nav');
    }
    else {
        navBar.classList.remove('fix-nav');
    }
});

// add event on hamburger icon
navOpen.addEventListener('click', () => {
    if (navLeft < 0) {
        menu.classList.add('show');
        document.body.classList.add('show');
        navBar.classList.add('show');
    }
});

// add event on close icon
navClose.addEventListener('click', () => {
    if (navLeft < 0) {
        menu.classList.remove('show');
        document.body.classList.remove('show');
        navBar.classList.remove('show');
    }
});