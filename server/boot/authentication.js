module.exports = function enableAuthentication(server) {
  // enable authentication
  server.enableAuth();
  server.middleware('auth', server.loopback.token({
    model: server.models.accessToken,
    currentUserLiteral: 'me'
  }));
};
