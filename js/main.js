var body = $("body"),
    site_header =           $("#header"),
    btn_booker =            $("#btn_booker"),
    btn_traveler =          $("#btn_traveler"),
    btn_manager =           $("#btn_manager"),
    btn_signup =            $("#signup"),
    btn_close =             $("#close"),
    slide_wrapper =         $("#slide_wrapper"),
    overlay =               $("#overlay"),
    popup_signup =          $("#popup_signup");

$("#more").click(function() {
  $('html, body').animate({
    scrollTop: $("#customer_types").offset().top-93
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

btn_signup.on( 'click', function () {
    showPopup();
  }
);

btn_close.click(closePopUp);

function showPopup ( whichPopup ) {
  overlay.fadeIn("fast");
}

function closePopUp(e) {
  console.log("closePopup called");
  e.preventDefault();
  overlay.fadeOut("fast");
}
