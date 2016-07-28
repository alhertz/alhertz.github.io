//= require 'vendor/jquery.js'
//= require 'vendor/ev-emitter.js'
//= require 'vendor/imagesloaded.js'

$(function(){
  'use strict';

  //
  // Images loaded
  //

  $('.js-greeting-left-column-image-container').imagesLoaded( { background: true }, function() {
    $('.js-greeting-left-column-image-container').addClass('greeting__left-column-image-container--is-finished-loading');
    $('.js-greeting-right-column-content').addClass('greeting__right-column-content--is-visible');
  });

});

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


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-48472563-1', 'hey.al');
  ga('send', 'pageview');
