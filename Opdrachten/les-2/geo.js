/* Barebones GEO script */

// Namespace aanmaken
var cmdAanGeo = cmdAanGeo || {};

// Self invoking function
(function() {

	// Configuratie mogelijk
	cmdAanGeo.config =  {};

	// Alle andere modules initialiseren
	cmdAanGeo.controller = {
		init: function() {}
	};

	// Alle GPS functions
	cmdAanGeo.gps = {
		startInterval: function() {},
		updatePosition: function() {},
		setPosition: function() {},
		checkLocations: function() {},
		calculateDistance: function() {}
	};

	// Alle GOOGLE MAPS functions
	cmdAanGeo.map = {
		generate: function() {},
		updatePosition: function() {}
	};

	// Alle DEBUG functions
	cmdAanGeo.debug = {
		errorHandler: function() {},
		message: function() {},
		setCustomDebugging: function() {}
	};

	// Alle HELPER functions
	cmdAanGeo.helper = {
		isNumber: function() {}
	};

}());

// Verwijderen door Margo