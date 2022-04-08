// mock @middy/secrets-manager with before, after, onError functions that are returned as a function

const main = require("./index.js");
const log = require("lambda-log");

test("main", async () => {
  const logSpy = jest.spyOn(log, "info").mockImplementation();
  await main.start();
  expect(logSpy).toBeCalledWith("hihi", {
    Timestamp: expect.any(Number),
  });
});
