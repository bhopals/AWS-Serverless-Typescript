// You cannnot instantiate abstract class - And it may or may have abstract methods as well
class BaseAbstarctServer {
    constructor(port, address) {
        this.isUserType = true;
        this.port = port;
        this.address = address;
    }
    //Method
    startServer() {
        console.log(`Starting server at ${this.address}:${this.port}`);
    }
}
class ProfServer extends BaseAbstarctServer {
    // Protected Properties of SUPER class can be accessible here as well
    constructor(port, address) {
        super(port, address);
        console.log(`Starting PROF server at ${this.address}:${this.port}`);
    }
    // Must provide implementation of Parent Abstract classes abstract Methods
    // If not then this error - Non-abstract class 'ProfServer' does not implement inherited abstract member 'stopServer' from class 'BaseAbstarctServer'.
    stopServer() {
        console.log(`Stopping PROF server at ${this.address}:${this.port}`);
    }
}
const profServer = new ProfServer(123, "dbServer");
profServer.startServer();
