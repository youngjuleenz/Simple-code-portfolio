var $aboutTitle = $('.about-myself .greeting h2');
var $developmentWrapper = $('.development-wrapper');
var developmentIsVisible = false;

$('.background .headerText').delay(500).animate({
  'opacity': '1',
  'top': '50%'
}, 1000);

$(window).scroll(function() {

  var bottom_of_window = $(window).scrollTop() + $(window).height();

  if (bottom_of_window > $aboutTitle.offset().top + $aboutTitle.outerHeight()) {
    $('.about-myself .greeting h2').addClass('aboutTitleVisible');
  }
})