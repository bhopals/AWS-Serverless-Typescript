// Class
class PServer {
  port: number;
  address: string;
  constructor(port: number, address: string) {
    this.port = port;
    this.address = address;
  }

  startServer() {
    console.log(`Starting server at ${this.address}:${this.port}`);
  }

  stopServer(): void {}

  async getData(): Promise<string> {
    return "data";
  }

  async getData1(): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
      if (Math.random() * 10 > 3) {
        resolve("matched");
      } else {
        resolve(undefined);
      }
    });
  }
}

const pServer = new PServer(8080, "localhost");
pServer.startServer();
console.log(pServer.getData());
