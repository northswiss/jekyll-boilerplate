console.log("GA Tracking is enabled");

// GA TRACKING.
// === ADD YOUR UA ID NUMBER BELOW ===

(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='https://www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-XXXXX-X','auto');ga('send','pageview');

/*
* Add tracking events.
* Here's some to get you started
*/

// BUTTONS
var $logo =                     $('#logo'),
    $linkedin =                 $('#linkedin'),
    $twitter =                  $('#twitter'),
    $facebook =                 $('#facebook');

var tracking_array = [ $logo, $linkedin, $twitter, $facebook ];

$.each( tracking_array, function ( index, $element ) {
    var category, label;
    var getCategory = function() {
        if( $element.attr("data-ga-category") == null ) {
            category = "Button click";
        } else {
            category = $element.attr("data-ga-category");
        }
        return category;
    };
    var getLabel = function() {
        if( $element.attr("data-ga-label") == null ) {
            label = $element.text();
        } else {
            label = $element.attr("data-ga-label");
        }
        return label;
    };

    $element.click(function ( e ) {
        // e.preventDefault(); DEBUGGING
        // console.log(category, label); DEBUGGING
        getCategory();
        getLabel();
        ga('send', 'event', category, 'Clicked', label );
    });
});