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
