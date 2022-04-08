jest.mock("aws-sdk");

const SecretsManager = require("aws-sdk/clients/secretsmanager.js"); // v2

const main = require("./index.js");
const log = require("lambda-log");

const mockService = (client) => {
  // aws-sdk v2
  const mock = jest.fn();
  client.prototype.getSecretValue = mock;
  return mock;
};

test("main", async () => {
  mockService(SecretsManager, {
    SecretString: "token",
  });

  const logSpy = jest.spyOn(log, "info").mockImplementation();
  await main.start();
  expect(logSpy).toBeCalledWith("hihi", {
    Timestamp: expect.any(Number),
  });
});
