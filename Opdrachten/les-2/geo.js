/* Barebones GEO script */

// Namespace aanmaken
var cmdAanGeo = cmdAanGeo || {};

// Self invoking function
(function() {

	// Configuratie mogelijk
	cmdAanGeo.config =  {};

	// Alle andere modules initialiseren
	cmdAanGeo.controller = {
		init: function() {
			cmdAanGeo.gps(); 	// Object aanroepen ipv functie | MARGO DE GRAAF
			cmdAanGeo.map();	// Object aanroepen ipv functie | MARGO DE GRAAF
			cmdAanGeo.debug();	// Object aanroepen ipv functie | MARGO DE GRAAF
			cmdAanGeo.helper():	// Object aanroepen ipv functie | MARGO DE GRAAF
		}
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

// App init
cmdAanGeo.controller(); 
/* 
Verander:
cmdAanGeo.controller(); 	=> 	cmdAanGeo.controller.init(); 

Uitleg:
De zin "cmdAanGeo.controller();" geeft een error omdat je een functie aanroept, terwijl je het object met methode moet aanroepen.

Auteur:
MARGO DE GRAAF
*/

	
