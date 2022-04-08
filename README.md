# Working

Struggling to mock away SecretsManager in [middy secrets-manager middleware](https://github.com/middyjs/middy/blob/2.x/packages/secrets-manager/index.js#L11)

What I was confused by was the evaluation of the middy handler. So it's
important to mock BEFORE it's imported!
