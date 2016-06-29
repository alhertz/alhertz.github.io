//= require 'vendor/jquery/dist/jquery.js'
//= require 'vendor/ev-emitter/ev-emitter.js'
//= require 'vendor/imagesloaded/imagesloaded.js'

$(function(){
  'use strict';

  // Wait for image in left column of greeting to load
  $('.js-greeting-left-column-image').imagesLoaded( { background: true }, function() {
    $('.js-greeting-left-column-image').addClass('greeting__left-column-image--is-finished-loading');
  });

});
