// Make it rain!!!
$('.brunch-link').on('click', function(e) {
  $('.dinner, .drinks').hide();
  $('.brunch').show();
  $('brunch').onClick();
  console.log('brunch is called');
})

$('.dinner-link').on('click', function(e) {
  $('.brunch, .drinks').hide();
  $('.dinner').show();
  console.log('dinner is called');
})

$('.drinks-link').on('click', function(e) {
  $('.brunch, .dinner').hide();
  $('.drinks').show();
  console.log('drinks is called');
})

$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	// Step 2: Log distanceScrolled to the console to see what it holds!
	console.log('distanceScrolled');
  if (distanceScrolled >= 400) {
  $('.headernav').addClass('scrolled');
}
// else
  // Remove the class from the nav to make it unfixed
else {
  $('.headernav').removeClass('scrolled');
}
});

$('.hamburger').on('click', function(event) {
  event.preventDefault()
 $('.main-nav').addClass('active');
})
$('.close').on('click', function () {
  $('.main-nav').removeClass('active');
})

$('.carousel-wrapper').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
});
