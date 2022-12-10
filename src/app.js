const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors);

app.get("/", (req, res) => {
  return res.json([
    {
      id: 1,
      name: "John Doe"
    },
    {
      id: 2,
      name: "Alice Wang"
    },
    {
      id: 3,
      name: "Emmy Duble"
    }
  ])
})

app.listen(5000, () => {
  console.log("Server running on port " + 5000)
})