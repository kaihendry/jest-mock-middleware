// mock @middy/secrets-manager with before, after, onError functions that are returned as a function
jest.fn("@middy/secrets-manager", {
  onError: jest.fn(),
  before: jest.fn(),
  after: jest.fn(),
});

const main = require("./index.js");
const log = require("lambda-log");

test("main", async () => {
  const logSpy = jest.spyOn(log, "info").mockImplementation();
  await main.start();
  expect(logSpy).toBeCalledWith("hihi", {
    Timestamp: expect.any(Number),
  });
});
