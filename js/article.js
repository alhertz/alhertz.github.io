var sticky = new Waypoint.Sticky({
  element: $('.js-article-navigation')[0]
});

var figure = $(".js-video-figure").hover( hoverVideo, hideVideo );

function hoverVideo(e) { $('video', this).get(0).play(); }
function hideVideo(e) { $('video', this).get(0).pause(); }

$('.js-expand-navigation-trigger').click(function(event) {
  event.preventDefault();

  $('.js-article-navigation').addClass('expanded');
});

$('.js-condense-navigation-trigger').click(function(event) {
  event.preventDefault();

  $('.js-article-navigation').removeClass('expanded');
});