/*!
 * Food Landing - v1.0 - 2017-02-07
 * Copyright (c) 2017 Food Landing
 */

/*! Ease scrolling */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/*! Activate animate.css for page fadeIn */
$('body').addClass('animated fadeIn');

/*! Disable scroll on map */
$(document).ready(function () {
    $('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready
    
    $('#overlay').on("mouseup",function(){          // lock it when mouse up
        $('#map').addClass('scrolloff'); 
        //somehow the mouseup event doesn't get call...
    });
    $('#overlay').on("mousedown",function(){        // when mouse down, set the mouse events free
        $('#map').removeClass('scrolloff');
    });
    $("#map").mouseleave(function () {              // becuase the mouse up doesn't work... 
        $('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
                                                    // or you can do it on some other event
    });
    
});