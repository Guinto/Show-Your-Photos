var flipLoop;
var id = 0;
var pause = false;

function toggleFlipping() {
	if (pause) {
		startFlipping();
	} else {
		stopFlipping();
	}
	pause = !pause;
}

function setupFlip() {
	startFlipping();
}

function stopFlipping() {
	clearInterval(flipLoop);
}

function startFlipping() {
	flipLoop = setInterval(function() {
		var check = $('#photo' + id + '[class*="flip"]');
		console.log(check.length);
		console.log(check);
		if (check.length === 0) {
			$('#photo' + id).addClass('flip');
		} else {
			$('#photo' + id).removeClass('flip');
		}
		id++;
		if (id > 35) {
			id = 0;
		}
	}, 100);
}

function flipOnHover() {
	// set up hover panels
    // although this can be done without JavaScript, we've attached these events
    // because it causes the hover to be triggered when the element is tapped on a touch device
    $('.hover').hover(function() {
        $(this).addClass('flip');
    }, function() {
        $(this).removeClass('flip');
    });

}