//with this line we are trying to import native node js module called "fs"
//"fs" module provides an api to interact with filesystem.
// const keyword allows us to declare a constant that would not change through out this program
//fileSystem is a name of constant
const fileSystem = require('fs');

//now access a method in "fs" module using "fileSystem"
//copyFileSync() --> accepts 2 parameters --> 1. source file name to copy  & 2. destination file name for copy operation.
fileSystem.copyFileSync('source.txt', 'destination.txt');
console.log('source.txt was copied to destination.txt');

//to execute above line of code using bash command line follow below steps :
//1. navigate to a directory where your js file is present (which contains node js code)
//2. command to execute - node index.js --> (node <name of JS file>)
//this should print a console statement and copy a file to create a destination.txt file under same directory.

//command : npm init
//This is used to initialise a node package manager (npm) and creates a packages.json file in your project directory.
//while creating the packages.json, few questions would be asked and tries to guess sensible answers if no explicit answer is providedd.
//you can see 'package.json' created in the same directory.
//as and when you install new npm packages, dependencies would be added in same package.json
