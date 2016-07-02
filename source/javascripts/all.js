//= require 'vendor/jquery/dist/jquery.js'
//= require 'vendor/smoothstate/src/jquery.smoothState.js'
//= require 'vendor/ev-emitter/ev-emitter.js'
//= require 'vendor/imagesloaded/imagesloaded.js'

$(function(){
  'use strict';

    //
    // Smoothstate
    //

    var $body   = $('html, body'),
        options = {
          // prefetch: true,
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
  // Images loaded
  //

  $('.js-greeting-left-column-image-container').imagesLoaded( { background: true }, function() {
    $('.js-greeting-left-column-image-container').addClass('greeting__left-column-image-container--is-finished-loading');
  });

});
