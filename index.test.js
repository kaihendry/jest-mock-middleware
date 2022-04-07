const main = require("./index.js");
const log = require("lambda-log");
const secretsManager = require("@middy/secrets-manager");

test("main", async () => {
  const logSpy = jest.spyOn(log, "info").mockImplementation();
  // mock secretsManager middleware to do nothing
  const secretsManagerSpy = jest
    .spyOn(secretsManager, "handler")
    .mockImplementation(() => {});

  await main.start();
  expect(logSpy).toBeCalledWith("hihi", {
    Timestamp: expect.any(Number),
  });
});
