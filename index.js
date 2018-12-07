const path = require("path"),
	_ = require("lodash"),
	typefolders = [
		"params_backbone",
		"params_express",
		"params_facebook_api",
		"params_geojson",
		"params_google_maps",
		"params_google_drive",
		"params_whatwg"
	];

let paramLinks = {
	Wkt: "https://github.com/arthur-e/Wicket",
	Wicket: "https://github.com/arthur-e/Wicket",
	Promise: "http://bluebirdjs.com/docs/api-reference.html",
	HTML2Canvas: "https://html2canvas.hertzen.com/",
	Canvg: "https://github.com/canvg/canvg",
	jQuery: "https://api.jquery.com/jQuery/",
	Cash: "https://github.com/kenwheeler/cash"
};

typefolders.forEach(foldername => {
	Object.assign(
		paramLinks,
		require(path.resolve(`${__dirname}/${foldername}`))
	);
});

console.log(paramLinks);

module.exports = paramLinks;
