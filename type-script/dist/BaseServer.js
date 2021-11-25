class BaseServer {
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
class DBServer extends BaseServer {
    // Protected Properties of SUPER class can be accessible here as well
    constructor(port, address) {
        super(port, address);
        console.log(`Starting DB server at ${this.address}:${this.port}`);
    }
}
const appServer = new DBServer(123, "dbServer");
appServer.startServer();
