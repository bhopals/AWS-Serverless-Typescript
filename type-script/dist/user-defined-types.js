function generateEmail(input) {
    return "".concat(input.firstName, " ").concat(input.lastName, "@email.com");
}
console.log(generateEmail({ firstName: "John", lastName: "Doe", job: "ENGINEER" }));
function generateEmailOptType(input) {
    if (input.isVisitor) {
        return undefined;
    }
    else {
        return "".concat(input.firstName, " ").concat(input.lastName, "@email.com");
    }
}
console.log(generateEmailOptType({ firstName: "John", lastName: "Doe" }));
function generateEmailOptFn(input, force) {
    if (input.isVisitor && !force) {
        return undefined;
    }
    else {
        return "".concat(input.firstName, " ").concat(input.lastName, "@email.com");
    }
}
console.log(generateEmailOptFn({ firstName: "John", lastName: "Doe" }, true));
