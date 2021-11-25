export interface IServer {
  startServer(): void;
  stopServer(): void;
}

// Class
class Server {
  //Instance Variable - Attached to the Class Instance (this) - Default ACCESS MODIFIER Public
  port: number;
  address: string;
  isClient: boolean = true;

  //Private Instance Variables
  private userType1: boolean = true;
  protected userType2: boolean = true; // Only accessible to the Instance/Class that extends Server - All the Child classes can access

  //Constructor
  //   constructor(private port: number, private address: string) {
  //     this.port = port;
  //     this.address = address;
  //   }

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

// const userTpe1 = someServer.userType1; // Will not work because it is Private field
// const userTpe2 = someServer.userType2; // Will not work because it is Protected field

// Magic Trick to use Private/Protected instance variables
const userTpe1 = (someServer as any).userTpe1; // With use of '<instance> as any' we can use even private instance variables
const userTpe2 = (someServer as any).userTpe2; // With use of '<instance> as any' we can use even protected instance variables
