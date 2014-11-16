window.addEventListener('load', function(){


	console.log('asdf');

	$('button.spin').on('click', function(){
		$.get('/spin');
	});

	$('button.stop').on('click', function(){
		$.get('/stop');
	});

});