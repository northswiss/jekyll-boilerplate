var body =                  $("body"),
  site_header =           $("#header"),
// Buttons
  btn_booker =            $("#btn_booker"),
  btn_traveler =          $("#btn_traveler"),
  btn_manager =           $("#btn_manager"),
  btn_demo_request =      $("#btn-request"),
  btn_demo_submit =       $("#request-demo-submit"),
  btn_sign_up =           $("#btn-sign-up"),
  btn_close =             $("#close"),
  btn_more =              $("#more"),
  slide_wrapper =         $("#slide_wrapper"),
//Overlay stuff
  sign_up =               $("#sign-up-overlay"),
  request_demo =          $("#request-demo-overlay"),
  overlay_content =       $(".overlay-content"),
  overlay =               $("#overlay");

btn_more.click(function() {
  $('html, body').animate({
    scrollTop: $("#customer_types").offset().top-68
  }, 1000);
});

// BANNER ON SCROLL
$(window).scroll(function () {
  if( $(this).scrollTop() > site_header.offset().top+400) {
    site_header.addClass("fixed-header");
  } else {
    site_header.removeClass("fixed-header");
  }
});


// SLIDES

btn_booker.click(function () {
  slide_wrapper.attr("data-state", "slide-one");
  btn_traveler.removeClass("active");
  btn_manager.removeClass("active");
  $(this).addClass("active");
});
btn_traveler.click(function () {
  slide_wrapper.attr("data-state", "slide-two");
  btn_booker.removeClass("active");
  btn_manager.removeClass("active");
  $(this).addClass("active");
});
btn_manager.click(function () {
  slide_wrapper.attr("data-state", "slide-three");
  btn_booker.removeClass("active");
  btn_traveler.removeClass("active");
  $(this).addClass("active");
});

// OVERLAY

btn_sign_up.on( 'click', function () {
    showPopup( sign_up );
});

btn_demo_request.on( 'click', function () {
  showPopup( request_demo );
});

btn_close.click(closePopUp);

function showPopup ( whichPopup ) {
  body.addClass("no-scroll");
  overlay_content.removeClass("show");
  overlay.fadeIn("fast");
  whichPopup.addClass("show");
}

function closePopUp(e) {
  body.removeClass("no-scroll");
  overlay_content.addClass("hide");
  e.preventDefault();
  overlay.fadeOut("fast");
}


// GA TRACKING
var tracking_array = [ btn_booker, btn_traveler, btn_manager, btn_more, btn_demo_request, btn_demo_submit ];

$.each( tracking_array, function ( i, val ) {
  val.click(function () {
    ga('send', 'event', 'Category', 'Action', btn_more.html());
  });
});
