// ============stiky bar===============
$(window).scroll(function () {
    var scrollamount = $(window).scrollTop()
  
    if (scrollamount > 50) {
      $(".menu").addClass("fixed")
    } else {
      $(".menu").removeClass("fixed")
    }
  
    if (scrollamount > 50) {
      $(".btop").fadeIn();
    } else {
      $(".btop").fadeOut();
    }
  })