/* FED2 - Les 1 - Opdracht 4 */

/*4.1: Local Scope
Maak met behulp van een function een local scope aan en definieer in deze local scope de variables ‘iterator’, ‘max’ en ‘min’ aan.*/

function myLocalScope(getal) {
	var iterator = getal;
	var max = getal;
	var min = getal;
	console.log(min);
}

myLocalScope(8);

/*4.2: Global Scope
Maak dezelfde variables nu ook aan in de global scope.*/

	var iterator = 10;
	var max = 10;
	var min = 10;

	console.log(min);

/*
4.3: Closure
Leg uit wat een closure is en maak een code voorbeeld*/

/*Door een functie te maken in een andere functie kan deze binnenste functie toegang krijgen tot de variablen van de buitenste functie.*/

function sims(voornaam, achternaam) {
	var simsIntro = "Welkom bij de sims, ik ben "

	//binnenste functie met toegang tot parameters
	function kennismaken() {
		console.log(simsIntro + voornaam + " " + achternaam);
	}
	return kennismaken();
}

sims("Bob", "Smith");