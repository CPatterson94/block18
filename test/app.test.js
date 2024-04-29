const { logIn, createAccount, googleLogIn } = require("../app.js");

test("was logging in successful?", () => {
  expect(logIn("lauren", "")).toBeFalsy();
  expect(logIn("", "password")).toBeFalsy();
  expect(logIn("", "")).toBeFalsy();
  expect(logIn("lauren", "password")).toBeTruthy();
  expect(logIn("tj", "password")).toBeFalsy();
});

test("was creating an account successful?", () => {
  expect(createAccount("email", "")).toBeFalsy();
  expect(createAccount("", "password")).toBeFalsy();
  expect(createAccount("", "")).toBeFalsy();
  expect(createAccount("email", "password")).toBeTruthy();
  expect(createAccount("tj", "password")).toBeFalsy();
});
test("logging in with google", () => {
  expect(googleLogIn("tj@gmail.com")).toBeTruthy();
  expect(googleLogIn("tj@yahoo.com")).toBeFalsy();
  expect(googleLogIn("daniel@gmail.com")).toBeTruthy();
  expect(googleLogIn("daniel@yahoo.com")).toBeFalsy();
});
