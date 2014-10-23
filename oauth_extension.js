module.exports = function(config) {
  return function(server) {
    var argo = server.httpServer.cloud;

    argo
      .use(config.oauth.argoMiddleware({
        authorizeUri: config.authorizeUri || '^/authorize.*',
        accessTokenUri: config.accessTokenUri || '/accesstoken'
      }))
      .use(function(handle) {
        handle('resource:request:before', function(env, next) {
          env.oauth.authenticate(config.scopes || [], env, function(env) {
            if (env.oauth.error) {
              env.resource._skip = true;
            }

            next(env);
          });
        })
      });
  }
};
