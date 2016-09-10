//= require 'vendor/jquery.js'
//= require 'vendor/ev-emitter.js'
//= require 'vendor/imagesloaded.js'

//
// Images loaded
//
$(function(){
  'use strict';

  $('.js-greeting-left-column-image-container').imagesLoaded( { background: true }, function() {
    $('.js-greeting-left-column-image-container').addClass('greeting__left-column-image-container--is-finished-loading');
    $('.js-greeting-right-column-content').addClass('greeting__right-column-content--is-visible');
  });
});

//
// Social media component
//

$('.js-social-media-links-anchor').mouseover(function() {
  $(this).addClass('social-media-links__anchor--is-focused');
  $('.js-social-media-links').addClass('social-media-links--has-hovered-anchor');
});

$('.js-social-media-links-anchor').mouseout(function() {
  $(this).removeClass('social-media-links__anchor--is-focused');
  $('.js-social-media-links').removeClass('social-media-links--has-hovered-anchor');
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
var channel = pusher.subscribe('sms');

channel.bind('sms_received', function(data) {
  $('.js-greeting-left-column').css('background-color', data.text);
  saveSmsToDatabase(data.text, data.from_number);
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
