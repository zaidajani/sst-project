const express = require('express');
const mail = require('./email/email');
const app = express();

app.use(express.json());

app.post('/ask', (req, res) => {
  const email = req.body.email;
  const message = req.body.message;

  
});

app.listen(3000, () => {
  console.log("server is running");
});