$('.js-table-of-contents-cards').hover(
  function() {
    $('.js-table-of-contents').addClass('expanded');
    console.log('in');
  }, function() {
    $('.js-table-of-contents').removeClass('expanded');
    console.log('out');
  }
);

var sticky = new Waypoint.Sticky({
  element: $('.js-article-section-header')[0]
})

// $('.greeter-section-header').waypoint(function() {
//   $( '.greeter-section-header' ).addClass('fixed').wrap('<div class="fixed-navigation-wrapper"></div>');
// });

// var inview = new Waypoint.Inview({
//   element: $('#greeters')[0],
//   enter: function(direction) {
//     console.log('Enter triggered with direction ' + direction)
//     $('.greeter-section-header').addClass('fixed');
//   },
//   entered: function(direction) {
//     console.log('Entered triggered with direction ' + direction)
//   },
//   exit: function(direction) {
//     console.log('Exit triggered with direction ' + direction)
//   },
//   exited: function(direction) {
//     console.log('Exited triggered with direction ' + direction)
//   }
// })