

$(document).ready(function(){
	$('.header-navbar__hamburger').click(function(){
		$(this).toggleClass('open');
		$('.header-navbar__list').toggleClass('open');
	});
});

