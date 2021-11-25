// Class
class Server {
  //Instance Variable - Attached to the Class Instance (this)
  port: number;
  address: string;
  isClient: boolean;

  //Constructor
  constructor(port: number, address: string) {
    this.port = port;
    this.address = address;
  }

  //Method
  startServer() {
    console.log(`Starting server at ${this.address}:${this.port}`);
  }
}

const someServer = new Server(8080, "localhost");
someServer.startServer();
