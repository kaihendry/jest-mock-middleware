jest.mock("aws-sdk");

const SecretsManager = require("aws-sdk/clients/secretsmanager");

const main = require("./index.js");
const log = require("lambda-log");

test("main", async () => {
  const getSecretValueMock = jest.fn();
  SecretsManager.prototype.getSecretValue = getSecretValueMock;
  const logSpy = jest.spyOn(log, "info").mockImplementation();
  await main.start();
  expect(logSpy).toBeCalledWith("hihi", {
    Timestamp: expect.any(Number),
  });
});
