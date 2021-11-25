// Type Argument Inference
function getObjectKeys0(arg0, arg1) {
    return [arg0, arg1];
}
function getObjectKeys1(arg0) {
    console.log("arg0>", arg0);
    return arg0;
}
function getObjectKeys2(arg0, arg1) {
    console.log("arg0>", arg0);
    console.log("arg1>", arg1);
    return arg1;
}
const keys1 = getObjectKeys1({ firstName: "John", lastName: "Doe" });
console.log(keys1);
const keys2 = getObjectKeys2({ firstName: "John", lastName: "Doe" }, { address: "Canada" });
console.log(keys2);
// BEST PRACTICES
// 1. - Using a Constraints that type properties exists - ARRAY TYPE
// this will cause an error
function identity0(arg) {
    // console.log(arg.length); // Error
    return arg;
}
function identity1(arg) {
    // length property can now be called
    console.log(arg.length);
    return arg;
}
// SOLUTION 2 - length is now recognised by declaring T as a type of array
function identity2(arg) {
    console.log(arg.length);
    return arg;
}
// SOLUTION 3
function identity3(arg) {
    console.log(arg.length);
    return arg;
}
// 2. - Using constraints to check an object key exists - OBJECT PROPERTY
function getProperty(obj, key) {
    return obj[key];
}
// GENERIC USE CASE
class API {
}
class APIService extends API {
    getRecord(endpoint, params) { }
    getRecords(endpoint, params) { }
}
// More Details Refer - https://rossbulat.medium.com/typescript-generics-explained-15c6493b510f
