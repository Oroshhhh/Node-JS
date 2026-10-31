/* נאדין גברין + אור סלמן  */


const fs = require('fs');
const path = require('path');

const files = [
    'input1.txt',
    'input2.txt',
    'input3.txt',
    'input4.txt',
    'input5.txt',
    'input6.txt',
    'input7.txt',
    'input8.txt',
    'input9.txt',
    'input10.txt'
];

let output = [];

for (let i = 0; i < files.length; i++) {

    const filePath = path.join(__dirname, files[i]);

    const text = fs.readFileSync(filePath, 'utf8');

    const lines = text.split(/\r?\n/);

    if (lines[lines.length - 1] === '') {
        lines.pop();
    }

    const count = Math.min(i + 1, lines.length);

    for (let j = 0; j < count; j++) {
        output.push(lines[j]);
    }
}

const Outputfilepath = path.join(__dirname, 'output.txt');

fs.writeFileSync(Outputfilepath, output.join('\n'), 'utf8');

console.log('Output written to output.txt');