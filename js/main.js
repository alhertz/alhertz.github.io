$(function(){
  'use strict';

  //
  // Smoothstate magic
  //

  var $body   = $('html, body'),
      options = {
    prefetch: true,
    cacheLength: 2,
    pageCacheSize: 4,
    onStart: {
      duration: 1500,
      render: function ($container) {
        $container.addClass('is-exiting');
        smoothState.restartCSSAnimations();
        $body.animate({ 'scrollTop': 0 });
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        $container.html($newContent);
        $container.removeClass('is-exiting');
      }
    }
  },

  smoothState = $('#main').smoothState(options).data('smoothState');

  //
  // Introduction of greeter once my picture has been loaded :)
  //

  $('.js-alternative-greeter-wrapper').imagesLoaded( function() {
    $('.js-alternative-greeter-wrapper').addClass('is-showing');
  });

  //
  // Size alternative greeter (homepage)
  //

  function setGreeterDimensions() {
    $('.js-alternative-greeter').css({
      'height': (($(window).height())-60) + 'px',
      'width': (($(window).width())-60) + 'px'
    });
  }

  setGreeterDimensions();

  $(window).resize(function(){
    setGreeterDimensions();
  });

  //
  // Nifty greeter hoverstate
  //

  $('.js-alternative-greeter-anchor').mouseover(function() {
    $(this).addClass('is-focused');
    $('.js-alternative-greeter-left-column').addClass('is-blurred');
  });

  $('.js-alternative-greeter-anchor').mouseout(function() {
    $(this).removeClass('is-focused');
    $('.js-alternative-greeter-left-column').removeClass('is-blurred');
  });
});