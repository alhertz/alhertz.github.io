//= require 'vendor/jquery.js'
//= require 'vendor/ev-emitter.js'
//= require 'vendor/imagesloaded.js'
//= require 'vendor/tinycolor.min.js'

//
// Variables
//
var $greetingLeftColumn = $('.js-greeting-left-column');
var $greetingLeftColumnImageContainer = $('.js-greeting-left-column-image-container');
var $greetingLeftColumnImage = $('.js-greeting-left-column-image');
var $greetingRightColumnContent = $('.js-greeting-right-column-content');
var $socialMediaLinks = $('.js-social-media-links');
var $socialMediaLinkAnchor = $('.js-social-media-links-anchor');

//
// Images loaded
//
$(function(){
  'use strict';

  $greetingLeftColumnImage.imagesLoaded({ background: true }, function() {
    $greetingLeftColumnImageContainer.addClass('greeting__left-column-image-container--is-finished-loading');
    $socialMediaLinks.addClass('social-media-links--is-ready');
    setTimeout( function() {
      $greetingRightColumnContent.addClass('greeting__right-column-content--is-visible');
    }, 500);
  });
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

//
// Firebase
//
var config = {
  apiKey: "AIzaSyA4_49yRdL-VsIz-wOFPji-dZnO9npI8pc",
  authDomain: "hey-al.firebaseapp.com",
  databaseURL: "https://hey-al.firebaseio.com",
  storageBucket: "hey-al.appspot.com",
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// When an SMS is sent and
function saveSmsToDatabase(text, fromNumber) {
  // An SMS
  var smsData = {
    text: text,
    fromNumber: fromNumber
  };

  // Get a key for a new SMS
  var newSmsKey = firebase.database().ref().child('texts').push().key;

  // Write the new SMS's data to the texts list in Firebase
  var updates = {};
  updates['/texts/' + newSmsKey] = smsData;

  return firebase.database().ref().update(updates);
}

//
// Pusher
//
var pusher = new Pusher('2061d898325156be1600');
var pusherChannel = pusher.subscribe('sms');

channel.bind('sms_received', function(data) {
  saveSmsToDatabase(data.text, data.from_number);

  var colors = tinycolor(data.text).monochromatic();

  colors.map(function(t) { return t.toHexString(); }); // [ "#ff0000", "#2a0000", "#550000", "#800000", "#aa0000", "#d40000" ]

debugger;
  $('.js-greeting-left-column').css('background-color', colors);

});

//
// Google analytics
//
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-48472563-1', 'hey.al');
  ga('send', 'pageview');
