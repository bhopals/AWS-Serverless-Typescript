function returnKeys<T extends Object>(arg0: T): T {
  console.log("arg0>", arg0);
  return arg0;
}

const result = returnKeys({ firstName: "John", lastName: "Doe" });
console.log(result);

interface PersonA<T> {
  name: string;
  age: number;
  special: T;
}

const John0: PersonA<string> = {
  name: "John",
  age: 12,
  special: "HERE is the special version",
};
console.log("John0>", John0);

const John1: PersonA<number> = {
  name: "John",
  age: 12,
  special: 1111,
};
console.log("John1>", John1);

class Observable<T extends PersonA<string>> {
  subscribe(arg: T) {
    console.log(`Subscribed to ${arg.name}, ${arg.age}, ${arg.special}`);
  }
}

new Observable<typeof John0>().subscribe(John0);
