new WOW().init();
//open-close menu
$("#open-menu").click(function() {
    $("#menu-right").animate({
      top: '+=100%'
    });
  });

  $("#close-menu").click(function() {
    $("#menu-right").animate({
      top: '-=100%'
    });
  });
  //fixed-top-menu
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.main-nav').addClass('fixed-nav');
        $('.main-nav').css('margin-left', '0');

    } else if($(this).scrollTop() < 50){
        $('.main-nav').removeClass('fixed-nav');
    }
});

  