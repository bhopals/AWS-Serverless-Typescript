interface IServer {
  startServer(): void;
  stopServer(): void;
}

class BaseIServer implements IServer {
  public port: number;
  public address: string;

  constructor(port: number, address: string) {
    this.port = port;
    this.address = address;
  }

  startServer(): void {
    console.log(`BaseIServer is starting at ${this.address}:${this.port}`);
  }
  stopServer(): void {
    console.log(`BaseIServer is stopping at ${this.address}:${this.port}`);
  }
}

// Programming By Interface
const baseIServer: IServer = new BaseIServer(8080, "localhost");
baseIServer.startServer();
