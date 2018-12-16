var pt = require('periodic-table');

console.log('hello world');
console.log(pt.all);

function results() {
    const element = document.getElementById('element').value;
    console.log(element.toLowerCase());

    // loop through database
    const keys = Object.keys(pt.symbols);
    for (const key of keys) {
        console.log(String(key).toLowerCase() + " " + element.toLowerCase())
        if (String(key).toLowerCase() == element.toLowerCase()) {
            console.log("FOUND IT");
        }
    }


    // parse through data
}

// loop through pt.all dataset
// find a  match 
// output data > html