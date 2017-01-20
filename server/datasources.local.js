var postgresURI = process.env.DATABASE_URL; 
module.exports = { 
  db: { 
    defaultForType: 'postgresql', 
    connector: 'postgresql', 
    url: postgresURI 
  } 
};

// {
//   "postgresDs": {
//     "host": "localhost",
//     "port": "5432",
//     "database": "sanremo_lb",
//     "username": "andreadippolito",
//     "password": "",
//     "name": "postgresDs",
//     "debug": true,
//     "connector": "postgresql"
//   }
// }
