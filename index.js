const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/user-information', (req, res) => {
  res.send({
    name: 'Stefan',
    lastname: 'Generalao',
    age: 97,
  });
});

app.listen(3001);