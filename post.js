const express = require("express");

const app = express();

app.use(express.json()); //middleware used for json data

let data = []; // empty array initialization

// get request to display json array that is inserted using post request for /api/data endpoint 
app.get("/api/data", (req, res) => {
  res.json(data);
});

// post request to generate json data into data array 
app.post("/api/data", (req, res) => {
  const newData = {
    id: req.body.id,
    name: req.body.name,
  };
  data.push(newData);
  console.log(data);
  res.json(data);
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
