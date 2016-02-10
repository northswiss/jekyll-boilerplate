// TODO: Break into separate file
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

// JQuery selector variables
var $body = $('body'),
    $overlay = $('<div class="overlay"><svg class="icon white close"><use xlink:href="#ic-close"/></svg></div>'),
    $nav = $('#nav_main'),
    $menu = $('#btn_menu'),
    $nav_items = $('.nav-main li'),
    $menu_title = $('#menu_title');

// Global variables
var overlayContent,
    overlayClass;

function hideOverlay ( overlayContent, removeClass ) {
    $overlay.fadeOut("fast");
    for ( var i = 0; i < overlayContent.length; i++ ) {
        console.log(overlayContent);
        overlayContent[i].removeClass(removeClass);
    }
}
function showOverlay ( elements, className ) {
    $body.append($overlay);
    $overlay.fadeIn("fast");
    overlayClass = className;
    overlayContent = elements;

    for ( var i = 0; i < elements.length ; i++ ) {
        elements[i].addClass(className);
        console.log(elements);
    }
}


$menu.on("click", function () {
    showOverlay( [$nav, $menu_title], "nav-mobile");
    $nav_items.each(function(i){
        var li = $(this);
        li.css("opacity", 0);
        setTimeout(function() {
            li.animateCss('fadeInUp');
            li.css("opacity", 1);
        }, 100*i);
    });
});

$overlay.on("click", function () {
    hideOverlay( overlayContent, overlayClass);
});