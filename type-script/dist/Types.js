"use strict";
// undefined, null, never, unknown
const abc = null;
let def = undefined;
function getData() {
    return "";
}
const data = getData();
if (data) {
    const someOtherData = data;
}
// unknown
let input;
input = "someInput";
let someSensitiveData;
// someSensitiveData = input // Will get an errro - To resolve that we need to place a Check
if (typeof input === "string") {
    someSensitiveData = input;
}
