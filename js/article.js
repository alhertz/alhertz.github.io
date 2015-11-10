$('#container').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  }
);


var sticky = new Waypoint.Sticky({
  element: $('.js-article-navigation')[0]
});

var figure = $(".js-video-figure").hover( hoverVideo, hideVideo );

function hoverVideo(e) { $('video', this).get(0).play(); }
function hideVideo(e) { $('video', this).get(0).pause(); }

$('.js-expand-navigation-trigger').click(function() {
  event.preventDefault();

  $('.js-article-navigation').addClass('expanded');
});

$('.js-condense-navigation-trigger').click(function() {
  event.preventDefault();

  $('.js-article-navigation').removeClass('expanded');
});
