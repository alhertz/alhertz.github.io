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

  $('.js-alternative-greeter-background').imagesLoaded({ background: true })
    .always( function( instance ) {
      $('.js-alternative-greeter-wrapper').addClass('is-showing');
    })
    .done( function( instance ) {
      $('.js-alternative-greeter-background').addClass('has-finished-loading');
    })
    .fail( function() {
      // todo – build failure state
    })
    .progress( function( instance, image ) {
      // var result = image.isLoaded ? 'loaded' : 'broken';
      // console.log( 'image is ' + result + ' for ' + image.img.src );
      // todo – build progress state
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

  $('.js-alternative-greeter-wrapper').addClass('is-showing');

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