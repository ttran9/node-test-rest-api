function errorHandler(err, req, res, next) {
  // const { message } = err;
  // console.log(err);
  // res.send({ error: message });
  res.status(422).send({ error: err.message });
}

module.exports = {
  errorHandler,
};
