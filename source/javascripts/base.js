//= require 'vendor/jquery.js'
//= require 'vendor/jquery.smoothState.js'
//= require 'vendor/ev-emitter.js'
//= require 'vendor/imagesloaded.js'
//= require 'vendor/tinycolor.min.js'

// Smoothstate
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
      },
      onAfter: function() {
        runHomePageIntroAnimation();
      }
    },
smoothState = $('#main').smoothState(options).data('smoothState');


function runHomePageIntroAnimation() {
  //
  // Variables
  //
  var $greetingLeftColumnImageContainer = $('.js-greeting-left-column-image-container');
  var $greetingLeftColumnImage = $('.js-greeting-left-column-image');
  var $greetingRightColumn = $('.js-greeting-right-column');
  var $greetingRightColumnContent = $('.js-greeting-right-column-content');
  var $greetingLoadingIndicator = $('.js-greeting-loading-indicator');
  var $socialMediaLinks = $('.js-social-media-links');
  var $socialMediaLinkAnchor = $('.js-social-media-links-anchor');

  //
  // Images loaded
  //
  $greetingLeftColumnImage.imagesLoaded({ background: true }, function() {
    $greetingLeftColumnImageContainer.addClass('greeting__left-column-image-container--is-finished-loading');
    $greetingRightColumn.addClass('greeting__right-column--is-visible')
    $socialMediaLinks.addClass('social-media-links--is-visible');
    $greetingLoadingIndicator.addClass('greeting__loading-indicator--is-hidden');
  });

  //
  // Social media component
  //
  $socialMediaLinkAnchor.mouseover(function() {
    $(this).addClass('social-media-links__anchor--is-focused');
    $socialMediaLinks.addClass('social-media-links--has-hovered-anchor');
  });

  $socialMediaLinkAnchor.mouseout(function() {
    $(this).removeClass('social-media-links__anchor--is-focused');
    $socialMediaLinks.removeClass('social-media-links--has-hovered-anchor');
  });
};


//
// Google analytics
//
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-48472563-1', 'hey.al');
  ga('send', 'pageview');
