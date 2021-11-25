"use strict";
exports.__esModule = true;
var Server_1 = require("./Server");
var Index = /** @class */ (function () {
    function Index() {
        this.server = new Server_1.Server();
    }
    Index.prototype.launchApp = function () {
        this.server.startServer();
    };
    return Index;
}());
new Index().launchApp();
