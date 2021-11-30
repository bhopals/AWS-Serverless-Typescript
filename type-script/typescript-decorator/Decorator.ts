// An Object
const someObject = {
  someProperty: "initial",
};

// Decorator - watchChange
function watchChange(target: any, key: string) {
  let property = target[key];

  const getter = () => property;
  const setter = (newVal: any) => {
    console.log(`${key as string} changed from ${property} to ${newVal}`);
    property = newVal;
  };

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    configurable: true,
    enumerable: true,
  });
}

// Decorator Factory - linkValue
function linkValue(otherObject: any) {
  return function (target: any, key: string) {
    let property = target[key];

    const getter = () => property;
    const setter = (newVal: any) => {
      console.log(`${key as string} changed from ${property} to ${newVal}`);
      property = newVal;
      otherObject[key] = newVal;
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
      enumerable: true,
    });
  };
}
class Manager {
  //METHOD 1
  // @watchChange
  @linkValue(someObject)
  someProperty: string;
}

//METHOD 2
// watchChange(Manager.prototype, "someProperty");

const manager: Manager = new Manager();
manager.someProperty = "123";

console.log("someObject.someProperty:" + someObject.someProperty);
manager.someProperty = "456";

console.log("someObject.someProperty:" + someObject.someProperty);
