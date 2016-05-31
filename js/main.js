var body =                    $("body"),
  site_header =               $("#header"),
  slide_wrapper =             $("#slide_wrapper"),
  $testimonials_li =          $(".testimonials li"),
// Buttons
  btn_honeypot_demo =         $(".work-in-progress button"),
  btn_feature_honeypot =      $(".honeypot-btn"),
  btn_honeypot_one =          $("#honeypot-one"),
  btn_honeypot_two =          $("#honeypot-two"),
  btn_honeypot_three =        $("#honeypot-three"),
  btn_honeypot_four =         $("#honeypot-four"),

  btn_close =                 $("#close"),
  btn_demo_request =          $("#btn-request"),
  btn_demo_submit =           $("#request-demo-submit"),
  btn_login =                 $("#btn-login"),
  btn_menu =                  $("#btn-menu"),
  btn_more =                  $("#more"),
  btn_sign_up_nav =           $("#btn-sign-up-nav"),
  btn_sign_up_hero =          $("#btn-sign-up-hero"),
  btn_testimonial_one =       $("#slide1"),
  btn_testimonial_two =       $("#slide2"),
//Overlay stuff
  overlay_content =           $(".overlay-content"),
  overlay =                   $("#overlay"),
  sign_up =                   $("#sign-up-overlay"),
  request_demo =              $("#request-demo-overlay"),
  form_sign_up =              $("#sign_up_form"),
  // GENERATED CONTENT
  $work_in_progress =         $("#work-in-progress");

btn_more.click(function() {
  $('html, body').animate({
    scrollTop: $("#customer_types").offset().top-68
  }, 1000);
});


// HONEYPOT
btn_feature_honeypot.click(function () {
  $work_in_progress.show();
  $(this).replaceWith($work_in_progress);
  btn_honeypot_demo = $(".honeypot-btn");
});

// BANNER ON SCROLL
$(window).scroll(function () {
  if( $(this).scrollTop() > site_header.offset().top+295) {
    site_header.addClass("fixed-header");
  } else {
    site_header.removeClass("fixed-header");
  }
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
  showPopup( request_demo );
});
btn_honeypot_demo.click(function () {
  showPopup( request_demo );
});

btn_demo_request.on( 'click', function () {
  showPopup( request_demo );
});

overlay_content.click(function (e) {
  console.log(e.target);
  if ($(e.target).not('form')) {
    e.stopPropagation();
  }
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
  btn_testimonial_one.removeClass("active");
  $(this).addClass("active");
  $testimonials_li.animate({left: "-" +slideWidth+"%"}, 300);
});
btn_testimonial_one.click(function () {
  btn_testimonial_two.removeClass("active");
  $(this).addClass("active");
  $testimonials_li.animate({left: 0}, 300);
});

// GA TRACKING =========================

// BUTTONS
var tracking_array = [ btn_close, btn_more, btn_demo_request, btn_demo_submit, btn_sign_up_nav, btn_sign_up_hero, btn_login, btn_menu, btn_honeypot_one, btn_honeypot_two, btn_honeypot_three, btn_honeypot_four ];

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
