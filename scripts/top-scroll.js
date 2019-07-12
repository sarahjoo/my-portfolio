// When the user scrolls the page, execute stickIt
window.onscroll = function() {stickIt()};

// Get the header
var header = document.getElementById("stickyMenu");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickIt() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Scroll to top function
var basicScrollTop = function () {
  // This is the button
  var btnTop = document.querySelector('#goTop');
  // Button is revealed at scroll position
  var btnReveal = function () {
    var position = document.querySelector('#position');
    if (window.scrollY >= 400) {
      btnTop.classList.add('is-visible');
    } else {
      btnTop.classList.remove('is-visible');
    }
  }
  // Smooth scroll to top
  var TopscrollTo = function () {
    if(window.scrollY!=0) {
      setTimeout(function() {
        window.scrollTo(0,window.scrollY-50);
        TopscrollTo();
      }, 5);
    }
  }
  // Event listeners
  window.addEventListener('scroll', btnReveal);
  btnTop.addEventListener('click', TopscrollTo);

};

basicScrollTop();