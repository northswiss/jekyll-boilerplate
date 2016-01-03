$("#more").click(function() {
  $('html, body').animate({
    scrollTop: $("#problem").offset().top-6
  }, 1000);
});

var budgetSection = $("#budget");
console.log(budgetSection.offset.top);

if ( budgetSection.y = 0 ) {
  console.log("OK");
}
