import { Server } from "./Server";

class Index {
  private server: Server = new Server();
  public launchApp() {
    this.server.startServer();
  }
}

new Index().launchApp();
