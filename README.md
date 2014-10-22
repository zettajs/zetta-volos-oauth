# zetta-oauth-extension

An extension for Zetta to allow OAuth via [volos](https://github.com/apigee-127/volos).

## Install

`npm install zetta-oauth-extension`

## Example

```js
var zetta = require('zetta');
var OAuthExtension = require('./oauth_extension');
var config = require('./config');

zetta()
  .use(OAuthExtension(config))
  .listen(1337);
```

For a configuration sample, see: [volos sampleconfig.js](https://github.com/apigee-127/volos/blob/master/samples/basic/sampleconfig.js).
