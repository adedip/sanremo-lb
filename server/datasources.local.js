// {
//   "postgresDs": {
//     "host": "ec2-54-163-234-20.compute-1.amazonaws.com",
//     "port": "5432",
//     "database": "d993r1iv9qa13l",
//     "username": "oybefnfjfkrwfu",
//     "password": "6ce9ec6282d6a50411b3c64d960cfa213fee6f0811a21abe2e581fecc6d701c2",
//     "name": "postgresDs",
//     "debug": true,
//     "connector": "postgresql"
//   }
// }
var MONGODB_URL = process.env.MONGODB_URL || null;

if (MONGODB_URL) {
  module.exports = {
    db: {
      name: 'db',
      connector: 'loopback-connector-mongodb',
      url: MONGODB_URL
    }
  };
}
