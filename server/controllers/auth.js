const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.signup = (req, res) => {
  //   console.log(req.body);
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({ err: errorHandler(err) });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({
      user,
    });
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User with that email does not exist. Please signup",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({
        err: "Password doesn't match with the existing email ",
      });
    }
    // console.log(user);
    const { _id, firstName, lastName, email, role } = user;
    return res.json({ user: { _id, firstName, lastName, email, role } });
  });
};

exports.signout = (req, res) => {
  res.json({ message: "Signout success" });
};
