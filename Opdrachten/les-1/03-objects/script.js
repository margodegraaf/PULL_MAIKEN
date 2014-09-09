/* FED2 - Les 1 - Opdracht 3 */

/* 3.1: Constructor object
Maak met een Constructor object een ‘Persoon’-object aan. Voeg de property ‘name’ en de method ‘speak’ toe. En maak een nieuwe instantie aan van dit object waarbij je de naam ‘Bob’ meegeeft als parameter van het object. */

/* maak functie aan voor object */
function Persoon(name) {
	this.name = name;
	this.speak = function() { 
		console.log("My name is " + this.name + ". (Constructor Object)"); 
	};
	
	speak();

}

/* gebruik functie voor gegevens */

Persoon('Bob');
Persoon('Susan');


/* 3.2: Prototype
Voeg de methods ‘walk’ en ‘eat’ toe aan het ‘Persoon’-object met de prototype function van het object. */

Persoon.prototype.walk = function() { 
	console.log(this.name + " walks through town. (Constructor Object)");
	}
Persoon.prototype.eat = function() {
	console.log(this.name + " eats a pancake. (Constructor Object)");
}

/* 3.3: Object Literal
Maak nu hetzelfde object, met dezelfde properties en methods aan met een object literal */

var PersoonLiteral = {
	name: "Bob",
	speak: function () { console.log("My name is " + this.name + ". (Object Literal)"); },
	walk: function() { console.log(this.name + " walks through town. (Object Literal)"); },
	eat: function() { console.log(this.name + " eats a pancake. (Object Literal)"); }
}

/* Print alles naar de log */
PersoonLiteral.speak();
PersoonLiteral.walk();
PersoonLiteral.eat();
