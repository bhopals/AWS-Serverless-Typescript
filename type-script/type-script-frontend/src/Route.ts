export class Route {
  public handleRequest() {
    const location = this.getRoute();
    return location;
  }

  private getRoute() {
    return window.location.pathname;
  }
}
