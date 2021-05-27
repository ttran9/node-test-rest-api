// bring in express
const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

// get a list of ninjas from the db.
router.get("/ninjas", function (req, res, next) {
  Ninja.aggregate()
    .near({
      near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
      maxDistance: 100000, // 100,000 meters
      spherical: true,
      distanceField: "dist.calculated",
    })
    .then((ninjas) => {
      res.send(ninjas);
    })
    .catch(next);
});

// add a new ninja to db.
router.post("/ninjas", function (req, res, next) {
  // save to the db into the Ninjas collection.
  Ninja.create(req.body)
    .then((ninja) => {
      res.send(ninja);
    })
    .catch(next);
});

// update a ninja in the db
router.put("/ninjas/:id", function (req, res, next) {
  const id = req.params.id;
  Ninja.findByIdAndUpdate({ _id: id }, req.body)
    .then(() => {
      Ninja.findOne({ _id: id }).then((ninja) => {
        res.send(ninja);
      });
    })
    .catch(next);
});

// delete a ninja from the db.
router.delete("/ninjas/:id", function (req, res, next) {
  Ninja.findByIdAndRemove({ _id: req.params.id })
    .then((ninja) => {
      res.send(ninja);
    })
    .catch(next);
  // res.send({
  //   type: "DELETE",
  // });
});

module.exports = router;
