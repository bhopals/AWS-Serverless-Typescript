"use strict";
function generateEmail(input) {
    return `${input.firstName} ${input.lastName}@email.com`;
}
console.log(generateEmail({ firstName: "John", lastName: "Doe", job: "ENGINEER" }));
function generateEmailOptType(input) {
    if (input.isVisitor) {
        return undefined;
    }
    else {
        return `${input.firstName} ${input.lastName}@email.com`;
    }
}
console.log(generateEmailOptType({ firstName: "John", lastName: "Doe" }));
function generateEmailOptFn(input, force) {
    if (input.isVisitor && !force) {
        return undefined;
    }
    else {
        return `${input.firstName} ${input.lastName}@email.com`;
    }
}
console.log(generateEmailOptFn({ firstName: "John", lastName: "Doe" }, true));
