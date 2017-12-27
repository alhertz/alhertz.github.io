//= require 'vendor/jquery.js'
//= require 'vendor/jquery.smoothState.js'
//= require 'vendor/ev-emitter.js'
//= require 'vendor/imagesloaded.js'
//= require 'vendor/tinycolor.min.js'

firePageSpecificScripts();

//
// Smoothstate
//
var $body   = $('html, body'),
    options = {
      prefetch: true,
      cacheLength: 2,
      pageCacheSize: 4,
      onStart: {
        duration: 500,
        render: function ($container) {
          $container.addClass('is-exiting');
          smoothState.restartCSSAnimations();
          $body.animate({ 'scrollTop': 0 });
        }
      },
      onProgress: {
        duration: 350,
        render: function ($container) {
          $container.addClass('is-loading').removeClass('is-loading');
        }
      },
      onReady: {
        duration: 0,
        render: function ($container, $newContent) {
          $container.html($newContent);
          $container.removeClass('is-exiting').removeClass('is-loading');
        }
      },
      onAfter: function() {
        firePageSpecificScripts();
      }
    },
    smoothState = $('#main').smoothState(options).data('smoothState');


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

pusherChannel.bind('sms_received', function(data) {
  // Saves the body and from number of the SMS sent to Firebase
  saveSmsToDatabase(data.text, data.from_number);

  // Create a monochromatic color combination from the body of the SMS sent to
  // text-hey-al.herokuapp.com/post
  var colors = tinycolor(data.text).monochromatic();

  // Convert the monochromatic olor combination values to hexidecimal values and
  // store as array e.g [ "#ff0000", "#2a0000", "#550000", "#800000", "#aa0000",
  //  "#d40000" ]
  colors.map(function(t) { return t.toHexString(); });

  function colorArrayToHTML(arr) {
    return $.map(arr, function(e) {
      return e.toHexString()
    });
  }

  var colorArray = colorArrayToHTML(colors);

  // Select a random color from the stored color combination array and apply it
  // as the background of the homepage greeter's left column
  var randomColorFromColorArray = colorArray[Math.floor(Math.random() * colorArray.length)];
  var randomlySelectedColor = tinycolor(randomColorFromColorArray).lighten().desaturate();

  $('.js-greeting-left-column').css('background-color', randomlySelectedColor);
  $('.js-greeting-right-column-content a').css('color', randomlySelectedColor);
});

function firePageSpecificScripts() {
  var page = $('.js-page');

  if (page.hasClass("page--is-index")) {
    indexSpecificScript();
  }
};

function indexSpecificScript() {
  //
  // Variables
  //
  var greetingLeftColumnImageContainer = $('.js-greeting-left-column-image-container');
  var greetingLeftColumnImage = $('.js-greeting-left-column-image');
  var greetingRightColumn = $('.js-greeting-right-column');
  var greetingRightColumnContent = $('.js-greeting-right-column-content');
  var socialMediaLinks = $('.js-social-media-links');
  var socialMediaLinkAnchor = $('.js-social-media-links-anchor');

  //
  // Images loaded
  //
  greetingLeftColumnImage.imagesLoaded({ background: true }, function() {
    greetingLeftColumnImageContainer.addClass('greeting__left-column-image-container--is-finished-loading');
    greetingRightColumnContent.addClass('greeting__right-column-content--is-visible')
    socialMediaLinks.addClass('social-media-links--is-visible');
  });

  //
  // Social media component
  //
  socialMediaLinkAnchor.mouseover(function() {
    $(this).addClass('social-media-links__anchor--is-focused');
    socialMediaLinks.addClass('social-media-links--has-hovered-anchor');
  });

  socialMediaLinkAnchor.mouseout(function() {
    $(this).removeClass('social-media-links__anchor--is-focused');
    socialMediaLinks.removeClass('social-media-links--has-hovered-anchor');
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
