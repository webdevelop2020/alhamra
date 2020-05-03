import App from './app.js';

const app = new App();

// jqurey

const $ = require( "jquery" )( window );

// Vendor Apllication Loader

import slick from './vendor/slick.js';

import Tween from './vendor/TweenMax.min.js';

// import Vendor Apps Scripts

import vendorApp from './vendor/vendor.js';



// const slides = document.querySelector('.slides');
//     const slidesCount = slides.childElementCount;
//     const maxLeft = (slidesCount - 1) * 100 * -1;

//     let current = 0;

//     setInterval(()=> {
//         if(current > maxLeft){
//             current -= 100;
//             slides.style.left = current + '%';

//         } else{
//             current = 0;
//             slides.style.left = 0;
//         }
//     }, 3500);


// Navigation Vanila Script

var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
    console.log('open');

});

exit.addEventListener('click', function(e) {
    nav.classList.add('hide-mobile');
    e.preventDefault();
    console.log('close');
});


