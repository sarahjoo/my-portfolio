// When the user scrolls the page, execute stickIt
window.onscroll = function() {stickIt()};

// Get the navbar
var navbar = document.getElementById("stickyMenu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickIt() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Get the button
var mybutton = document.getElementById("goTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Mobile menu on scroll
var scrollMenu = function () {
  // This is the button
  var hamburger = document.querySelector('#menuToggle');
  // Button is revealed at scroll position
  var btnReveal = function () {
    var position = document.querySelector('#position');
    if (window.scrollY >= 900) {
      hamburger.classList.add('is-visible');
    } else {
      hamburger.classList.remove('is-visible');
    }
  }
  // Event listeners
  window.addEventListener('scroll', btnReveal);
};

scrollMenu();
