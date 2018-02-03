const express = require('express');
const path = require('path');
const generatePw = require('password-generator');

const app = express();

// serve static files from the react app
app.use(express.static(path.join(__dirname, 'client/build')));

// put all the API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  const passwords = Array.from(Array(count).keys())
    .map(i => generatePw(12, false))

  //return passwords as json
  res.json(passwords);

  console.log('sent 5 passwords');
});

// catchall handler for any requrest that doesn't match one above

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`password generator is listenin on ${port}`);