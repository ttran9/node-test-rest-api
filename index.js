const express = require("express");

// set up express app.
const app = express();

// handle request.
app.get("/api", function (req, res) {
  console.log("GET request");
  res.send({
    name: "Yoshi",
  });
});

// listen for requests on port 4000
app.listen(process.env.port || 4000, function () {
  console.log("now listening for requests");
});
