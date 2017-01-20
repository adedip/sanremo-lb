var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

// Make sure to also put this in `server/server.js`
var PassportConfigurator =
  require('loopback-component-passport').PassportConfigurator;
 
// Include this in your 'facebook-oauth.js' boot script in `server/boot`.
var passportConfigurator = new PassportConfigurator(app);
 
passportConfigurator.init();
passportConfigurator.setupModels({
  userModel: app.models.Voter,
  userIdentityModel: app.models.UserIdentity,
  userCredentialModel: app.models.UserCredential
});
passportConfigurator.configureProvider('facebook-login',
  require('../providers.json')['facebook-login']);