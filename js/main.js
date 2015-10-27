$(function(){
  'use strict';

  var $body   = $('html, body'),
      options = {
    prefetch: true,
    cacheLength: 2,
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
});