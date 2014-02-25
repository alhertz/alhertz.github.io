$( document ).ready(function() {

  $( "#showComments" ).click(function() {
    $.scrollTo( "#disqus_thread" );
    $( "#disqus_thread" ).show();
  });

});