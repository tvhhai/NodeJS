const Test = require("../models/test");

exports.get = function (req, res, next) {
  // res.render('index', { title: 'Express' })
  // res.json({ name: "test" });

  // Callback
  // Text.find({}, function (err, data) {
  //   if (!err) {
  //     res.json(data);
  //   } else {
  //     next(err);
  //     // res.status(400).json({ err: "err" });
  //   }
  // });

  // Promise
  Test.find({})
    .then((data) => res.json(data))
    .catch(next);
};

exports.getById = function (req, res, next) {
  Test.findById(req.params.id)
    .then((data) => res.json(data))
    .catch(next);
};

exports.add = function (req, res, next) {
  const test = new Test(req.body);
  test.save().then(res.status(204)).catch(next);
};

exports.update = function (req, res, next) {};

exports.delete = function (req, res, next) {};
