type Props = {
  className?: string;
};

type State = {
  submitted?: boolean;
};

// Type Argument Inference - Could be multiple
function getObjectKeys0<Props, State>(
  arg0: Props,
  arg1: State
): [Props, State] {
  return [arg0, arg1];
}

function getObjectKeys1<T>(arg0: T): T {
  console.log("arg0>", arg0);

  return arg0;
}

function getObjectKeys2<T, V>(arg0: T, arg1: V): V {
  console.log("arg0>", arg0);
  console.log("arg1>", arg1);

  return arg1;
}

const keys1 = getObjectKeys1({ firstName: "John", lastName: "Doe" });
console.log(keys1);
const keys2 = getObjectKeys2(
  { firstName: "John", lastName: "Doe" },
  { address: "Canada" }
);
console.log(keys2);

// BEST PRACTICES
// 1. - Using a Constraints that type properties exists - ARRAY TYPE
// this will cause an error
function identity0<T>(arg: T): T {
  // console.log(arg.length); // Error
  return arg;
}

// SOLUTION 1
interface Length {
  length: number;
}
function identity1<T extends Length>(arg: T): T {
  // length property can now be called
  console.log(arg.length);
  return arg;
}

// SOLUTION 2 - length is now recognised by declaring T as a type of array
function identity2<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

// SOLUTION 3
function identity3<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

// 2. - Using constraints to check an object key exists - OBJECT PROPERTY
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// GENERIC USE CASE
class API {}
class APIService extends API {
  public getRecord<T, U>(endpoint: string, params: T[]): void {}
  public getRecords<T, U>(endpoint: string, params: T[]): void {}
}

// More Details Refer - https://rossbulat.medium.com/typescript-generics-explained-15c6493b510f
