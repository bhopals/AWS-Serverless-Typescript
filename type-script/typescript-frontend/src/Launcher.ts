import { Route } from "./Route";

class Launcher {
  private route: any = new Route();
  public launchApp() {
    console.log("App started");
    this.route.handleRequest();
  }
}

new Launcher().launchApp();
