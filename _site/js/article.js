$('.js-table-of-contents-cards').hover(
  function() {
    $('.js-table-of-contents').addClass('expanded');
    console.log('in');
  }, function() {
    $('.js-table-of-contents').removeClass('expanded');
    console.log('out');
  }
);