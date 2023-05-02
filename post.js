const express = require("express");

const app = express();

app.use(express.json());

let data = [];

app.get("/api/data", (req, res) => {
  res.json(data);
});

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
