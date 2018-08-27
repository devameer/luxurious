/* ------------------------------------------------
  Project:   Oveltyshop - ECommerce Responsive HTML5 Template
  Author:    ThemeHt
------------------------------------------------ */
/* ------------------------
    Table of Contents

  1. Predefined Variables
  2. Scroll to top
  3. Scrolling Animation
  4. HT Window load and functions

------------------------ */
 
"use strict";

/*------------------------------------
  HT Predefined Variables
--------------------------------------*/
var $window = $(window),
	  $document = $(document),
	  $body = $('body');

//Check if function exists
$.fn.exists = function () {
	return this.length > 0;
};
 

/*------------------------------------
  HT Scroll to top
--------------------------------------*/
function scrolltop() {
  var $goToTop = $('#scroll-top');
  $goToTop.hide();
  $window.on('scroll', function () {
    if ($window.scrollTop() > 100) $goToTop.fadeIn();
    else $goToTop.fadeOut();
  });
  $goToTop.on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
};

/*------------------------------------
  HT Scrolling Animation
--------------------------------------*/
function scrolling() {
    $('.nav-item a, .page-scroll').bind('click', function(event) {
        var $anchor = $(this);
    var hg = $('header').height();
    var scroll_h = $($anchor.attr('href')).offset().top;
        $('html, body').stop().animate({
            scrollTop: scroll_h
        }, 1200);
        event.preventDefault();
    });
};

/*------------------------------------
  HT Wow Animation
--------------------------------------*/
function wowanimation() {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    wow.init();
}


/*------------------------------------
  HT Window load and functions
--------------------------------------*/
$(document).ready(function() {
    scrolltop(),
    scrolling();
});


$(window).on('load', function() {
    wowanimation();
});


