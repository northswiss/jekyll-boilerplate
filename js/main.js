var body = $("body"),
    site_header =           $("#header"),
    btn_booker =            $("#btn_booker"),
    btn_traveler =          $("#btn_traveler"),
    btn_manager =           $("#btn_manager"),
    slide_wrapper =         $("#slide_wrapper");

$("#more").click(function() {
  $('html, body').animate({
    scrollTop: $("#problem").offset().top-6
  }, 1000);
});

$(window).scroll(function () {
  if( $(this).scrollTop() > site_header.offset().top) {
    site_header.addClass("fixed");
  } else {
    site_header.removeClass("fixed");
  }
});


// SLIDES

btn_booker.click(function () {
  slide_wrapper.attr("data-state", "slide-one");
});
btn_traveler.click(function () {
  slide_wrapper.attr("data-state", "slide-two");
});
btn_manager.click(function () {
  slide_wrapper.attr("data-state", "slide-three");
});

