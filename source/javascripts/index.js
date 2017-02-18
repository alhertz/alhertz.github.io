runHomePageIntroAnimation();

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
