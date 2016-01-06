var body = $("body");


$("#more").click(function() {
  $('html, body').animate({
    scrollTop: $("#problem").offset().top-6
  }, 1000);
});
