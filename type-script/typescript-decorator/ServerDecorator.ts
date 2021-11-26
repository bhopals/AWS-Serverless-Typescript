interface IServer {
  startServer(): void;
  stopServer(): void;
}

function logInvocation(
  target: any,
  propertyKey: string,

  description: PropertyDescriptor
) {
  const className = target.constructor.name;
  let originalMethod = description.value;
  description.value = async function (...args: any[]) {
    console.log(
      `${className}#${propertyKey} called with ${JSON.stringify(args)}`
    );
    const result = await originalMethod.apply(this.args);
    console.log(`${className}#${propertyKey} returned ${result}`);
  };
}

class BaseIDServer implements IServer {
  public port: number;
  public address: string;

  constructor(port: number, address: string) {
    this.port = port;
    this.address = address;
  }

  startServer(): void {
    const data = this.getData(123);
    console.log(`BaseIServer is starting at ${this.address}:${this.port}`);
  }

  stopServer(): void {
    console.log(`BaseIServer is stopping at ${this.address}:${this.port}`);
  }

  @logInvocation
  async getData(id: number): Promise<string> {
    return "200 OK - Some special data";
  }
}

// Programming By Interface
const baseIServer: IServer = new BaseIDServer(8080, "localhost");
baseIServer.startServer();
