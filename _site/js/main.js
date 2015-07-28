// $(document).ready(function() {
//   $('.js-animation-container').addClass('showing');
// });

$(function() {
  var content = $('#main').smoothState({
    anchors: 'a',
    onStart : {
      render: function () {
        $(content).removeClass('showing');
      }
    }
  }).data('smoothState');
});
