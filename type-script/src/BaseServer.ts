class BaseServer {
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
}

class DBServer extends BaseServer {
  // Protected Properties of SUPER class can be accessible here as well
  constructor(port: number, address: string) {
    super(port, address);
    console.log(`Starting DB server at ${this.address}:${this.port}`);
  }
}

const appServer = new DBServer(123, "dbServer");
appServer.startServer();
