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
function doTasks(tasks) {
    if (tasks > 3) {
        throw new Error("Too many Tasks!!");
    }
}
const stuff = doTasks(2);
