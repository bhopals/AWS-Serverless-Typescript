// auto initialized with 0, 1, 2, ...n - Numeric Values
enum AuthError1 {
  WRONG_CREDENTIALS,
  SERVER_FAILS,
  EXPIRED_SESSION,
  UNEXPECTED_ERROR,
}
console.log(AuthError1.WRONG_CREDENTIALS); // Number Value
console.log(AuthError1[AuthError1.WRONG_CREDENTIALS]); // String Value

// Initialize with String
enum AuthError2 {
  WRONG_CREDENTIALS = "wrong_crdentials",
  SERVER_FAILS = "server_fails",
  EXPIRED_SESSION = "expired_session",
}
console.log(AuthError2.WRONG_CREDENTIALS); // Always String Value

function handleError(error: AuthError1) {
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
