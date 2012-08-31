function getImgSrcFromResponse(response, index) {
	var farmID = response.photos.photo[index].farm;
	var serverID = response.photos.photo[index].server;
	var photoID = response.photos.photo[index].id;
	var secret = response.photos.photo[index].secret;
	return "http://farm" + farmID + ".staticflickr.com/" + serverID + "/"
			+ photoID + "_" + secret + "_n.jpg";
}

function createPanels(response) {
	for (var i = 0; i < response.photos.photo.length - 1; i += 2) {
		var fsrc = getImgSrcFromResponse(response, i);
		var bsrc = getImgSrcFromResponse(response, i + 1);
		createFlipPanel(fsrc, bsrc, i / 2);
	}
	setupFlip();
}

function createFlipPanel(fsrc, bsrc, id) {
	makeHoverPanel(id);
	makeFront(id);
	makeBack(id);
	insertImgs(fsrc, bsrc, id);
}

function insertImgs(fsrc, bsrc, id) {
	$("<img/>", {
		src: fsrc
	}).appendTo("#" + id + "front");
	$("<img/>", {
		src: bsrc
	}).appendTo("#" + id + "back");
}

function makeBack(id) {
	$("<div/>", {
		"class": "back",
		"id": id + "back"
	}).appendTo("#photo" + id);
}

function makeFront(id) {
	$("<div/>", {
		"class": "front",
		"id": id + "front"
	}).appendTo("#photo" + id);
}

function makeHoverPanel(id) {
	$("<div/>", {
		"class": "panel flip",
		"id": "photo" + id
	}).appendTo(".container");
}