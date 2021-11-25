class Manager {
  @watchChange
  someProperty: string;
}

const manager: Manager = new Manager();
manager.someProperty = "123";
manager.someProperty = "456";

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
