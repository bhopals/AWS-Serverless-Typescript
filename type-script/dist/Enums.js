"use strict";
// auto initialized with 0, 1, 2, ...n - Numeric Values
var AuthError1;
(function (AuthError1) {
    AuthError1[AuthError1["WRONG_CREDENTIALS"] = 0] = "WRONG_CREDENTIALS";
    AuthError1[AuthError1["SERVER_FAILS"] = 1] = "SERVER_FAILS";
    AuthError1[AuthError1["EXPIRED_SESSION"] = 2] = "EXPIRED_SESSION";
    AuthError1[AuthError1["UNEXPECTED_ERROR"] = 3] = "UNEXPECTED_ERROR";
})(AuthError1 || (AuthError1 = {}));
console.log(AuthError1.WRONG_CREDENTIALS); // Number Value
console.log(AuthError1[AuthError1.WRONG_CREDENTIALS]); // String Value
// Initialize with String
var AuthError2;
(function (AuthError2) {
    AuthError2["WRONG_CREDENTIALS"] = "wrong_crdentials";
    AuthError2["SERVER_FAILS"] = "server_fails";
    AuthError2["EXPIRED_SESSION"] = "expired_session";
})(AuthError2 || (AuthError2 = {}));
console.log(AuthError2.WRONG_CREDENTIALS); // Always String Value
function handleError(error) {
    switch (error) {
        case AuthError1.WRONG_CREDENTIALS:
            console.log("Check your input!");
            break;
        case AuthError1.SERVER_FAILS:
            console.log("Restart the server!");
            break;
        case AuthError1.EXPIRED_SESSION:
        case AuthError1.UNEXPECTED_ERROR:
            console.log("Get a new session!");
            break;
        default:
            break;
    }
}
handleError(AuthError1.SERVER_FAILS);
