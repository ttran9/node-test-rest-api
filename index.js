const express = require("express");
// const routes = require("./routes/api");

// set up express app.
const app = express();

// use our routes.
app.use("/api", require("./routes/api"));

// listen for requests on port 4000
app.listen(process.env.port || 4000, function () {
  console.log("now listening for requests");
});
