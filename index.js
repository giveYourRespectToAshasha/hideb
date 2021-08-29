
$('.item').click(function (e){
	let zz = e.target; 
	for (var i = 0; i < $('.item').length; i++) {
		$('.item')[i].classList.remove('currentItem');
	}
	zz.classList.add('currentItem');
});
$('.arTop').click(function() {
	for (var i = 0; i < $('.item').length; i++) {
		
		if ($('.item')[i].classList.contains('currentItem') && (i != 0)) {
			let x = i - 1;
			$('.item')[i].classList.remove('currentItem');
			$('.item')[x].classList.add('currentItem');
			
		}

	}
})

$('.arBot').click(function() {
	for (var i = 5; i < $('.item').length; i--) {
		
		if ($('.item')[i].classList.contains('currentItem') && (i != 5)) {
			let x = i + 1;
			$('.item')[i].classList.remove('currentItem');
			$('.item')[x].classList.add('currentItem');
			
		}

	}
})