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
  $input_name =               $("input[name=name]"),
  $label =                    $("input[type=checkbox]"),
  $extraInformation =         $(".extra-information");

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

// CLICK LISTENERS
body
  // SHOW REQUEST DEMO MODAL
  .on('click', '.work-in-progress button, #btn-sign-up-nav, #btn-request', function () {
    body.addClass("no-scroll");
    overlay_content.removeClass("show");
    overlay.fadeIn("fast");
    request_demo.addClass("show");
  })
  // FIX CHECKBOX FUNCTIONALITY ON OVERLAY
  .on('click', '#sign_up_form label.checkbox', function(e) {
    var $label = $(e.target).closest('label.checkbox');
    var $checkbox = $($label.find('input[type=checkbox]')[0]);
    $checkbox.prop('checked', !$checkbox.prop('checked'));
  })
  // SHOW EXTRA DEMO FORM CONTENT
  .on('blur', 'form input, form select', function (e) {
    if( $label.prop('checked') && $input_name.val().length ) {
      var $prospect =             $input_name.val(),
          $prospectPlaceholder =  $("#prospect_name");
      $prospectPlaceholder.text(' ' + $prospect);
      $extraInformation.fadeIn();
    }
  })
  .on('click', 'label.checkbox', function (e) {
    if( $label.prop('checked') && $input_name.val().length ) {
      var $prospect =             $input_name.val(),
        $prospectPlaceholder =  $("#prospect_name");
      $prospectPlaceholder.text(' ' + $prospect);
      $extraInformation.fadeIn();
    }
  })
  .on('click', '#request-demo-overlay', function(e) {
    e.stopPropagation();
  })
  .on('click', '#overlay, #close', function() {
    body.removeClass("no-scroll");
    overlay_content.addClass("hide");
    overlay.fadeOut("fast");
  })
;

// TESTIMONIALS

// TODO: Needs to happen on window resize

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
  });
});
