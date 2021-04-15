$( "#clickme" ).click(function() {
  $( "#bg" ).animate({
    position: +=50;
  }, 5000, function() {
    // Animation complete.
  });
});
