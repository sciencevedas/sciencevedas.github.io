var pt = require('periodic-table');

console.log('hello world');
console.log(pt.all);

function results() {
    element = document.getElementById('element').value;
    console.log(element.toLowerCase());

    // loop through database
    const keys = Object.keys(pt.symbols);
    for (const key of keys) {
        console.log(key);
        if (key.symbol.toString().toLowerCase() == element) {
            console.log("FOUND IT");
        }
    }

    // find element

    // parse through data
}

// loop through pt.all dataset
// find a  match 
// output data > html