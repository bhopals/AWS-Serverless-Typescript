const userName = "BHOPAL";
console.log(`Hello ${userName}`);
// Regular Way
const string1 = "Hello";
const number1 = 5;
const boolean1 = false;
const array1 = [];
const object1 = {};
// Typescript Way
const tstring1 = "Hello";
const tnumber1 = 5;
const tboolean1 = false;
const tarray1 = []; // only String Types allowed - Preferred
tarray1.push(string1);
tarray1.push(number1); // Type Casting - tarray1.push(number1) will give an error as only string types are allowed
const tarray2 = []; // Any Types allowed - Less Preferred
const tobject1 = {};
