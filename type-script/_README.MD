## Typescript

- Add static type definition to JS
- Superset of JS. It is compiled(trans-piled) to JS, then run
- Use the latest feature of JS
- Advanced features, like in other languages (Java, C#, Phyton)
  - Classes, Interfaces, instance variables, access modifiers, decorators

#### How to run TS code

- Compile to JS -> Node, Browser
- Directly with ts-node (npm install -g ts-node)
- Bundle with a bundling tool (Webpack, Parcel), and run in Browser
- To convert/run typescript into JS

  - `tsc <file-name>.ts` (convert TS into JS)
  - `node <file-name>.js` (Run JS)
  - OR with using `ts-node <file-name>.ts` (Contert TS into JS and RUN JS file)

- The Type definition (TS) does not Exists at RUNTIME

- Type Guards

  - interface have one drawback that they do not exist during the RUNTIME of the code, means if we dynamically gets an Object
    from an external service, such as REST API, we have to DO SOME CHECKS to make sure it is the RIGHT TYPE
  - To do that, we usually use TYPE GUARDS - Use "in" operations = 'firstName' in Person
  - To dynamically check the inputs that we receive from outside
  - The IN Operator returns true if the specified property is in the specified object or its prototype chain.

- Typescript Compiler options

  - one way (use Command Line and pass all the options as command)
    - `tsc <file-name>.ts` && `node <file-name>.js`
    - `tsc <file-name>.ts --watch` && `node <file-name>.js`
    - `ts-node <file-name>.ts` (Manual Way)
  - second way (use tsconfig.json )
    - To generate default tsconfig - `tsc --init`
    - delete all default generated options (refer `generated-tsconfig.txt` for all the options)
    - add compiler options - { compilerOptions: { roorDir: 'src', outDir: 'dist'}}
    - run `tsc` - once the command finished execution, you will find generated JS files in the `dist` folder
    - In CompilerOptions, make sure to add `lib: ["DOM"]` or any other library declaration files that describe the target runtime environment.

- Classes

  - It is a Syntatical Sugar
  - It can have constructor, instance variables, instance methods, static variables, static methods
  - ACCESS MODIFIER (private, public, protected) - default public
  - However, in Typescript you could still use private, protected instance variables using `<> as any`

- Inheritance

  - Interfaces allows us to have a `has-a` relationship compared to the class inheritance that provides `is-a` relationship
  - interfaces naming convention - `I<interface-name>` - IPerson, IGuest, IAuth, IChart etc...
  - One Class/Interface can extends other Class/Interface
  - An Abstract class May have one or more abstract methods
  - The sub class should provide implementation of the abstract methods of super/parent abstract methods
  - You cannot instantiate Abstract Class and Interfaces
  - We usually implements Interface and Extends abstract Class
  - Interface is kind of an abstract class with all abstract methods
  - You can implement multiple interfaces but cannot extends multiple classes
  - Interfaces allow for a loosely coupled has-a relationship between classes, similar to composition.
  - Interfaces force a developer to provide their own implementation.
  - Classes can implement multiple interfaces.
  - Always favor composition over inheritance because inheritance can be abused very easily.
    It could lead to a large hierarchy of classes that depend on each other, which is fragile.

- Static

  - Static methods and access modifiers
  - Static methods can mutate static properties
  - Static members can't be accessed by object instances
  - In Typescript, usually we use static methods in UTILITY class

- Generics

  - Provides an ability to pass a Range of Types to a Components. Adding an extra layer of abstraction
  - Here T, V etc are Generic Types (can use any Names)
  - function identity<T>(arg: T): T {return arg;}
  - function identity<T, V>(argT: T, argV: V): T {return argT;}
  - function identity<T, V>(argT: T, argV: V): [T, V] {return [argT, argV];}
  - We can have a GENERIC Interface as well as a GENERIC Class
  - Type Argument Inference
  - Generics are purely a development safety net for compile time that will ensure type safe abstraction of your code.
  - More Details Refer - https://rossbulat.medium.com/typescript-generics-explained-15c6493b510f
  - TypeScript - Composing Types (Conditional types) v/s Generic Types
  - Type Alias v/s Interfaces
  - Leteral Types and Literal Inference

- Strict Checks

  - Always Strict - `alwaysStrict`
  - No Implicit Any - `"noImplicitAny": true` - If there is `any` type then we need to define it implicitly
  - No Implicit This - `"noImplicitThis": true` - To avoid `this` undefined in nested function - Typescript will complain
  - Strict Null Check - `"strictNullChecks": true` - Will Complain if in any method we do not use Null/Undefined check before using it
  - String Property Intilizer - `"strictPropertyInitialization": true` - Make sure properties are initialized
  - Enable All Strict Checks - `"strict": true`

- ENUM

  - When to use those ?
    - When we have a set of options (defined) - An ideal for SWITCH case

- Decorator
- Support Annotating or modifying classes and class members.
- Decorator provide a way tp add both annotations and a meta-programming syntax for class declarations and members
- It can be attached to Class, Method, Accessor Property, or Parameters - @expression
- Decorators are basically a Function
- Example

  - We create a Target Class where we want to use it
    class Manager {  
     @watchChange someProperty: string;
    }
  - We create a Decorator function - here `target` will be our Manager Class not its instance and the `key` is the name of the property
    function watchChange(target: any, key: string) {} // Refer - typescript-decorator/Decorator.ts
  - Two ways to call decorator
    - Use @<decorator-name> on the Class, Method, Parameter (whereever you want to apply)
      @watchChange
      someProperty: string
    - call decorator as method
      watchChange(<Class>.prototype, '<property-name>')
      watchChange(Manager.prototype, 'someProperty')

TypeScripts Features

- Mapped Type

  - example
    interface Warrior {
    name: string;
    weapon: string;
    strength: number;
    }
    type Category<T> = {
    [P in keyof T]?: T[P]
    }

    type Samurai = Category<Warrior>;
    //Will only allow Samurai to have these properties only

- KEYWORDS
  - TypeScript - Composing Types (Conditional types) v/s Generic Types
  - Type Alias v/s Interfaces
  - Leteral Types and Literal Inference
  - Decorator - Annotations and Meta Programming Syntax for Class Declarations and Members
