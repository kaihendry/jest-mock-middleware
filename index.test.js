const SecretsManager = require("aws-sdk/clients/secretsmanager");
SecretsManager.prototype.getSecretValue = jest.fn(() => ({
  promise: () => Promise.resolve(jest.fn),
}));

const main = require("./index.js");
const log = require("lambda-log");

test("main", async () => {
  const logSpy = jest.spyOn(log, "info").mockImplementation();
  await main.start();
  expect(logSpy).toBeCalledWith("hihi", {
    Timestamp: expect.any(Number),
  });
});
