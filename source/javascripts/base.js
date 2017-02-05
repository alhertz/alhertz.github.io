//= require 'vendor/jquery.js'
//= require 'vendor/jquery.smoothState.js'

// Smoothstate

// var $body   = $('html, body'),
//     options = {
//       prefetch: true,
//       cacheLength: 0,
//       onStart: {
//         duration: 1000,
//         render: function ($container) {
//           $container.addClass('is-exiting');
//           smoothState.restartCSSAnimations();
//           $body.animate({ 'scrollTop': 0 });
//         }
//       },
//       onReady: {
//         duration: 1000,
//         render: function ($container, $newContent) {
//           $container.html($newContent);
//           $container.removeClass('is-exiting');
//         }
//       }
//     },
//     smoothState = $('#main').smoothState(options).data('smoothState');

$(function(){
  'use strict';

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
});



//
// Google analytics
//
// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//   })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//   ga('create', 'UA-48472563-1', 'hey.al');
//   ga('send', 'pageview');
