const express = require("express");
const bodyParser = require("body-parser");
// const routes = require("./routes/api");
const mongoose = require("mongoose");
const errorHandlers = require("./middleware/errorHandler");

// set up express app.
const app = express();

// connect to mongodb.
mongoose.connect("mongodb://localhost/ninjago", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise; // override mongoose's promise.

// set up bodyParser middleware.
app.use(bodyParser.json());

// initialize routes
app.use("/api", require("./routes/api"));

// error handling middleware
// app.use(function (err, req, res, next) {
//   // const { message } = err;
//   // console.log(err);
//   // res.send({ error: message });
//   res.status(422).send({ error: err.message });
// });
app.use(errorHandlers.errorHandler);

// listen for requests on port 4000
app.listen(process.env.port || 4000, function () {
  console.log("now listening for requests");
});
