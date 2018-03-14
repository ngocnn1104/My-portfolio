var $ = jQuery;

$(document).ready(function() {
  $(".nav-item").on("click", function(event) {
    var location = '#'+$(event.target).text().toLowerCase();
    $('html, body').animate({scrollTop: $(location).offset().top}, 800);
  });

  $(".contact-btn").on("click", function(){
    $('html, body').animate({scrollTop: $("#contact").offset().top}, 800);
  });

});
