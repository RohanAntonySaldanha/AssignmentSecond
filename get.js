const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('My name is Rohan Antony Saldanha');
});

app.get('/api/:id', (req, res) => {
  const id = req.params.id;
  const properties = req.query;

  res.json({
    id,
    properties,
    message: "query and path param displayed"
  });
});

app.listen(3000, () => {
  console.log('Listening to 3000');
});