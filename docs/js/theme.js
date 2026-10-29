/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function($) {
'use strict';
    
    $('body').scrollspy({ target: '#navbarmain' });

 /*
     * ----------------------------------------------------------------------------------------
     *  SMOTH SCROOL JS
     * ----------------------------------------------------------------------------------------
     */

    $('a.smoth-scroll').on('click', function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 100
        }, 1000);
        e.preventDefault();
    });


   
    

  // YouTube: swap each thumbnail for the real player only when clicked
  $('.yt-facade').on('click', function (e) {
    e.preventDefault();
    var link = this;
    var src = new URL(link.getAttribute('data-embed'));
    src.searchParams.set('autoplay', '1');
    var frame = document.createElement('iframe');
    frame.className = 'video-embed';
    frame.src = src.toString();
    frame.title = link.getAttribute('data-title');
    frame.setAttribute('frameborder', '0');
    frame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    frame.setAttribute('allowfullscreen', '');
    link.parentNode.replaceChild(frame, link);
  });

  // Email: build the address in the browser so spam bots can't read it from the page
  $('.js-email').each(function () {
    var address = this.getAttribute('data-user') + '@' + this.getAttribute('data-domain');
    var a = document.createElement('a');
    a.href = 'mailto:' + address + '?subject=' + encodeURIComponent('Hello from maxochs.com');
    a.textContent = address;
    this.parentNode.replaceChild(a, this);
  });

  // Keep the footer copyright year current
  $('.current-year').text(new Date().getFullYear());

  // SCROLL TO TOP
  
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('.scroll-to-top').addClass('reveal');
    } else {
        $('.scroll-to-top').removeClass('reveal');
    }
});
 
 
/* ----------------------------------------------------------- */
    /*  Fixed header
    /* ----------------------------------------------------------- */


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.site-header').addClass('header-white');
        } else {
            $('.site-header').removeClass('header-white');
        }

    });

 
    
  // Smooth scrolling using jQuery easing
// jQuery for page scrolling feature - requires jQuery Easing plugin
    

  // Closes responsive menu when a scroll trigger link is clicked
  $('.smoth-scroll').on('click', function(event) {
    $('.navbar-collapse').collapse('hide');
  });




})(jQuery); // End of use strict
