interface PersonTG {
  firstName: string;
  lastName: string;
  isVisitor?: boolean;
  isLoggedIn?: boolean;
}

function generateEmailTG(person: PersonTG): string | undefined {
  if (person.isVisitor) {
    return undefined;
  } else {
    return `${person.firstName}${person.lastName}@gmail.com`;
  }
}

function isPerson(potentialPerson: any): boolean {
  if ("firstName" in potentialPerson && "lastName" in potentialPerson) {
    return true;
  } else {
    return false;
  }
}

function printEmailIfPerson(potentialPerson: any): void {
  if (isPerson(potentialPerson)) {
    console.log(generateEmailTG(potentialPerson));
  } else {
    console.log("input is not a Person");
  }
}

printEmailIfPerson({ firstName: "John", lastName: "Doe" }); // JohnDoe@gmail.com

printEmailIfPerson({ firstName: "John", lastName_: "Doe" }); // input is not a Person
