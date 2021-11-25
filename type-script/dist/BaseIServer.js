class BaseIServer {
    constructor(port, address) {
        this.port = port;
        this.address = address;
    }
    startServer() {
        console.log(`BaseIServer is starting at ${this.address}:${this.port}`);
    }
    stopServer() {
        console.log(`BaseIServer is stopping at ${this.address}:${this.port}`);
    }
}
// Programming By Interface
const baseIServer = new BaseIServer(8080, "localhost");
baseIServer.startServer();
