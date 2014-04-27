var gf = window.gf = gf.connect('demo-2048');

function hideAchivement ($el) {
	return function() {
		$el.classList.remove('bounceInDown');
		$el.classList.add('bounceOutUp');
		setTimeout(function() {
			$el.remove();
		}, 1010);	
	};
}

function showAchivement (data, ms) {
	// Create element
	var $el = document.createElement('div')
	    $name = document.createElement('h1'),
	    $desc = document.createElement('p');
	var x$ = $el.classList;
	x$.add('gf-achivement')
	x$.add('animated')
	x$.add('bounceInDown');
	$name.textContent = data.displayName;
	$desc.textContent = data.description;
	$el.appendChild($name);
	$el.appendChild($desc);
	document.body.appendChild($el);
	setTimeout(hideAchivement($el), ms);
};

gf.on('achivement', function(achivement) {
	showAchivement(achivement, 6000);
});