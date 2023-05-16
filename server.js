const express = require("express");

const app = express();

app.use(express.json()); //middleware used for json data

let data = []; // empty array initialization

// api get request to get default display message
app.get('/', (req, res) => {
  res.send('My name is Rohan Antony Saldanha');
});

// get request to display json array that is inserted using post request for /api endpoint
app.get("/api", (req, res) => {
  res.json(data);
});

// post request to generate json data into data array 
app.post("/api", (req, res) => {
  const newData = {
    id: req.body.id,
    name: req.body.name,
  };
  data.push(newData);
  console.log(data);
  res.json(data);
});

// api get request that diplays url params
app.get('/api/:id', (req, res) => {
  const id = req.params.id;
  const props = req.query;
  //displays as json
  res.json({
    id : id,
    properties : props,
    message: "query and path param displayed"
  });
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});