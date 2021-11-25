var userName = "BHOPAL";
console.log("Hello ".concat(userName));
// Regular Way
var string1 = "Hello";
var number1 = 5;
var boolean1 = false;
var array1 = [];
var object1 = {};
// Typescript Way
var tstring1 = "Hello";
var tnumber1 = 5;
var tboolean1 = false;
var tarray1 = []; // only String Types allowed - Preferred
tarray1.push(string1);
tarray1.push(number1); // Type Casting - tarray1.push(number1) will give an error as only string types are allowed
var tarray2 = []; // Any Types allowed - Less Preferred
var tobject1 = {};
