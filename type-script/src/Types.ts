// undefined, null, never, unknown

const abc = null;
let def = undefined;

function getData(): string | undefined {
  return "";
}
const data = getData();
if (data) {
  const someOtherData = data;
}

// unknown
let input: unknown;
input = "someInput";
let someSensitiveData: string;

// someSensitiveData = input // Will get an errro - To resolve that we need to place a Check
if (typeof input === "string") {
  someSensitiveData = input;
}

function doTasks(tasks: number): void | never {
  if (tasks > 3) {
    throw new Error("Too many Tasks!!");
  }
}

const stuff = doTasks(2);
