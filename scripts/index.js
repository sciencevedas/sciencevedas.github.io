	var pt = require('periodic-table');
	var myApp = angular.module('myApp', []);

		angular.forEach(pt.symbols, function(value, key) {
			if(chemical_symbol == value.key)
				results.innerHTML=pt.symbols.chemical_symbol;
		});



console.log('hello world');
console.log(pt.all);

// loop through pt.all dataset
// find a  match 
// output data > html