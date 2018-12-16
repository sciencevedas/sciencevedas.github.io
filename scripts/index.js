var pt = require('periodic-table');

console.log('hello world');
console.log(pt.all);

function results() {
    const element = document.getElementById('element').value;
    console.log(element.toLowerCase());

    // loop through database
    /*
    const keys = Object.keys(pt.symbols);
    for (const key of keys) {
        console.log(String(key).toLowerCase() + " " + element.toLowerCase())
        if (String(key).toLowerCase() == element.toLowerCase()) {
            console.log("FOUND IT");
            console.log(pt.symbols.key);

            const keys2 = Object.keys(key);
            for (const key2 of keys2) {
                console.log(key2 + " " + key.value);
            }
            console.log('==========================');
        }
    }
    */

    console.log("-=567890-=-098767890-=-0987890-=")

    for (const qey of pt.all()) {
        console.log(qey);
        if (qey.symbol.toLowerCase() == element.toLowerCase()) {
            console.log("FOUND IT");
            console.log(qey.atomicNumber);
            console.log(qey.name);
            console.log(qey.electronegativity);
        }
    }


}

// loop through pt.all dataset
// find a  match 
// output data > html