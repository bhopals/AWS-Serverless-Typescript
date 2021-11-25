export class Router {
  public handleRequest() {
    const location = this.getRoute();
  }

  private getRoute() {
    return window.location.pathname;
  }
}
