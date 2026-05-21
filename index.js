const express = require('express');
const config = require('./config');

const app = express();

app.get('/', (req, res) => {
  res.send(config.greeting);
});

app.listen(config.port, config.host, () => {
  console.log(`Server running at http://${config.host}:${config.port}`);
});
