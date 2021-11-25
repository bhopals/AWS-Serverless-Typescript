function generateEmailTG(person) {
    if (person.isVisitor) {
        return undefined;
    }
    else {
        return "".concat(person.firstName).concat(person.lastName, "@gmail.com");
    }
}
function isPerson(potentialPerson) {
    if ("firstName" in potentialPerson && "lastName" in potentialPerson) {
        return true;
    }
    else {
        return false;
    }
}
function printEmailIfPerson(potentialPerson) {
    if (isPerson(potentialPerson)) {
        console.log(generateEmailTG(potentialPerson));
    }
    else {
        console.log("input is not a Person");
    }
}
printEmailIfPerson({ firstName: "John", lastName: "Doe" }); // JohnDoe@gmail.com
printEmailIfPerson({ firstName: "John", lastName_: "Doe" }); // input is not a Person
