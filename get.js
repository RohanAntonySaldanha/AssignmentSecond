const express = require('express');
const app = express();

// api get request to get default display message
app.get('/', (req, res) => {
  res.send('My name is Rohan Antony Saldanha');
});

// api get request that diplays url params
app.get('/api/:id', (req, res) => {
  const id = req.params.id;
  const properties = req.query;
  //displays as json
  res.json({
    id,
    properties,
    message: "query and path param displayed"
  });
});

app.listen(3000, () => {
  console.log('Listening to 3000');
});