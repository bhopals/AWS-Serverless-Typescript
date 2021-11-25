const userName = "BHOPAL";
console.log(`Hello ${userName}`);

// Regular Way
const string1 = "Hello";
const number1 = 5;
const boolean1 = false;
const array1 = [];
const object1 = {};

// Typescript Way
const tstring1: string = "Hello";
const tnumber1: number = 5;
const tboolean1: boolean = false;
const tarray1: string[] = []; // only String Types allowed - Preferred
tarray1.push(string1);
tarray1.push(number1 as any); // Type Casting - tarray1.push(number1) will give an error as only string types are allowed

const tarray2: any[] = []; // Any Types allowed - Less Preferred

const tobject1: object = {};
