const log = require("lambda-log");
const middy = require("@middy/core");
const secretsManager = require("@middy/secrets-manager");

async function baseHandler() {
  log.info("hihi", { Timestamp: new Date().getTime(), nothing: undefined });
}

const start = middy(baseHandler).use(secretsManager());

module.exports = { start };
