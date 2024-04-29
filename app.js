function logIn(username, password) {
  // if the user does not input a username or password, the function should return false, otherwise should return true if both values have some information inside

  if (username.length === 0 || password.length === 0) {
    return false;
  } else if (username === "lauren" && password === "password") {
    return true;
  } else {
    return false;
  }
}

function createAccount(email, password) {
  if (email.length === 0 || password.length === 0) {
    return false;
  } else if (email === "email" && password === "password") {
    return true;
  } else {
    return false;
  }
}
function googleLogIn(email) {
  if (email.includes("@gmail.com")) {
    return true;
  } else {
    return false;
  }
}

module.exports = { logIn, createAccount, googleLogIn };
