( function( $ ) {
	// 
	// Microsoft
	// 
 	$('.nav-main').find('a').on('click', function(event) {
		event.preventDefault();
	});
	$('li').filter('.dd').on('click', function(event) {
		$('li').filter('.dd').removeClass('active');
		$(this).addClass('active');
		event.stopPropagation();
	});

	$('li').filter('.dd').children('.dropdown').children().children('.dd').on('mouseenter', function(event) {
		var dd1 = $(this).closest('.dropdown');
		var dd2 = $(this).find('.dropdown');

		dd1.removeAttr('style');
		dd2.removeAttr('style');

		var h1 = dd1.height();
		var h2 = dd2.height();

		var height;

		if (h1>h2) { height = h1; } else { height = h2; }
		dd1.height(height);
		dd2.height(height);
	});

	$('body').on('click', function() {
		$('li').filter('.dd').removeClass('active');
	});



	// 
	// Invision
	// 
	$('.invision').find('input').on('focus', function(event) {
		$(this).parent().find('label').animate({opacity: 0.5}, 400);
	});

	$('.invision').find('input').on('focusout', function(event) {
		$(this).parent().find('label').animate({opacity: 1}, 400);
	});

	$('.invision').find('input').on('change keyup paste', function(event) {
		if ($(this).val().length > 0) {
			$(this).parent().find('label').fadeOut(50);
		} else {
			$(this).parent().find('label').fadeIn();
		}
	});

	$('#invision-form').find('button').on('submit', function(event) {
		event.preventDefault();
	});

	$('#invision-form').validate();

} )( jQuery );