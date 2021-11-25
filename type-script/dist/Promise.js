// Class
class PServer {
    constructor(port, address) {
        this.port = port;
        this.address = address;
    }
    startServer() {
        console.log(`Starting server at ${this.address}:${this.port}`);
    }
    stopServer() { }
    async getData() {
        return "data";
    }
    async getData1() {
        return new Promise((resolve, reject) => {
            if (Math.random() * 10 > 3) {
                resolve("matched");
            }
            else {
                resolve(undefined);
            }
        });
    }
}
const pServer = new PServer(8080, "localhost");
pServer.startServer();
console.log(pServer.getData());
