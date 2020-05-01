const { Client } = require('pg');

const client = new Client('postgres:postgres:@localhost:5432/air_bnb');


client.connect((err) => {
  if (err) {
    console.log('ERROR postgres', err);
  } else {
    console.log('Connected successfuly to postgres air_bnb');
  }
});


module.exports = client;
