var body =                    $("body"),
  site_header =               $("#header"),
  slide_wrapper =             $("#slide_wrapper"),
  $testimonials_li =          $(".testimonials li"),
// Buttons
  btn_booker =                $("#btn_booker"),
  btn_close =                 $("#close"),
  btn_demo_request =          $("#btn-request"),
  btn_demo_submit =           $("#request-demo-submit"),
  btn_login =                 $("#btn-login"),
  btn_manager =               $("#btn_manager"),
  btn_menu =                  $("#btn-menu"),
  btn_more =                  $("#more"),
  btn_sign_up_nav =           $("#btn-sign-up-nav"),
  btn_sign_up_hero =          $("#btn-sign-up-hero"),
  btn_traveler =              $("#btn_traveler"),
  btn_testimonial_one =       $("#slide1"),
  btn_testimonial_two =       $("#slide2"),
//Overlay stuff
  overlay_content =           $(".overlay-content"),
  overlay =                   $("#overlay"),
  sign_up =                   $("#sign-up-overlay"),
  request_demo =              $("#request-demo-overlay");

btn_more.click(function() {
  $('html, body').animate({
    scrollTop: $("#customer_types").offset().top-68
  }, 1000);
});

// BANNER ON SCROLL
$(window).scroll(function () {
  if( $(this).scrollTop() > site_header.offset().top+295) {
    site_header.addClass("fixed-header");
  } else {
    site_header.removeClass("fixed-header");
  }
});


// SLIDES - NOT USED AT THE MOMENT

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

function showPopup ( whichPopup ) {
  body.addClass("no-scroll");
  overlay_content.removeClass("show");
  overlay.fadeIn("fast");
  whichPopup.addClass("show");
}

function closePopUp(e) {
  e.preventDefault();
  body.removeClass("no-scroll");
  overlay_content.addClass("hide");
  overlay.fadeOut("fast");
}

btn_sign_up_nav.on( 'click', function () {
  showPopup( sign_up );
});
btn_sign_up_hero.on( 'click', function () {
    showPopup( sign_up );
});

btn_demo_request.on( 'click', function () {
  showPopup( request_demo );
});

overlay_content.click(function (e) {
  e.stopPropagation();
});
btn_close.click(closePopUp);
overlay.click(closePopUp);


// TESTIMONIALS

// Needs to happen on window resize

// Set width based on # of slides
var noOfSlides = $testimonials_li.length,
    slideContainerWidth = noOfSlides*100,
    slideWidth = 100/noOfSlides;

// Set up slide wrapper and slides
$(".testimonial-slides ul").css("width", slideContainerWidth+"%");
$testimonials_li.css("width", slideWidth+"%");


btn_testimonial_two.click(function () {
  $testimonials_li.animate({left: "-" +slideWidth+"%"}, 300);
});
btn_testimonial_one.click(function () {
  $testimonials_li.animate({left: 0}, 300);
});

// GA TRACKING =========================

// BUTTONS
var tracking_array = [ btn_close, btn_more, btn_demo_request, btn_demo_submit, btn_sign_up_nav, btn_sign_up_hero, btn_login, btn_menu ];

$.each( tracking_array, function ( i, $button ) {
  var category, label;
  var getCategory = function() {
    if( $button.attr("data-ga-category") == null ) {
      category = "Button click";
    } else {
      category = $button.attr("data-ga-category");
    }
    return category;
  };
  var getLabel = function() {
    if( $button.attr("data-ga-label") == null ) {
      label = $button.text();
    } else {
      label = $button.attr("data-ga-label");
    }
    return label;
  };

  $button.click(function () {
    getCategory();
    getLabel();
    ga('send', 'event', category, 'Clicked', label );
    // TODO: Remove console log
    console.log(category, label);
  });
});
