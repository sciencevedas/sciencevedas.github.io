var pt = require('periodic-table');

console.log('hello world');
console.log(pt.all);

function results() {
    const element = document.getElementById('element').value;
    console.log(element.toLowerCase());

    for (const qey of pt.all()) {
        if (qey.symbol.toLowerCase() == element.toLowerCase()) {
            console.log("FOUND IT");
            console.log(qey.atomicNumber);
            console.log(qey.name);
            console.log(qey.electronegativity);

            // put onto html
            output = []

            output.push(`Name: ${qey.name}`);
            output.push(`Atomic no: ${qey.atomicNumber}`);
            output.push(`Electronegativity: ${qey.electronegativity}`);
            output.push(`Type: ${qey.groupBlock}`);
            output.push(`IE: ${qey.ionizationEnergy} kJ/mol`);
            output.push(`e- affinity: ${qey.electronAffinity} kJ/mol`);
            output.push(`Electron configuration: ${qey.electronicConfiguration}`);

            elementinfo.innerHTML = output.join("<br>");
        }
    }


}

// loop through pt.all dataset
// find a  match 
// output data > html