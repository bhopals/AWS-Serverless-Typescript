// You cannnot instantiate abstract class - And it may or may have abstract methods as well
abstract class BaseAbstarctServer {
  //Instance Variable - Attached to the Class Instance (this) - Default ACCESS MODIFIER Public
  protected port: number;
  protected address: string;
  protected isUserType: boolean = true;

  constructor(port: number, address: string) {
    this.port = port;
    this.address = address;
  }

  //Method
  startServer() {
    console.log(`Starting server at ${this.address}:${this.port}`);
  }

  abstract stopServer(): void;
}

class ProfServer extends BaseAbstarctServer {
  // Protected Properties of SUPER class can be accessible here as well
  constructor(port: number, address: string) {
    super(port, address);
    console.log(`Starting PROF server at ${this.address}:${this.port}`);
  }

  // Must provide implementation of Parent Abstract classes abstract Methods
  // If not then this error - Non-abstract class 'ProfServer' does not implement inherited abstract member 'stopServer' from class 'BaseAbstarctServer'.
  stopServer(): void {
    console.log(`Stopping PROF server at ${this.address}:${this.port}`);
  }
}

const profServer = new ProfServer(123, "dbServer");
profServer.startServer();
