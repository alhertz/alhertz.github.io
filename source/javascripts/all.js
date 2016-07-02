//= require 'vendor/jquery/dist/jquery.js'
//= require 'vendor/smoothstate/src/jquery.smoothState.js'
//= require 'vendor/ev-emitter/ev-emitter.js'
//= require 'vendor/imagesloaded/imagesloaded.js'

$(function(){
  'use strict';

  //
  // Images loaded
  //

  $('.js-greeting-left-column-image-container').imagesLoaded( { background: true }, function() {
    $('.js-greeting-left-column-image-container').addClass('greeting__left-column-image-container--is-finished-loading');
  });

});
