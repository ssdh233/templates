const greeting = require("./index.js");

test("test", () => {
  expect(greeting()).toBe("Hello World");
});
