// User Defined Types
interface Person {
  firstName: string;
  lastName: string;
  job: job;
}

type job = "ENGINEER" | "PROGRAMMER";

function generateEmail(input: Person): string {
  return `${input.firstName} ${input.lastName}@email.com`;
}

console.log(
  generateEmail({ firstName: "John", lastName: "Doe", job: "ENGINEER" })
);

// TYPE WITH Optional Properties (?)
interface PersonOptType {
  firstName: string;
  lastName: string;
  job?: job;
  isVisitor?: boolean;
}

function generateEmailOptType(input: PersonOptType): string | undefined {
  if (input.isVisitor) {
    return undefined;
  } else {
    return `${input.firstName} ${input.lastName}@email.com`;
  }
}

console.log(generateEmailOptType({ firstName: "John", lastName: "Doe" }));

// FUNCTION WITH Optional Properties (?)
interface PersonOptFn {
  firstName: string;
  lastName: string;
  job?: job;
  isVisitor?: boolean;
}

function generateEmailOptFn(
  input: PersonOptFn,
  force?: boolean
): string | undefined {
  if (input.isVisitor && !force) {
    return undefined;
  } else {
    return `${input.firstName} ${input.lastName}@email.com`;
  }
}

console.log(generateEmailOptFn({ firstName: "John", lastName: "Doe" }, true));
