// Class
class Server {
    //Constructor
    //   constructor(private port: number, private address: string) {
    //     this.port = port;
    //     this.address = address;
    //   }
    //Constructor
    constructor(port, address) {
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
const userTpe1 = someServer.userTpe1; // With use of '<instance> as any' we can use even private instance variables
const userTpe2 = someServer.userTpe2; // With use of '<instance> as any' we can use even protected instance variables
