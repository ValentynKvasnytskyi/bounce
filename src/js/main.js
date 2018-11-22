new WOW().init();
//open-close menu
$("#open-menu").click(function() {
  $("#menu-toggle").animate({
    left: '+=100%'
  });
});

$("#close-menu").click(function() {
  $("#menu-toggle").animate({
    left: '-=100%'
  });
});
//fixed-top-menu
$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $('.header__main-nav').addClass('header__fixed-nav');
  } else if($(this).scrollTop() < 50){
    $('.header__main-nav').removeClass('header__fixed-nav');
  }
});

$('.popup-youtube').magnificPopup({ 
  type: 'iframe'
});
$('.popup-content').magnificPopup({
  type: 'inline'
});