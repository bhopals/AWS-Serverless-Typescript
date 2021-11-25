function returnKeys(arg0) {
    console.log("arg0>", arg0);
    return arg0;
}
const result = returnKeys({ firstName: "John", lastName: "Doe" });
console.log(result);
const John0 = {
    name: "John",
    age: 12,
    special: "HERE is the special version",
};
console.log("John0>", John0);
const John1 = {
    name: "John",
    age: 12,
    special: 1111,
};
console.log("John1>", John1);
class Observable {
    subscribe(arg) {
        console.log(`Subscribed to ${arg.name}, ${arg.age}, ${arg.special}`);
    }
}
new Observable().subscribe(John0);
