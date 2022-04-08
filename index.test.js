jest.mock("aws-sdk");

let SecretsManager = require("aws-sdk/clients/secretsmanager");

const main = require("./index.js");
const log = require("lambda-log");

const mockService = (client) => {
  // aws-sdk v2
  const mock = jest.fn();
  // mock promise for aws-sdk v2
  client.prototype.getSecretValue = jest.fn(() => ({
    promise: () => Promise.resolve({ SecretString: "token" }),
  }));
  return mock;
};

test("main", async () => {
  SecretsManager = mockService(SecretsManager, {
    SecretString: "token",
  });

  const logSpy = jest.spyOn(log, "info").mockImplementation();
  await main.start();
  expect(logSpy).toBeCalledWith("hihi", {
    Timestamp: expect.any(Number),
  });
});
